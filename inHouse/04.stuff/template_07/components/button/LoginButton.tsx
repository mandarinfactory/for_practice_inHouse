import React from "react";
import { GetServerSideProps } from 'next';

import { REDIRECT_URL, SCOPE } from "@/utils/constants";

const LoginButton:React.FC = () => {
  
  return (
    <div className="w-auto">
        <h1 className="p-2 mb-3 text-2xl text-white bg-gradient-to-r from-red-500 to-sky-500 rounded-2xl cursor-pointer">
          <a>
          로그인
          </a>
        </h1>
    </div>
  );
};


export default LoginButton;
