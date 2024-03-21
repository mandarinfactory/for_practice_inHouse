import React from "react";
import Link from "next/link";

import { SidebarItemProps } from "../types/types";

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  
  return (
    <Link
      href={href}
      className="flex flex-row h-auto items-center w-full gap-x-5 sm:ml-3 text-md font-medium cursor-pointer transition py-1"
    >
      <Icon size={30} />
      <p className="truncate w-full text-2xl sm:hidden">{label}</p>
    </Link>
  );
};

export default SidebarItem;
