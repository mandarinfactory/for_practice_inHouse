"use strict";
/* 07. typescript로 HTML 변경, 조작시 주의점 */
const title = document.querySelector(".title");
// as Element를 써도 되지만, 지양하는 편이다.
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined) {
    // title에 innerHTML이 있으면 출력해주고 없으면 undefined === ?
    title.innerHTML = "반가워요!";
}
const link = document.querySelectorAll(".link");
link.forEach((e) => {
    if (e instanceof HTMLAnchorElement) {
        // 그냥 Element가 아닌 보다 상세한 type들이다. HTMLAnchor/Button...
        e.href = "https://www.kakao.com";
    }
});
const button = document.querySelector(".button");
const image = document.querySelector(".image");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (v) => {
    if (typeof v !== undefined) {
        if (image instanceof HTMLImageElement)
            image.src = "new.jpg";
    }
});
/* 08. class문법에서 type지정하기 */
class Person {
    constructor(a) {
        this.name = a;
    }
}
let 사람1 = new Person("a");
let 사람2 = new Person("b");
class Car {
    constructor(x, y) {
        this.tax = () => {
            return this.price / 10;
        }; // prototype
        this.model = x;
        this.price = y;
    }
}
let car1 = new Car("아반떼", 3000);
class Word {
    constructor(...param) {
        let number = [];
        let string = [];
        param.forEach((v) => {
            if (typeof v === "string") {
                string.push(v);
            }
            else {
                number.push(v);
            }
        });
        this.num = number;
        this.str = string;
    }
}
let word1 = new Word(1, 4, "ab", "cd");
let 네모 = { color: "red", width: 900 };
let 학생 = { name: "kim", score: 90 };
let 선생 = { name: "kim", age: 20, score: 87 };
let 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
let 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
class Numbers {
    constructor(x, y) {
        this.plus = () => {
            return this.number1 + this.number2;
        };
        this.minus = () => {
            return this.number1 - this.number2;
        };
        this.number1 = x;
        this.number2 = y;
    }
}
