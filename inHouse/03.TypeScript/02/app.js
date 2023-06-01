/* 04. type keyword 써서 && readonly */
let 동물 = { name: "kim", age: 29 };
const 여친 = {
    name: "나연"
};
여친.name = "카리나"; // readonly로 lock이 걸려 수정이 안된다.
let position = { x: 10, y: 20 };
/* 05. Literal Types로 만드는 const등 */
// liteal Types --> 그냥 type 지정하는것보다 더 엄격하게 type을 지정해준다.(const변수의 업글버전!)
let 이름; // 이 변수에는 무조건 "lee"만 들어올 수 있다.
이름 = 123; // error가 출력된다.
let 나다; // literal type도 union type으로 지정할 수 있다.
나다 = "탈모진행중";
나다 = "하지만여친은있지"; // error가 뜬다.
function 함수01(a) {
    return 1; // 함수01은 무조건 1 또는 0 만 return 할 수 있다.
}
;
함수01("hello"); // 함수01은 무조건 "hello"라는 값만 받는다.
var 자료 = {
    name: "kim",
};
function 함수02(x) {
}
함수02("kim");
함수02(자료.name); //error가 출력된다. --> "자료.name"은 "kim"이라는 type이 아니기 때문이다.
let 함수03 = function () {
};
