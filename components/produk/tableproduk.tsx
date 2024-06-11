"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import DeleteButtonProduk from "../produk/deleteButtonProduk";
import ConfirmAction from "../akun/confirmAction";
import { useDisclosure } from "@nextui-org/react";
import { deleteProdukById } from "@/app/lib/produk/action";

function TableProduk({ produk }: { produk: ProdukType[] | undefined }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [idToDelete, setidToDelete] = useState(0);

  function handleClickDelete(id: number): void {
    setidToDelete(id);
    onOpen();
  }

  const handleClikConfirmYa = async () => {
    if (idToDelete !== 0) {
      const deleteProduk = await deleteProdukById(idToDelete);
      if (deleteProduk?.status === "ok") {
        alert(deleteProduk.message);
      } else {
        alert(deleteProduk?.message);
      }
      onOpenChange();
    }
  };

  return (
    <>
      <ConfirmAction
        isOpen={isOpen}
        title="Perhatian"
        message="Apakah anda yakin ingin menghapus produk ini ?"
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onClickYa={() => handleClikConfirmYa()}
      />
      <table className="mt-5 table-auto bg-primary-50 rounded-lg mb-2 w-full">
        <thead className="bg-primary-100 rounded-sm">
          <tr>
            <th>No</th>
            <th>Kode Produk</th>
            <th>Nama Produk</th>
            <th>Dekskripsi Produk</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="divide-y-1 divide-primary-100">
          {produk?.map((item, i) => (
            <tr key={i} className="hover:bg-primary-200 cursor-pointer">
              <td className="text-center py-2">{i + 1}</td>
              <td className="text-center">{item.kode_produk}</td>
              <td>{item.nama_produk}</td>
              <td>{item.deskripsi}</td>
              <td className="text-center">{item.harga_beli}</td>
              <td className="text-center">{item.harga_jual}</td>
              <td>
                <div className="flex gap-2">
                  <Link href={`/admin/produk/${item.id}/edit`}>
                    <BsPencilSquare className="h-6 w-6 p-1 bg-foreground-100  rounded-sm  text-foreground-900  cursor-pointer hover:text-primary-600 hover:bg-primary-300" />
                  </Link>
                  <DeleteButtonProduk
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
}

export default TableProduk;
