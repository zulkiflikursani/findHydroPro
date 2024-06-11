import React from "react";
import PageHeader from "../pageHeader";
import TableProduk from "./tableproduk";
import { fetchDataProduk } from "@/app/lib/produk/data";
import Link from "next/link";
import { Button } from "@nextui-org/react";

async function ProdukPage() {
  const fetcProduk = await fetchDataProduk();
  return (
    <div className="w-full">
      <PageHeader title={"Produk"} />
      <div className="mt-3 flex justify-end">
        <Link href={"/admin/produk/create"}>
          <Button className="bg-primary-500 text-foreground-50">
            Buat Akun
          </Button>
        </Link>
      </div>
      <TableProduk produk={fetcProduk.message} />
    </div>
  );
}

export default ProdukPage;
