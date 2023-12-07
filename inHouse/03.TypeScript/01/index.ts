/* 01. 기본적인 강의 */
type Name = string | number; // 따로 이렇게 type을 지정해서 만들수 있다.
let 이름: Name = "kim";
// 변수 선언시 변수 선언이름 뒤에 type을 지정해줘야한다.

function 함수(x: number): number {// ()안에서는 parameter type선언, 바로 밖에서는 return값 type선언
  return x * 2;
}

type Member1 = [number, boolean];
// 한개인경우 :string[]으로 type선언할수 있다.
let john: Member1 = [123, true];

type Member2 = {
  [key: string]: string | boolean;
  // 일일히 key값을 지정해 주지 않고 그냥 type만 설정해 줄 수 있다.
};
let brent: Member2 = { name: "345", isAdult: true };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
