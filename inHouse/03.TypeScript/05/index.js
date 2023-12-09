"use strict";
/* 10. REST parameter, destucturing 할 때 type지정 */
function 함수12(...a) {
    // ...을 붙이면 rest parameter이다.
}
함수12();
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
let [변수1, 변수2] = ["안녕", 100];
let { student2, age2 } = {
    student2: true,
    age2: 20,
};
function 함수13({ student2, age2 }) {
    console.log(student2, age2);
}
함수13({ student2: true, age2: 20 });
const maxNum = (...x) => {
    const arr = x;
    let lastNum = arr[0];
    arr.forEach((e) => {
        if (e > 0 && e > lastNum) {
            lastNum = e;
        }
    });
    console.log(lastNum);
};
maxNum(5, 7, 8, 9, 10, 90);
const 함수14 = ({ user, comment, admin }) => {
    console.log(user, comment, admin);
};
함수14({ user: "kim", comment: [3, 5, 4], admin: false });
const 함수15 = ([x, y, z]) => {
    console.log(x, y, z);
};
함수15([40, "wine", false]);
const 함수16 = (animal) => {
    if ("swim" in animal) {
        animal.swim;
    }
};
const 함수17 = (x) => {
    if (x.wheel === "4개") { // wheel이 각각 4개, 2개인걸로 literal type으로 쓸 수 있다.
        console.log("x는 Car타입 입니다.");
        // 다시말해, 이 type인지 논리적으로 특정지을 수 있으면 narrowing을 인정해준다.
    }
};
