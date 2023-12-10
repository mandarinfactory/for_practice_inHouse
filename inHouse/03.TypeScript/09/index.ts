/* 17. array 자료에 붙일 수 있는 tuple type */

let 멍멍: [string, boolean?] = ["dog", true];
// type 변수보다 더 엄격하게 (순서까지) 정하는걸 tuple type이라고 한다.
// ?도 사용가능하나 항상 마지막 type에만 사용할 수 있다.

const 함수21 = (...x: [string, number]) => {
  console.log(x);
};
함수21("abc", 123);

let arr4 = [1, 2, 3];
let arr5: [number, number, ...number[]] = [4, 5, 6, ...arr4];
