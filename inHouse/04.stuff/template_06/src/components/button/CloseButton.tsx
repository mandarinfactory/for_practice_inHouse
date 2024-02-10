import React from "react";
import { useRecoilState } from "recoil";
import { musicValState } from "../../state";

const CloseButton: React.FC = () => {
    const [musicVal, setMusicVal] = useRecoilState(musicValState);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-10 h-10 fill-slate-700 hover:fill-slate-600 cursor-pointer"
        onClick={() => {
            setMusicVal("");
            console.log(musicVal);
            
        }}
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default CloseButton;
