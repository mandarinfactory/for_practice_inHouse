/* 01. 기본타입정리(primitive type) */
let 이름 :string = "kim";
// 이 변수(이름)엔 string(문자)type만 들어올 수 있다.

let 어레이 :string[] = ["kim", "park"];
// 이 변수에는 string이 담긴 array만 들어올 수 있다.  --> push등으로도 숫자를 넣을수 없다.

let 객체 :{ name : string } = { name : "kim" }
// 이 객체에서 해당 key(이름)는 string만 들어올 수 있다.

type Name = string | number // type의 종류가 다양해서 따로 custom-type을 만들수 있다.
let 이름2 :Name = "kim"; // string 또는 number가 들어올 수 있다.(union-type)

function 함수 (x :number) :number {
    return x * 2
};
// ()안에는 parameter를 :number로, ()밖에 있는 :number는 return값이 number만 출력되야한다는 뜻이다.

type Member = [number, boolean]; // 첫번째값은 number, 두번째는 boolean이야 한다. --> tuple-type
let john:Member = [123, true];

type Member1 = {
    [key :string] : string,
}; // [모든 object 속성(key)]
let jane:Member1 = { name : "jane", age : "123" };

class User {
    name :string;
    constructor (name :string) {
        this.name = name;
    };
};