let 이름 = "kim";
// 이 변수(이름)엔 string(문자)type만 들어올 수 있다.
let 어레이 = ["kim", "park"];
// 이 변수에는 string이 담긴 array만 들어올 수 있다.  --> push등으로도 숫자를 넣을수 없다.
let 객체 = { name: "kim" };
let 이름2 = "kim"; // string 또는 number가 들어올 수 있다.(union-type)
function 함수(x) {
    return x * 2;
}
;
let john = [123, true];
let jane = { name: "jane", age: "123" };
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
}
;
