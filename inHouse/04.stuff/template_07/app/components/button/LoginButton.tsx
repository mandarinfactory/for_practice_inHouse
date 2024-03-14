import React from "react";
import axios from "axios";

const LoginButton: React.FC = () => {
  const fetchLoginData = async () => {
    try {
      const response = await axios.get("/login");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-auto">
      <button onClick={fetchLoginData}>
        <h1 className="p-2 mb-3 text-2xl text-white bg-gradient-to-r from-red-500 to-sky-500 rounded-2xl cursor-pointer">
          로그인
        </h1>
      </button>
    </div>
  );
};

export default LoginButton;
