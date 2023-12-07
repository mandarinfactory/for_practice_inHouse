import React, { useMemo } from "react";

function Memo() {
  const function1 = () => {
    return;
  };
  useMemo(() => {
    return function1;
  }, []);
  // useMemo는 useEffect와 거의 동일하다. --> []에 dependency를 넣어주면 된다.
  // 해당 component 렌더링시 1회만 실행해준다.
  // useEffect는 렌더링 되고나서, useMemo는 렌더링되면서 실행되는 차이점이 있다.
  return <div>Memo</div>;
}

export default Memo;
