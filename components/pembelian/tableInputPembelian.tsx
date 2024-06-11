"use client";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Input } from "@nextui-org/react";
import { data } from "autoprefixer";
import React, { useState } from "react";

interface Props {
  produk: ProdukType[] | undefined;
  dataPembelian: DetailPembelianType[];
  handleData: (e: string, i: number) => void;
  handleChangeQty: (e: number, i: number) => void;
  handleChangeHbeli: (e: number, i: number) => void;
}
function TableInputPembelian(props: Props) {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th className="w-24">Qty</th>
            <th>Harga beli</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {props.dataPembelian.map((row, i) => (
            <tr key={i}>
              <td>
                <Autocomplete
                  defaultItems={props.produk}
                  placeholder="Select a user"
                  labelPlacement="inside"
                  variant="bordered"
                  className="bg-foreground-50 rounded-xl"
                  name={"kode_produk"}
                  onInputChange={(e) => props.handleData(e, i)}
                  size="sm"
                  isRequired
                >
                  {(item) => (
                    <AutocompleteItem
                      key={item.id}
                      textValue={item.nama_produk}
                    >
                      <div className="flex space-x-1">
                        <span>{item.kode_produk}</span> <span>:</span>
                        <span>{item.nama_produk}</span>
                      </div>
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              </td>
              <td>
                <Input
                  type="number"
                  name="qty"
                  size="sm"
                  defaultValue={row.qty.toString()}
                  onChange={(e) =>
                    props.handleChangeQty(Number(e.target.value), i)
                  }
                />
              </td>
              <td>
                <Input
                  type="number"
                  name="harga_beli"
                  size="sm"
                  value={row.harga_beli.toString()}
                  onChange={(e) =>
                    props.handleChangeHbeli(Number(e.target.value), i)
                  }
                />
              </td>
              <td>
                <Input
                  type="number"
                  size="sm"
                  name="total_harga"
                  value={(row.harga_beli * row.qty).toString()}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableInputPembelian;
