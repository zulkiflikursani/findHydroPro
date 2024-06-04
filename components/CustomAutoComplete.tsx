"use client";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React from "react";

interface Props {
  label: string;
  name: string;
  data: AkunHeaderType[];
  value?: string;
}
function CustomAutoComplete(props: Props) {
  const data = props.data;
  return (
    <>
      <Autocomplete
        defaultItems={data}
        label={props.label}
        placeholder="Select a user"
        labelPlacement="inside"
        name={props.name}
        defaultInputValue={props.value}
      >
        {(item) => (
          <AutocompleteItem
            key={item.kode_akun_header}
            textValue={item.kode_akun_header}
          >
            <div className="flex space-x-1">
              <span>{item.kode_akun_header}</span> <span>:</span>
              <span>{item.nama_akun_header}</span>
            </div>
          </AutocompleteItem>
        )}
      </Autocomplete>
    </>
  );
}

export default CustomAutoComplete;
