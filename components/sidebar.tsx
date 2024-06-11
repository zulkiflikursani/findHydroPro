"use client";
import Link from "next/link";
import clsx from "clsx";
import React, { createContext, useContext, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { IconType } from "react-icons";
import DynamicIcon from "@/config/dinamicIcon";
import { Button } from "@nextui-org/button";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const SidebarContext = createContext<boolean>(true);

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expand, setexpand] = useState<boolean>(true);

  return (
    <div className="relative flex-1 sm:flex p-0 m-0  hidden invisible sm:visible shadow-sm bg-foreground-50 shadow-foreground-200">
      <div className=" relative flex-col ">
        <div className="sticky top-0">
          <div
            className={`absolute right-1  z-50 bg-black  ${expand ? `scale-x-[-1] p-2 top-6` : "p-1 top-7"}  hover:bg-gray-600 rounded-full transition-all  cursor-pointer`}
            onClick={() => setexpand(!expand)}
          >
            <MdArrowForwardIos className="text-white " />
          </div>
          <div
            className={`${expand ? `w-full` : `w-full text-center`} flex h-20 p-2 justify-center items-center  gap-1 bg-red-400 `}
          >
            <span
              className={`font-black text-primary-500 ${!expand ? `w-20 text-clip text-[30px]` : `text-[25px]`}`}
            >
              FH
            </span>
            <h4 className={`${expand ? `` : `hidden `} `}>FindHydroPro</h4>
          </div>
          <ul className="space-y-1 px-2 py-2 flex-col">
            <SidebarContext.Provider value={expand}>
              {children}
            </SidebarContext.Provider>
            <Button onClick={() => signOut()}>Logout</Button>
          </ul>
        </div>
      </div>
    </div>
  );
}
interface SidebarItemProps {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}
export function SidebarItems(props: SidebarItemProps) {
  const expand = useContext(SidebarContext);
  const pathname = usePathname();
  const active = pathname;
  return (
    <li
      className={`relative flex items-center 
    font-medium justify-center rounded-md cursor-pointer
    transition-colors group hover:bg-primary-200 hover:rounded-lg ${
      active === props.href
        ? "bg-gradient-to-tr from-primary-200 to-primary-100 text-primary-800"
        : "hover:bg-primary-50 text-foreground-600"
    }`}
    >
      <Link href={props.href} className=" ">
        <div
          className={`flex gap-2 justify-center items-center text-lg px-2 py-2  ${expand ? `` : ``}`}
        >
          <div className="ml-2">
            <DynamicIcon iconFamily={"fa"} icon={props.icon} />
          </div>
          <span
            className={`overflow-hidden transition-width ${expand ? `w-44` : `w-0 `} `}
          >
            {props.label}
          </span>
          {!expand && (
            <div
              className={`
          absolute left-full rounded-md px-2 py-1 ml-6 z-50
          bg-primary-200 text-indigo-800 text-sm
           opacity-20 -translate-x-3 invisible transition-all
          group-hover:visible group-hover:opacity-100 group-hover:shadow-sm group-hover:translate-x-0
      `}
            >
              {props.label}
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
