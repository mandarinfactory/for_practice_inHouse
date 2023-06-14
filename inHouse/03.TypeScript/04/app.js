/* 08. function type지정 심화 : rest parameter, destructuring */
function 함수1(...a) {
    // rest parameter는 배열로 출력하므로 항상 type 지정시 []을 같이 써줘야한다.
    console.log(a, a[1]); // (6) [1, 2, 3, 4, 5, 6] 2
}
함수1(1, 2, 3, 4, 5, 6);
let { student, age } = { student: true, age: 17 };
let 객체1 = { student: true, age: 17 };
console.log(student); // true
function 함수2({ student, age }) {
    // 함수 parameter를 destructuring으로 쓰면 객체 넣기가 쉬워진다.
    console.log(student, age); // true 17
}
함수2({ student: true, age: 17 }); // destructuring을 쓰면 여기에 값을 객체로 넣어줄수 있다.
function 최댓값구하기(...rest) {
    console.log(Math.max(...rest));
}
최댓값구하기(6, 3, 7, 2);
function 함수3({ user, comment, admin }) {
    console.log(user, comment, admin);
}
함수3({ user: "kim", comment: [3, 5, 4], admin: false });
function 함수4([num, wine, define]) {
    console.log(num, wine, define);
}
함수4([40, "wine", false]);
function 함수5(animal) {
    if ("swim" in animal) {
        // in 키워드로 narrowing이 가능하다 --> 속성명 in 객체자료
        animal.swim;
    }
}
let 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log(날짜);
    // instanceof 연산자로 object narrowing이 가능하다.
}
function 함수6(x) {
    if (x.wheel === "4개") {
        // object type마다 각각의 literal type을 만들어주면 narrowing 하기 편리하다.(여기서는 string)
        console.log("x는 Car-type 입니다.");
    }
    ;
}
;
/* 10. never type --> 딱히 막 자주 쓰이지는 않는다. */
function 함수7() {
    throw new Error(); // endless함수를 만들기 위해 강제로 error를 출력시킨다.
    // 잘 안쓰는데 잘못 입력해서 자동으로 출력될때가 있다.
}
;
// never type을 쓰러면 return값이 없어야한다. + endpoint가 없어야한다. => 끝나지 않는 함수?
// 대부분은 void type을 쓴다.
