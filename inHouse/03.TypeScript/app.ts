/* 01. 기본타입정리(primitive type) */

let 이름: string = "kim";
// 이 변수(이름)엔 string(문자)type만 들어올 수 있다.

let 어레이: string[] = ["kim", "park"];
// 이 변수에는 string이 담긴 array만 들어올 수 있다.  --> push등으로도 숫자를 넣을수 없다.

let 객체: { name: string } = { name: "kim" };
// 이 객체에서 해당 key(이름)는 string만 들어올 수 있다.

type Name = string | number; // type의 종류가 다양해서 따로 custom-type을 만들수 있다.
let 이름2: Name = "kim"; // string 또는 number가 들어올 수 있다.(union-type)

function 함수(x: number): number {
  return x * 2;
}
// ()안에는 parameter를 :number로, ()밖에 있는 :number는 return값이 number만 출력되야한다는 뜻이다.

type Member = [number, boolean]; // 첫번째값은 number, 두번째는 boolean이야 한다. --> tuple-type
let john: Member = [123, true];

type Member1 = {
  [key: string]: string;
}; // [모든 object 속성(key)]
let jane: Member1 = { name: "jane", age: "123" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

/* 02. type을 미리 정하기가 애매할 때 --> union type, any, unknown */

let 회원: number | string | boolean = "kim"; // union type : type2개 이상 합친 새로운 type 만들기(|,or 사용)

let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트1: { a: number | string } = { a: "123" };

let 아무거나: any; // any는 모든자료형을 허용해준다. --> 굳이 TS를 쓰는 이유가 없어진다.(type-shield 해제문법)
아무거나 = 123;
아무거나 = true;
아무거나 = [];

let 몰루: unknown; // any처럼 모든자료형을 허용해준다.(any다음버전으로 나옴)
몰루 = 123;
몰루 = {};
let 변수1: string = 몰루; // any보다 안전한 이유  --> error가 표시된다.
// 여기서 변수 몰루의 type이 unknown이 아닌 any라면 error가 표시되지 않는다. --> type-shield를 없애니까!

몰루 - 1;
// TS는 간단한 수학연산도 type이 맞아야한다. --> unknown은 number type이 아니다.
// 만약 몰루의 type이 any라면 이또한 shield가 깨지게 되서 몰루 - 1이 error없이 성립이 된다.

let 나이: string | number; // union type은 새로운 type을 만든것이다.
나이 + 1;
// TS는 엄격한 JS이므로 string + 1 / number + 1은 허용되나 string | number(union type) + 1은 허용되지 않는다.

let 나이몰루: unknown = 1;
나이몰루 - 1;
/* 이 또한 TS가 엄격하다는걸 유념해야한다. unknown이라서 1로 변수선언을 할 수는 있지만, 
이 1이 number-type이 아닌 unknown이므로 - 1은 numner type만 가능하므로 error가 출력된다. */

/* 03. function에 type 지정 && void type */

function 함수1(x: number): number /* return되는값의 type지정은 괄호밖에서! */ {
  return x * 2;
}
함수1(30);
// return값이 없을경우 return type값에 void type을 쓰면된다. --> 실수로 뭔가 return하는걸 사전에 막아준다.
// TS는 JS와 다르게 함수를 생성해서 실행시 무 조 건 type이 지정된 parameter를 넣어줘야한다. 빈()XXX
/* parameter가 필요없는 함수일경우 ?를 붙이면 option화 되서 강제성이 사라진다.(객체에서 key값에서도 사용가능) 
? :number === number | undefined와 같다.(union type 생성) */

