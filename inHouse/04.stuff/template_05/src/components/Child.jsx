import React, { memo } from "react";

const Child = memo(function () {
  return <div>자식component다!</div>;
}); // memo는 필요할때만 재랜더링되게 해준다!

export default Child;
