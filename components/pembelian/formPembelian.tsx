"use client";
import { Button, DatePicker, DateValue, Input } from "@nextui-org/react";
import React, { useState } from "react";
import TableInputPembelian from "./tableInputPembelian";
import { useSession } from "next-auth/react";
import { createPembelian } from "@/app/lib/pembelian/action";
import PageHeader from "../pageHeader";

interface Props {
  produk: ProdukType[] | undefined;
}

const DataDefault: DetailPembelianType[] = [
  {
    kode_produk: "",
    nama_produk: "",
    qty: 1,
    harga_beli: 0,
  },
];

const defaultDataSave: TransaksiHeaderType = {
  tgl_transaksi: "",
  kode_transaksi: "",
  company: "",
  jenis_transaksi: "",
  deskripsi: "",
  user: "",
  data: [
    {
      kode_transaksi: "",
      no_akun: "",
      kode_produk: "",
      qty: 0,
      harga: 0,
    },
  ],
};
function FormPembelian(props: Props) {
  const [tanggalTransaksi, settanggalTransaksi] = useState<DateValue | null>();
  const [desc, setDesc] = useState("");
  const [dataPemelian, setdataPemelian] =
    useState<DetailPembelianType[]>(DataDefault);

  const addItem = () => {
    setdataPemelian([
      ...dataPemelian,
      { kode_produk: "", nama_produk: "", qty: 1, harga_beli: 0 },
    ]);
  };

  const session = useSession();
  const handleClickSimpan = async () => {
    const company = session.data?.user.company || "";
    const user = session.data?.user.email || "";
    const tanggal = tanggalTransaksi?.toString() || "";

    const dataDetail = dataPemelian.map((item) => ({
      ...item,
      kode_transaksi: "",
      no_akun: "",
      kode_produk: item.kode_produk,
      qty: Number(item.qty),
      harga: Number(item.harga_beli),
    }));

    const newDataSave: TransaksiHeaderType = {
      deskripsi: desc,
      kode_transaksi: "",
      tgl_transaksi: tanggal,
      jenis_transaksi: "1",
      company: company,
      user: user,
      data: dataDetail,
    };

    setTimeout(async () => {
      const create = await createPembelian(newDataSave);
      console.log(create);
    }, 0);
  };
  function jumlahTransaksi() {
    const data = dataPemelian.reduce(
      (total: number, v: DetailPembelianType) =>
        (total = total + v.harga_beli * v.qty),
      0
    );
    return data;
  }
  function handleChangeQty(e: number, i: number) {
    setdataPemelian((prevData) => {
      const newData = [...prevData];
      newData[i].qty = e;
      return newData;
    });
  }

  function handleChangeHbeli(e: number, i: number) {
    setdataPemelian((prevData) => {
      const newData = [...prevData];
      newData[i].harga_beli = e;
      return newData;
    });
  }
  function handleData(e: string, i: number) {
    const filterProduk = (array: ProdukType[]) => {
      return array.filter((el: ProdukType) => {
        return el.nama_produk.includes(e);
      });
    };
    if (props.produk !== undefined) {
      const dataProduk: ProdukType[] = filterProduk(props.produk);
      setdataPemelian((prevData) => {
        const newData = [...prevData];
        newData[i].nama_produk = e;
        newData[i].kode_produk = dataProduk[0].kode_produk;
        newData[i].harga_beli = dataProduk[0].harga_beli;
        return newData;
      });
    }
  }
  return (
    <div>
      <PageHeader title={"INPUT PENJUALAN"} />
      <div className="flex-col space-y-2 mt-2">
        <DatePicker
          label="Tanggal Transaksi"
          size="sm"
          variant="bordered"
          className="max-w-[284px]"
          value={tanggalTransaksi}
          onChange={(e) => settanggalTransaksi(e)}
          isRequired
        />
        <Input
          type="text"
          size="sm"
          label="Deskripsi"
          variant="bordered"
          className="max-w-6/12"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Masukkan dekskripsi transaksi..."
          isRequired
        />
      </div>
      <div className="flex justify-end mt-2">
        <Button
          size="sm"
          className="bg-primary-500 text-foreground-100"
          onClick={addItem}
        >
          Tambah Item
        </Button>
      </div>
      <div className="border-1 border-primary-100 mt-2 shadow-primary-100 p-3 min-h-[300px]">
        <TableInputPembelian
          produk={props.produk}
          dataPembelian={dataPemelian}
          handleData={handleData}
          handleChangeQty={handleChangeQty}
          handleChangeHbeli={handleChangeHbeli}
        />
      </div>
      <div className="flex justify-between items-center px-4 py-2 ">
        <label>Total Pembelian</label>
        <Input
          type="text"
          className="w-3/12"
          value={jumlahTransaksi().toString()}
        />
      </div>
      <div className="flex justify-end px-4">
        <Button
          onClick={handleClickSimpan}
          size="sm"
          className="bg-primary-400 text-foreground-100 px-4"
        >
          Simpan
        </Button>
      </div>
    </div>
  );
}

export default FormPembelian;
