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
