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

type Thing = [num: number, wine: string, define: boolean];
function 함수4([num, wine, define]: Thing) {
  console.log(num, wine, define);
}
함수4([40, "wine", false]);

/* 09. Narrowing 심화학습 */

type Fish = { swim: string };
type Bird = { fly: string };

function 함수5(animal: Fish | Bird) {
  if ("swim" in animal) {
    // in 키워드로 narrowing이 가능하다 --> 속성명 in 객체자료
    animal.swim;
  }
}

let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log(날짜);
  // instanceof 연산자로 object narrowing이 가능하다.
}

type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};
function 함수6(x: Car | Bike) {
  if (x.wheel === "4개") {
    // object type마다 각각의 literal type을 만들어주면 narrowing 하기 편리하다.(여기서는 string)
    console.log("x는 Car-type 입니다.");
  }
}

/* 10. never type --> 딱히 막 자주 쓰이지는 않는다. */

function 함수7(): never {
  throw new Error(); // endless함수를 만들기 위해 강제로 error를 출력시킨다.
  // 잘 안쓰는데 잘못 입력해서 자동으로 출력될때가 있다.
}
// never type을 쓰러면 return값이 없어야한다. + endpoint가 없어야한다. => 끝나지 않는 함수?
// 대부분은 void type을 쓴다.

/* 11. private, public, protected, static */

// TS의 장점은 객체지향(object-oriented)언어같은 문법도 제공한다.(public, private, protected, static)
// 다시말해 class를 많이 만들어서 개발할때 유용하다.

class User {
  public name = "kim"; // -public이 붙으면 모든 자식들이 사용가능해 진다. (있으나 없으나 큰 차이가 없다. --> 강제부여됨)
  private familyName: string = "lee";
  // private이 붙으면 자식들이 수정할 수 없다. 단, -private을 붙이면 class안에서만 수정, 이용이 가능하다.
  theName: string;
  constructor(a) {
    this.name = this.familyName + a;
  }
  이름변경함수() {
    this.familyName = "대한민국"; // 이렇게 private을 class내에서 변경할 수 있다.
  }
}
let 유저1 = new User("park");
console.log(유저1); // User {name: 'leepark', familyName: 'lee', theName: undefined}

유저1.이름변경함수();
console.log(유저1); // User {name: 'leepark', familyName: '대한민국', theName: undefined} --> private이 변경된걸 알수 있다.

class thePerson {
  constructor(public name: string) {}
}

let 자식 = new thePerson("kim");
console.log(자식); // thePerson {name: 'kim'}

class User2 {
  protected x = 10;
  // private, protected(private보다 좀 더 확장성을 준다.) 둘다 붙이면 class{}안에서만 사용가능하다.
  // protected --> 현재의 class{}안에서 + extends 된 class{}안에서 사용가능하다.
}

class NewUser extends User2 {
  doThis() {
    this.x = 20;
  }
}

class User3 {
  static x = 10;
  // static --> 부모 class에 직접 부여된다. 자식들에게 물려주지 못한다. 단, extends는 같이 잘 딸려온다.
  y = 20;
}
let 자식들 = new User3();
console.log(자식들); // User3 {y: 20} --> x는 자식에게 없다.
console.log(User3.x); // 10 --> 직접 부모에만 부여되어있으므로 부모로 직접 찾아야한다.
