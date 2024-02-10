import React from "react";
import Sidebar from "../components/Sidebar";
import DetailHero from "../components/DetailHero";

const DetailPage: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <Sidebar />
      <DetailHero />
    </div>
  );
};

export default DetailPage;
