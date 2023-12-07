"use strict";
/* 01. 기본적인 강의 */
let 이름1 = "kim";
// 변수 선언시 변수 선언이름 뒤에 type을 지정해줘야한다.
function 함수1(x) {
    // ()안에서는 parameter type선언, 바로 밖에서는 return값 type선언
    return x * 2;
}
// 한개인 경우 :string[]으로 type선언할수 있다.
let john = [123, true];
let brent = { name: "345", isAdult: true };
class User {
    constructor(name) {
        this.name = name;
    }
}
/* 02. 변수 만들때 type정하기 */
let 이름2 = "kim"; // 변수에 type지정 --> 변수에 shield를 씌우는거라고 생각하면 된다.
// 이름2 = 124; --> 이러면 바로 에러가 뜬다. 124는 string이 아니기 때문이다.
let 나이1 = 50;
let 결혼 = false;
let 회원들1 = ["kim", "park"];
let 회원들2 = {
    member1: "kim",
    member2: "park",
};
// 꼭 모든곳에 type을 지정할 필요는 없다! --> typescript에서는 type지정은 자동으로 되기 때문이다.
let 내취향노래 = {
    name: "aespa",
    song: "spicy",
};
let project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
let 회원1 = 123; // type2개를 합친 새로운 type --> union type
회원1; // 해당 변수에 type에 맞는 값을 할당하면 해당 type으로 확정이 된다. --> string으로 재할당하면 다시 바뀐다.
let 회원들3 = [1, 2, "3"];
let 객체1 = { a: 123 };
let 이름3; // any는 모든 자료형을 허용해준다. --> typescript 쓰는 이유가 없어짐, shield 해제 문법이다.
이름3 = 123;
이름3 = [456];
let 이름4; // any랑 비슷한 type이다. --> any보다는 안전하다.
이름4 = 123;
이름4 = [456];
// let 변수1:string = 이름4 --> 이렇게 되면 이미 이름4는 :string[]의 type이 정해진걸로 본다. any면 그냥 가능하다.
let 이름5;
// 이름5 - 1; unknow type이 아닌 number/bigint type이여야지 수학연산이 가능하다.
let 나이2;
//나이 + 1; --> number 또는 string type이므로 아직 정해지지 않았으므로 number로 확정되고 나서야지 가능하다.
// unknown으로 type을 정해놔도 마찬가지이다. 명시적으로 number type이 아니므로 에러가 뜬다.
let user = "kim";
let age = undefined;
let married = false;
let 철수1 = [user, age, married];
let 학교1 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교1.score[4] = false;
학교1.friend = ["Lee", 학교1.teacher];
