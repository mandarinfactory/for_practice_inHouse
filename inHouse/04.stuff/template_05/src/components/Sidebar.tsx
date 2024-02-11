import React from "react";

import MainSidebar from "./sidebar/MainSidebar";
import SubSidebar from "./sidebar/SubSidebar";
import CategorySidebar from "./sidebar/CategorySidebar";

const Sidebar: React.FC = () => {
  return (
    <div className="sticky top-10 flex flex-col w-[7%] h-[50%] mx-5 bg-slate-50 rounded-3xl shadow-2xl dark:bg-neutral-700 dark:text-white">
      <MainSidebar />
      <SubSidebar />
      <CategorySidebar />
    </div>
  );
};

export default Sidebar;
