// context API --> global하게 상태관리가 가능하다. React에서 기본적으로 지원하는 API이다.

import { createContext, useContext, useState } from "react";

export const ResultContext = createContext(undefined);
// CreateContext 선언

export function ResultContextProvider({ children }) {
  const [resultTitle, setResultTitle] = useState([]);
  const [resultInstaLink, setResultInstaLink] = useState([]);
  const [resultCategory, setResultCategory] = useState([]);
  const [resultAddress, setResultAddress] = useState([]);
  const [resultLat, setResultLat] = useState([]);
  const [resultLng, setResultLng] = useState([]);

  const value = {
    resultTitle,
    resultInstaLink,
    resultCategory,
    resultAddress,
    resultLat,
    resultLng,
  };

  return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
};

export function useResultContext() {
    return useContext(ResultContext);
}// 다른 component에서 context를 사용할때 쓰임.
