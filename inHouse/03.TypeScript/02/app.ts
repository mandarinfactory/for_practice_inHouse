/* 04. type keyword 써서 && readonly */

type AnimalType = { name :string, age: number};
let 동물 :AnimalType = {name :"kim", age : 29};
// type변수(alias,별칭)는 같은이름으로 다른 type변수를 지정할 수 없다.

type BF = {
  readonly name? :string // readonly === "읽기전용"으로 되어서 수정이 아예 불가하다.
  // ?는 object key값에도 쓸수 있고 undefined의 의미로 쓰인다. ? :string === string | undefined 
}
const 남친 :BF = {
  name : "원호"
};
남친.name = "셔누"; // readonly로 lock이 걸려 수정이 안된다.

type Name = string;
type Age = number;
type Person = Name | Age; //type변수 또한 union type으로 만들수 있다.

type PositionX = {x : number};
type PositionY = {y : number};
type PositionXY = PositionX & PositionY // object타입은 &로 묶을수 있다.(extend)

let position :PositionXY = { x : 10, y : 20};
