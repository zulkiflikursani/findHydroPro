"use client";
import React, { MouseEvent, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import Link from "next/link";
import DeleteButtonAkun from "./deletebutton";
import ConfirmAction from "./confirmAction";
import { useDisclosure } from "@nextui-org/react";
import { deleteAkunDetail } from "@/app/lib/akun/action";

interface Props {
  data?: AkunType[];
}
const TableAkun = (props: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [idToDelete, setIdToDelete] = useState(0);
  const handleClikConfirmYa = async () => {
    if (idToDelete !== 0) {
      const deleteData = await deleteAkunDetail(idToDelete);
      if (deleteData.status === "ok") {
        alert(deleteData.message);
      } else {
        alert(deleteData.message);
      }
      onOpenChange();
    }
  };
  const handleClickDelete = (id: number) => {
    setIdToDelete(id);
    onOpen();
  };
  return (
    <>
      <ConfirmAction
        isOpen={isOpen}
        title="Perhatian"
        message="Apakah anda yakin ingin menghapus akun ini ?"
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClickYa={() => handleClikConfirmYa()}
      />

      <table className="mt-5 table-auto bg-primary-50 rounded-lg mb-2">
        <thead className="bg-primary-100 rounded-sm">
          <tr className="">
            <th className="py-2">No</th>
            <th>KODE HEADER</th>
            <th>NAMA HEADER</th>
            <th>NO AKUN</th>
            <th>NAMA AKUN</th>
            <th>AKSI</th>
          </tr>
        </thead>
        <tbody className="divide-y-1 divide-primary-100">
          {props.data?.map((item, i) => (
            <tr key={i} className="hover:bg-primary-200 cursor-pointer">
              <td className="text-center py-2">{i + 1}</td>
              <td className="text-center">{item.kode_akun_header}</td>
              <td>{item.nama_akun_header}</td>
              <td className="text-center">{item.kode_akun}</td>
              <td>{item.nama_akun}</td>
              <td>
                <div className="flex gap-2">
                  <Link href={`/admin/akun/${item.kode_akun}/edit`}>
                    <BsPencilSquare className="h-6 w-6 p-1 bg-foreground-100  rounded-sm  text-foreground-900  cursor-pointer hover:text-primary-600 hover:bg-primary-300" />
                  </Link>
                  <DeleteButtonAkun
                    id={item.id}
                    onClick={() => handleClickDelete(item.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TableAkun;
