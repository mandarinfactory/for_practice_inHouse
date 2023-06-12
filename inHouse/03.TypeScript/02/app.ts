/* 04. type keyword 써서 && readonly */

type AnimalType = { name: string; age: number };
let 동물: AnimalType = { name: "kim", age: 29 };
// type변수(alias,별칭)는 같은이름으로 다른 type변수를 지정할 수 없다.

type GF = {
  readonly name?: string; // readonly === "읽기전용"으로 되어서 수정이 아예 불가하다.
  // ?는 object key값에도 쓸수 있고 undefined의 의미로 쓰인다. ? :string === string | undefined
};
const 여친: GF = {
  name: "나연",
};
여친.name = "카리나"; // readonly로 lock이 걸려 수정이 안된다.

type Name = string;
type Age = number;
type Person = Name | Age; //type변수 또한 union type으로 만들수 있다.

type PositionX = { x: number };
type PositionY = { y: number };
type PositionXY = PositionX & PositionY; // object타입은 &로 묶을수 있다.(extend)

let position: PositionXY = { x: 10, y: 20 };

/* 05. Literal Types로 만드는 const등 */
// liteal Types --> 그냥 type 지정하는것보다 더 엄격하게 type을 지정해준다.(const변수의 업글버전!)

let 이름: "lee"; // 이 변수에는 무조건 "lee"만 들어올 수 있다.
이름 = 123; // error가 출력된다.

let 나다: "탈모진행중" | "현재솔로"; // literal type도 union type으로 지정할 수 있다.
나다 = "탈모진행중";
나다 = "하지만여친은있지"; // error가 뜬다.

function 함수01(a: "hello"): 1 | 0 {
  return 1; // 함수01은 무조건 1 또는 0 만 return 할 수 있다.
}
함수01("hello"); // 함수01은 무조건 "hello"라는 값만 받는다.

var 자료 = {
  name: "kim",
} as const;

function 함수02(x: "kim") {}
함수02("kim");
함수02(자료.name); //error가 출력된다. --> "자료.name"은 "kim"이라는 type이 아니기 때문이다.
// 해결법. 해당 값에 as const를 추가하면 literal type화되어서 error가 없어진다. + object 모든 속성에 readonly가 추가된다.

/* 05. method types */

type FunctionType = (x: string) => number; // 함수 type alias 만들때는 꼭 arrow function을 써줘야한다.
let 함수03: FunctionType = function () {
  return 1;
}; // 함수 type alias는 꼭 함수표현식에만 쓸수 있다.(let등으로 함수 표현하는식)

let 회원정보 = {
  name: "kim",
  plusOne (x :string) :string{
    return x + 1;
  }, // object내에서 함수 생성하는법
  changeName : () => {},
};
회원정보.plusOne("a");

/* 06. TS로 HTML 변경과 주의점 */

let 제목 = document.querySelector(".title");
if (제목 !== null) {
  제목.innerHTML = "반가워요!";
}; // 이렇게 따로 narrowing을 해줘야한다. --> HTML element는 기본적으로 union-type이기 때문이다. (element | null)

let 제목2 = document.querySelector(".title");
if (제목2 instanceof Element) {
  제목2.innerHTML = "반가워요!";
  // instanceof를 사용할 수도 있다.
};

let 제목3 = document.querySelector(".title") as Element; 
// as는 type assertion으로 쓰인다. (as Element : type을 element로 간주한다.)
제목3.innerHTML = "반가워요!";

let 제목4 = document.querySelector(".title");
if(제목4?.innerHTML) {
  제목4.innerHTML = "반가워요!";
  // .왼쪽에 ?를 붙이면 --> 제목4에 innerHTML이 있으면 출력하고 없으면 undefined를 출력해준다.(optional chaining)
};

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) { // href등 해당 HTML element(Button, Heading···)에 제대로 narrowing을 해줘야한다.
  링크.href = "https://www.kakao.com";
};

let 버튼 = document.querySelector(".button");
버튼?.addEventListener("click", () => {
  return console.log(42);
  ;
}) //?가 있으므로 자동으로 narrowing으로 인식한다.

let 버튼2 = document.querySelector(".button");
console.log(버튼2);

버튼2?.addEventListener("click", function () {
    let 이미지 = document.querySelector("#image");
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = "new.jpg";
    };
});

let 모든링크 = document.querySelectorAll(".link");
for (var i = 0;i < 모든링크.length;i++) {
  let theLink = 모든링크[i]
  if (theLink instanceof HTMLAnchorElement) {
    theLink.href = "https://www.kakao.com";
  }; // for문 쓸꺼면 따로 변수선언까지 해줘서 narrowing 해야하고 forEach 쓰는게 편하다.
};