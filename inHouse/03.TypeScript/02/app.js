/* 04. type keyword 써서 && readonly */
let 동물 = { name: "kim", age: 29 };
const 남친 = {
    name: "원호"
};
남친.name = "셔누"; // readonly로 lock이 걸려 수정이 안된다.
let position = { x: 10, y: 20 };
