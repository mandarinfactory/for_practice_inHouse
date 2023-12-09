"use strict";
/* 15. type을 import, export 하는 법 */
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = require("./a");
console.log(a_1.이름6, a_1.나이);
let 변수 = "park";
/* 16. type을 parameter로 입력하는 Generic */
const 함수19 = (x) => {
    return x[0];
};
// number type이 parameter처럼 Type에 들어가서 type화 된다. --> 저엉말 편하다.
let a = 함수19([4, 2]);
const 함수20 = (x) => {
    return x.length;
    // Generic(<>)을 쓰고 뒤에 extends로 type을 쓰면 해당 type으로만 제한된다.
};
함수20("100");
