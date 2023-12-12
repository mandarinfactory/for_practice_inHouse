"use strict";
/* 17. array 자료에 붙일 수 있는 tuple type */
Object.defineProperty(exports, "__esModule", { value: true });
let 멍멍 = ["dog", true];
// type 변수보다 더 엄격하게 (순서까지) 정하는걸 tuple type이라고 한다.
// ?도 사용가능하나 항상 마지막 type에만 사용할 수 있다.
const 함수21 = (...x) => {
    console.log(x);
};
함수21("abc", 123);
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6, ...arr4];
//으로 declare global을 쓰면된다.
console.log(a + 1);
