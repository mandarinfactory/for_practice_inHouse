import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SidebarItemProps } from "@/types";

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {router.refresh()}}
      className="flex flex-row h-auto items-center w-full gap-x-5 text-md font-medium cursor-pointer transition py-1"
    >
      <Icon size={30} />
      <p className="truncate w-full text-2xl">{label}</p>
    </Link>
  );
};

export default SidebarItem;
