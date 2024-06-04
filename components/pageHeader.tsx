import React from "react";

const PageHeader = ({ title }: { title: String }) => {
  return (
    <div className="bg-primary-50  rounded-lg p-2 flex-col  w-full font-bold  px-2 border-1 border-primary-100 uppercase text-foreground-500">
      {title}
    </div>
  );
};

export default PageHeader;
