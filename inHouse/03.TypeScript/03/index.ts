/* 04. type변수에 담아 쓰는법 & readonly */

type AnimalType1 = string | number | undefined; // type alias(type변수 만드는법)
type AnimalType2 = { name: string; age: number };
type BoyfriendType = { readonly name?: string }; // readonly를 쓰면 객체자료 수정도 막을 수 있다.
type NameType = string;
type AgeType = number;
type PersonType = NameType | AgeType; // type변수들도 union type으로 쓸 수 있다.
type positionXType = { x: number };
type positionYType = { y: number };
type NewType = positionXType & positionYType; // &를 사용해서 { x: number, y: number }을 만들 수 있다. --> extend한다고 한다.
// 같은 이름의 type변수는 재정의 할 수 없다.
type objectType = { color?: string; size: number; readonly position: number[] };
type idObjectType = { name: string; phone: number; email: string };
type teenageType = { isAdult: boolean };
type newObjectType = idObjectType & teenageType;

let 동물1: AnimalType1 = "토끼";
let 동물2: AnimalType2 = { name: "코끼리", age: 12 };

const 남친: BoyfriendType = {
  name: "Brent",
};
// 남친.name = "Deangelo"; --> readonly로 제한이 걸려있어서 객제차료 수정이 안된다. (JS에서는 상관없이 잘 됨)

/* 05. literal types로 만드는 const 변수 유사품 */

let 이름: "kim";
이름 = "kim";

let 접니다: "대머리" | "솔로";
접니다 = "솔로"; // 이렇게 literal type으로 정해놓으면 변수에 뭐가 드어올지 더 엄격하게 관리가 가능하다.

const 함수9 = (x: "hello"): 1 | 0 => {
  return 1;
};

const 가위바위보 = (x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] => {
  return [x];
};

var 자료 = {
  name: "kim",
} as const
자료.name; // "kim"

function 함수10(a: "kim") {}

// 함수10(자료.name); --> paramenter a는 "kim"이라는 type이 올수 있는것이므로 자료.kim은 string이므로 서로 다르다.
// 단, as const 쓰면 에러가 없어진다. --> literal type을 알아서 지정하게 해준다.
// 1. 객체의 value값을 그대로 type으로 지정해준다.
// 객체 속성들에 모두 readonly를 붙여준다. --> 마음대로 못바꿈
함수10(자료.name);

/* 06. 함수와 method에 type alias(type변수) 지정하는 법 */

type functionType = (a: string) => number; // 함수 type변수화 하는 방법은 꼭 arrow funtion으로 써줘야한다.

const 함수11: functionType = (a) => {
  return 10;
};

let 회원정보 = {
  name: "kim",
  plusOne(a: number): number {
    return 1;
  },
  chName: (b: unknown): void => {},
};

type funtion1Type = (x: number) => string;
type funtion2Type = (x: string) => number;

const cutZero: funtion1Type = (x) => {
  return x.toString().replace(/0/gi, "");
};
const removeDash: funtion2Type = (x) => {
  return parseFloat(x.replace(/-/gi, ""));
};
const theFunction = (x: number, y: funtion1Type, z: funtion2Type) => {
  z(y(x));
};
