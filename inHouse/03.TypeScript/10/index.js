"use strict";
/* 19. d.ts 파일 만들기 */
Object.defineProperty(exports, "__esModule", { value: true });
let age = 29;
let name = "kim";
class Car {
    constructor(a) {
        this.price = 1000;
        this.model = a;
    }
}
let 현기차 = new Car("morning");
let user = {
    name: "kim",
    age: 20,
    location: "seoul",
};
let css = {
    "font-size": {
        "font-size": {
            "font-size": 15,
        },
    },
};
/* 22. object type 변환기 만들기 */
let object = {
    name: "kim",
    age: 20,
};
Object.keys(object); // ["name", "age"]
let a = "age";
let b = 30;
// if-else문은 삼항연산자로 변환하는것을 지향한다.
// 조건식은 -extends-를 써서 맞는지 틀린지를 구별할 수 있다.
let a1; // string
let a2; // unknown
let a3;
let a4;
let b1 = "hi"; // abc type은 string이다.
