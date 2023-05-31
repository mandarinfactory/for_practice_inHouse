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
/* 03. function에 type 지정 && void type */
function 함수1(x) {
    return x * 2;
}
함수1(30);
// return값이 없을경우 return type값에 void type을 쓰면된다. --> 실수로 뭔가 return하는걸 사전에 막아준다.
// TS는 JS와 다르게 함수를 생성해서 실행시 무 조 건 type이 지정된 parameter를 넣어줘야한다. 빈()XXX
/* parameter가 필요없는 함수일경우 ?를 붙이면 option화 되서 강제성이 사라진다.(객체에서 key값에서도 사용가능)
? :number === number | undefined와 같다.(union type 생성) */
/* 03. type 확정하기 --> Narrowing && Assertion */
function 내함수(x) {
    if (typeof x === "string") {
        return x + 1;
    }
    else {
        return x * 2;
    } // 어떤 변수가 type이 아직 불확실하면(union type등)if문으로 Narrowing 해줘야 조작이 가능하다.
}
내함수(123);
function 내함수2(x) {
    let arr = [1, 2, 3, 4];
    if (typeof x === "number") {
        arr[0] = x;
    }
    else {
        return "";
    } // Narrowing --> 만약 if문 썼으면 안전하게 else / else if까지 써서 error 방지할것
}
;
내함수2(123);
// Narrowing으로 판정해주는 문법들 :  typeof 변수, in 오브젝트자료, instanceof 부모
function 내함수3(x) {
    let arr = [1, 2, 3, 4];
    arr[0] = x; // as number = number type으로 덮어쓰기(Assertion)
}
내함수(12);
/*
Assertion 문법의 용도
1. Narrowing할때 --> 다시말해, type을 a에서 b로 변경할때 쓰는게 아니라 union type일때 Narrowing할때 쓰인다.
2. 무슨 type이 들어올지 10000% 확실할때 쓴다. --> 반대로 말하면 debugging하기가 힘들어져서 if문등을 쓰는걸 선호한다.
*/
function 클리닝함수(x) {
    let cleanedArr = [];
    x.forEach(v => {
        if (typeof v === "string") {
            cleanedArr.push(parseInt(v));
        }
        else {
            cleanedArr.push(v);
        }
        ;
    });
    return cleanedArr;
}
;
console.log(클리닝함수([1, 2, 3, "4", "5"]));
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 마지막과목(x) {
    let subjectLast = x.subject;
    if (Array.isArray(subjectLast)) {
        let subjectResult = subjectLast[subjectLast.length - 1];
        console.log(subjectResult);
    }
    else {
        console.log(subjectLast);
    }
    ;
}
;
마지막과목(철수쌤);