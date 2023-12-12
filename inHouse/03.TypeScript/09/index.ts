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

/* 외부파일 이용시 declare & ambient module */

declare let a :number;
// declare를 통해 변수 재정의를 해줄 수 있다. --> 어디선가 다르게 정의된 변수를 가져올때 declare를 쓴다.
// import / export를 써도 된다.
// 단, 모든 ts 파일들은 ambient modulue(글로벌 모듈)이라서 따로 declare, import / export를 써줄 필요가 없다.
// 다른 ts파일에 선언된 변수들은 자동으로 전역변수화되서 다시 쓸 수가 없다.
// 전역이 아닌 로컬변수로 만들고 싶으면 export또는 import를 써주면 자동으로 로컬변수화 된다.
export {};
// 로컬변수로 만들고 나서 다시 전역변수로 만들고 싶으면

declare global {
 type Dog = string;
}
//으로 declare global을 쓰면된다.

console.log(a + 1);
