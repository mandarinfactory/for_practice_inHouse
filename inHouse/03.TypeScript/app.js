/* 01. 기본타입정리(primitive type) */
let 이름 = "kim";
// 이 변수(이름)엔 string(문자)type만 들어올 수 있다.
let 어레이 = ["kim", "park"];
// 이 변수에는 string이 담긴 array만 들어올 수 있다.  --> push등으로도 숫자를 넣을수 없다.
let 객체 = { name: "kim" };
let 이름2 = "kim"; // string 또는 number가 들어올 수 있다.(union-type)
function 함수(x) {
    return x * 2;
}
let john = [123, true];
let jane = { name: "jane", age: "123" };
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
/* 02. type을 미리 정하기가 애매할 때 --> union type, any, unknown */
let 회원 = "kim"; // union type : type2개 이상 합친 새로운 type 만들기(|,or 사용)
let 회원들 = [1, "2", 3];
let 오브젝트1 = { a: "123" };
let 아무거나; // any는 모든자료형을 허용해준다. --> 굳이 TS를 쓰는 이유가 없어진다.(type-shield 해제문법)
아무거나 = 123;
아무거나 = true;
아무거나 = [];
let 몰루; // any처럼 모든자료형을 허용해준다.(any다음버전으로 나옴)
몰루 = 123;
몰루 = {};
let 변수1 = 몰루; // any보다 안전한 이유  --> error가 표시된다.
// 여기서 변수 몰루의 type이 unknown이 아닌 any라면 error가 표시되지 않는다. --> type-shield를 없애니까!
몰루 - 1;
// TS는 간단한 수학연산도 type이 맞아야한다. --> unknown은 number type이 아니다.
// 만약 몰루의 type이 any라면 이또한 shield가 깨지게 되서 몰루 - 1이 error없이 성립이 된다.
let 나이; // union type은 새로운 type을 만든것이다.
나이 + 1;
// TS는 엄격한 JS이므로 string + 1 / number + 1은 허용되나 string | number(union type) + 1은 허용되지 않는다.
let 나이몰루 = 1;
나이몰루 - 1;
/* 이 또한 TS가 엄격하다는걸 유념해야한다. unknown이라서 1로 변수선언을 할 수는 있지만,
이 1이 number-type이 아닌 unknown이므로 - 1은 numner type만 가능하므로 error가 출력된다. */
