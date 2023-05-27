import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "This is New!" : ""}</p>;
};

export default React.memo(DemoOutput);
/* 
React.memo의 역할은 해당 component에 어떤 props가 입력되는지 확인하고
입력되는 모든 props의 신규값을 확인한 뒤 이름 기존의 props의 값과 비교하도록 React에게 전달한다.
--> 다시 말해, memo로 묶으면 따로 재평가에서 제외시키게 된다. (계속 재평가 될 필요가 없는 component를 묶어둠)
*/