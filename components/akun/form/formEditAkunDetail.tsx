"use client";
import CustomAutoComplete from "@/components/CustomAutoComplete";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useFormState } from "react-dom";

interface Props {
  daftarakunheader: AkunHeaderType[];
  dataAkunDetail?: AkunDetailType;
}
function FormEditAkunDetail(props: Props) {
  const kode_akun = props.dataAkunDetail?.kode_akun;
  const nama_akun = props.dataAkunDetail?.nama_akun;
  const updateFunction = (formData: FormData) => {
    console.log(formData);
  };
  return (
    <form className="flex-col space-y-2" action={updateFunction}>
      <div className="sm:w-6/12">
        <div className="w-full">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4"></div>
          <CustomAutoComplete
            name="kode_header"
            data={props.daftarakunheader}
            label="kode akun header"
            value={props.dataAkunDetail?.kode_akun_header}
          />
        </div>
      </div>
      <div className="sm:w-6/12">
        <Input
          type="text"
          label="Kode Akun Header"
          size="sm"
          name="kode_akun_header_input"
          value={props.dataAkunDetail?.kode_akun_header}
        />
      </div>
      <div className="sm:w-6/12">
        <Input
          type="text"
          label="Nama Header"
          size="sm"
          defaultValue={""}
          name="nama_akun_header"
        />
      </div>
      <div className="sm:w-6/12">
        <Input
          type="text"
          label="Kode Akun"
          name="kode_akun"
          size="sm"
          value={kode_akun}
        />
      </div>
      <div className="sm:w-6/12">
        <Input
          type="text"
          label="Nama Akun "
          size="sm"
          name="nama_akun"
          value={nama_akun}
        />
      </div>
      <Button type="submit">Simpan</Button>
    </form>
  );
}

export default FormEditAkunDetail;
