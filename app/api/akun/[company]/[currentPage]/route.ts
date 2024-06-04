import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { company: string; currentPage: number } }
) {
  const getParams = req.nextUrl.searchParams;
  const serchParam = getParams.get("query");
  const prisma = new PrismaClient();
  try {
    const LIMIT_PER_PAGE = 15;
    const offset = (params.currentPage - 1) * LIMIT_PER_PAGE;
    const data = await prisma.$queryRawUnsafe(
      `select  akunheaders.kode_akun_header, akunheaders.nama_akun_header,akundetail.kode_akun,akundetail.nama_akun from akundetail left join akunheaders on akundetail.kode_akun_header = akunheaders.kode_akun_header where akundetail.company = ? and (
        akundetail.nama_akun like CONCAT('%',?,'%') 
        or akunheaders.kode_akun_header like CONCAT('%',?,'%') 
        or akunheaders.nama_akun_header like CONCAT('%',?,'%') 
        or akundetail.kode_akun like CONCAT('%',?,'%') 
        or akundetail.nama_akun like CONCAT('%',?,'%') 
      ) 
      LIMIT  ${LIMIT_PER_PAGE} offset ${offset}`,
      params.company,
      serchParam,
      serchParam,
      serchParam,
      serchParam,
      serchParam
    );
    const jumlahdata = await prisma.$queryRawUnsafe<
      | {
          count: bigint;
        }
      | any
    >(
      `select COUNT(*) AS count from akundetail left join akunheaders on akundetail.kode_akun_header = akunheaders.kode_akun_header where akundetail.company = ? and (
        akundetail.nama_akun like CONCAT('%',?,'%') 
        or akunheaders.kode_akun_header like CONCAT('%',?,'%') 
        or akunheaders.nama_akun_header like CONCAT('%',?,'%') 
        or akundetail.kode_akun like CONCAT('%',?,'%') 
        or akundetail.nama_akun like CONCAT('%',?,'%') 
      ) 
      LIMIT  ${LIMIT_PER_PAGE} offset ${offset}`,
      params.company,
      serchParam,
      serchParam,
      serchParam,
      serchParam,
      serchParam
    );

    const countdata = Number(jumlahdata[0].count);
    const totalPage = Math.ceil(countdata / LIMIT_PER_PAGE);
    return NextResponse.json({
      statusCode: 200,
      data: data,
      jumlahPage: totalPage,
    });
  } catch (error) {
    console.error("Error executing raw SQL query:", error);
    return NextResponse.json({
      statusCode: 500,
      data: error,
    });
  }
}
