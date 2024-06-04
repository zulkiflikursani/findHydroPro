import { Suspense } from "react";
import PageHeader from "../pageHeader";
import TableAkun from "./table";
import { fetchDataAkun } from "@/app/lib/akun/data";
import Search from "./search";
import Pagination from "./pagination";

interface FetchDataAkunResponse {
  statusCode: number;
  data?: AkunType[];
  totalPage?: number;
}
const Akun = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const res: FetchDataAkunResponse = await fetchDataAkun(query, currentPage);
  return (
    <>
      <PageHeader title={"DAFTAR AKUN"} />
      <div className="flex flex-col justify-center  shadow-sm shadow-primary-50 rounded-lg p-2">
        <div className="">
          <Search placeholder="Cari nama perkiraan... " />
        </div>
        <Suspense>
          <TableAkun data={res.data} />
        </Suspense>
        <div className="flex justify-center items-center">
          <Pagination totalPages={res.totalPage} />
        </div>
      </div>
    </>
  );
};

export default Akun;
