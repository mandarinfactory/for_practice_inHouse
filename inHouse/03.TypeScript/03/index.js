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
let 접니다;
접니다 = "솔로"; // 이렇게 literal type으로 정해놓으면 변수에 뭐가 드어올지 더 엄격하게 관리가 가능하다.
const 함수9 = (x) => {
    return 1;
};
const 가위바위보 = (x) => {
    return [x];
};
var 자료 = {
    name: "kim",
};
자료.name; // "kim"
function 함수10(a) { }
// 함수10(자료.name); --> paramenter a는 "kim"이라는 type이 올수 있는것이므로 자료.kim은 string이므로 서로 다르다.
// 단, as const 쓰면 에러가 없어진다. --> literal type을 알아서 지정하게 해준다.
// 1. 객체의 value값을 그대로 type으로 지정해준다.
// 객체 속성들에 모두 readonly를 붙여준다. --> 마음대로 못바꿈
함수10(자료.name);
const 함수11 = (a) => {
    return 10;
};
let 회원정보 = {
    name: "kim",
    plusOne(a) {
        return 1;
    },
    chName: (b) => { },
};
const cutZero = (x) => {
    return x.toString().replace(/0/gi, "");
};
const removeDash = (x) => {
    return parseFloat(x.replace(/-/gi, ""));
};
const theFunction = (x, y, z) => {
    z(y(x));
};
