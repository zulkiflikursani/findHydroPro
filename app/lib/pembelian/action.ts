"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";
import { getServerSession } from "next-auth";

export async function createPembelian(req: TransaksiHeaderType) {
  //   console.log("data-create", req);

  const session = await getServerSession(options);
  const prisma = new PrismaClient();

  const tgl_transaksi = req.tgl_transaksi;
  const kode_transaksi = "asdkfhasdf";
  const company = session?.user.company || "";
  const user = session?.user.email || "";
  const desk = req.deskripsi;

  const dataDetail: TransaksiDetailType[] = await req.data.map((item) => ({
    kode_transaksi: kode_transaksi,
    no_akun: item.no_akun,
    kode_produk: item.kode_produk,
    qty: item.qty,
    harga: item.harga,
  }));

  const transactionCretePembelian = await prisma.$transaction(async (tx) => {
    const createDataPembelian = await tx.tb_transaksi_header.create({
      data: {
        kode_transaksi: kode_transaksi,
        company: company,
        tgl_transaksi: tgl_transaksi,
        jenis_transaksi: "1",
        deksripsi: desk,
        user: user,
      },
    });

    if (createDataPembelian) {
      const createPembeliaDetail = await tx.tb_transaksi_detail.createMany({
        data: dataDetail,
      });
      return createPembeliaDetail;
    }
  });

  if (transactionCretePembelian) {
    return {
      status: "ok",
      message: "Berhasil Meyimpan data",
    };
  } else {
    return {
      status: "fail",
      message: "Gagal Menyimpan Data",
    };
  }
}
