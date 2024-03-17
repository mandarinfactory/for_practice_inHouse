import React from "react";
import Link from "next/link";

import { SidebarItemProps } from "@/types";

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  console.log(href);
  
  return (
    <Link
      href={href}
      className="flex flex-row h-auto items-center w-full gap-x-5 text-md font-medium cursor-pointer transition py-1"
    >
      <Icon size={30} />
      <p className="truncate w-full text-2xl">{label}</p>
    </Link>
  );
};

export default SidebarItem;
