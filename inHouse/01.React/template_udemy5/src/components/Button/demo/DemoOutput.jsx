import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "This is New!" : ""}</p>;
};

export default React.memo(DemoOutput);
/* 
React.memo의 역할은 해당 component에 어떤 props가 입력되는지 확인하고
입력되는 모든 props의 신규값을 확인한 뒤 이름 기존의 props의 값과 비교하도록 React에게 전달한다.
*/