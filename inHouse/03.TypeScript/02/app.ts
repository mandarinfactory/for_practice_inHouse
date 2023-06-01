/* 04. type keyword 써서 && readonly */

type AnimalType = { name :string, age: number};
let 동물 :AnimalType = {name :"kim", age : 29};
// type변수(alias,별칭)는 같은이름으로 다른 type변수를 지정할 수 없다.

type GF = {
  readonly name? :string // readonly === "읽기전용"으로 되어서 수정이 아예 불가하다.
  // ?는 object key값에도 쓸수 있고 undefined의 의미로 쓰인다. ? :string === string | undefined 
}
const 여친 :GF = {
  name : "나연"
};
여친.name = "카리나"; // readonly로 lock이 걸려 수정이 안된다.

type Name = string;
type Age = number;
type Person = Name | Age; //type변수 또한 union type으로 만들수 있다.

type PositionX = {x : number};
type PositionY = {y : number};
type PositionXY = PositionX & PositionY // object타입은 &로 묶을수 있다.(extend)

let position :PositionXY = { x : 10, y : 20};

/* 05. Literal Types로 만드는 const등 */
// liteal Types --> 그냥 type 지정하는것보다 더 엄격하게 type을 지정해준다.

let 이름 :"lee"; // 이 변수에는 무조건 "lee"만 들어올 수 있다.
이름 = 123; // error가 출력된다.

let 나다 :"탈모진행중" | "현재솔로"; // literal type도 union type으로 지정할 수 있다.
나다 = "탈모진행중";
나다 = "하지만여친은있지"; // error가 뜬다.

function 함수01(a : "hello") :1 | 0{
 return 1; // 함수01은 무조건 1 또는 0 만 return 할 수 있다.
};
함수01("hello"); // 함수01은 무조건 "hello"라는 값만 받는다.
