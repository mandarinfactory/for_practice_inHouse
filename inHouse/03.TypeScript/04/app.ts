/* 08. function type지정 심화 : rest parameter, destructuring */

function 함수1(...a: number[]) {
  // rest parameter는 배열로 출력하므로 항상 type 지정시 []을 같이 써줘야한다.
  console.log(a, a[1]); // (6) [1, 2, 3, 4, 5, 6] 2
}
함수1(1, 2, 3, 4, 5, 6);

let { student, age } = { student: true, age: 17 };
let 객체1 = { student: true, age: 17 };
console.log(student); // true

interface Student {
  student: boolean;
  age: number;
}
function 함수2({ student, age }: Student) {
  // 함수 parameter를 destructuring으로 쓰면 객체 넣기가 쉬워진다.
  console.log(student, age); // true 17
}
함수2({ student: true, age: 17 }); // destructuring을 쓰면 여기에 값을 객체로 넣어줄수 있다.

function 최댓값구하기(...rest: number[]) {
  console.log(Math.max(...rest));
}
최댓값구하기(6, 3, 7, 2);

interface Identity {
  user: string;
  comment: number[];
  admin: boolean;
}
function 함수3({ user, comment, admin }: Identity): void {
  console.log(user, comment, admin);
}
함수3({ user: "kim", comment: [3, 5, 4], admin: false });

type Thing = [
    num : number,
    wine : string,
    define : boolean
]
function 함수4 ([num, wine, define] : Thing) {
    console.log(num, wine, define);
}
함수4( [40, 'wine', false] )