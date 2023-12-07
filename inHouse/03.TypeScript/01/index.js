"use strict";
let 이름 = "kim";
// 변수 선언시 변수 선언이름 뒤에 type을 지정해줘야한다.
function 함수(x) {
    return x * 2;
}
// 한개인경우 :string[]으로 type선언할수 있다.
let john = [123, true];
let brent = { name: "345", isAdult: true };
class User {
    constructor(name) {
        this.name = name;
    }
}
