"use strict";
/* 04. type변수에 담아 쓰는법 & readonly */
let 동물1 = "토끼";
let 동물2 = { name: "코끼리", age: 12 };
const 남친 = {
    name: "Brent",
};
// 남친.name = "Deangelo"; --> readonly로 제한이 걸려있어서 객제차료 수정이 안된다. (JS에서는 상관없이 잘 됨)
/* 05. literal types로 만드는 const 변수 유사품 */
let 이름;
이름 = "kim";
