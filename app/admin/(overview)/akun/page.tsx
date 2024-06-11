import Akun from "@/components/akun/akun";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || 1;
  console.log("cuurentPage", currentPage);
  return (
    <div className="flex flex-col rounded-lg  justify-center p-2 gap-2">
      <Akun query={query} currentPage={currentPage} />
    </div>
  );
};

export default page;
