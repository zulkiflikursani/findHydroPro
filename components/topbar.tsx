"use client";
import React, { useContext, useState } from "react";
import { ThemeSwitch } from "./theme-switch";
interface Props {
  user?: string;
  level?: string;
}

const Topbar = (props: Props) => {
  const [expand, setexpand] = useState(false);

  return (
    <div className={`sticky top-0 z-30 min-h-16 backdrop-blur-sm `}>
      <div className="relative">
        <div className="flex items-center rounded-lg h-16 m-2 p-2 bg-primary-50 border-1 border-primary-100 justify-between shadow-lg">
          <div className="flex"></div>
          <div className="flex justify-end gap-3">
            <ThemeSwitch />
            <span className="mr-2  font-semibold">
              Hi, <span className="uppercase">{props.user}</span>
            </span>
          </div>
        </div>
        {/* <div
          className={`absolute -left-3  z-50 bg-black  ${expand ? `scale-x-[-1]` : ""}  hover:bg-gray-600 rounded-full p-1 top-5 cursor-pointer`}
          onClick={() => setexpand(!expand)}
        >
          <MdArrowForwardIos className="text-white " />
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;
