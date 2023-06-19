// 12. destructuring 문법(구조 해체 문법)

var [a, b, c = 10] = [7, 6];
// 해당 꼴이 구조 해체 문법의 꼴이다.
// 만약 c 처럼 따로 값을 지정하지 않으면 default 값으로 10을 지정해줄 수 있다.(안하면 undefined)
console.log(a, b, c); // 7 6 10

var { name, age } = {
  name: "kim",
  age: 30,
};
// 객체도 구조 해체 문법을 사용할 수 있다.
// 단, 변수명을 객체의 key명과 똑같이 써야한다.
console.log(name, age); // kim 30

// 함수 parameter 만들때도 구조 해체 문법 사용이 가능하다.
var obj = { name: "lee", age: 34 };

function 함수1({ name, age }) {
  console.log(name); // lee
  console.log(age); // 34
}
함수1(obj); // 객체일때

function 함수2([name, age]) {
  console.log(name); // 1
  console.log(age); // 2
}
함수2([1, 2]); // 배열일때