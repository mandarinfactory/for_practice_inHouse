/* 07. class만들때 type지정 및 object type 지정시에 interface사용 */

class Person {
  name: string;
  // 여기를 field값이라고 하고 사전에 field값이 있고 type까지 지정이 되어있어야
  // constructor에서 사용이 가능하다.
  constructor(a: string) {
    // parameter에 직접 type을 지정한다.
    this.name = a;
  }
  함수12(b: string) {
    // prototype에 들어가는 함수12에도 type을 지정한다.
    console.log("안녕" + b);
  }
}

let 사람1 = new Person("Brent");
let 사람2 = new Person("John");
사람1.함수12("반가워");

interface Square {
  color: string;
  width: number;
} // interface는 class 만드는거랑 유사하다.
let 네모: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };
/* interface를 쓰면 extends(복사붙여넣기 명령어이다.)로 복사가 가능하다. */

type Animal = { name: string };
type Cat = { age: number } & Animal; // extends와 같이 type을 쓸때는 &(intersection type)기호를 쓰면 된다.
