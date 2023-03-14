// 17.for in && for of //
// - 반복문은 코드를 여러번 실행하거나(for in), array / object에서 자료를 꺼내쓸때(for of) 사용

class Parent {

}
Parent.prototype = 'John';

var sonObj = new Parent();

var theObj = {
    name : 'Brent',
    age : 31
};
//Object.getOwnPropertyDescriptor(object의 이름, key의이름)
Object.getOwnPropertyDescriptor(theObj,'name') // value, writable, enumerable, configurable로 각각 속성이 나온다.
for (var key in theObj) {
    theObj.hasOwnProperty(key);
    console.log(theObj[key]);
}// for in반복문 : object에 있던 값을 전부 하나씩 꺼내서 사용할 때 --> for (var 작명 in 반복할 object)
/* 
1. for in 반복문 
· enumerable한 것만 반복해준다. --> 속성 중 하나이고, 셀 수 있는지의 여부를 따진다.(true여야한다.)
· 부모의 prototype도 반복해준다.
*/

var arr = [1,2,3];
//for (변수명작명 of 배열 등)
for (var key of arr) {
    console.log(key);
}
/* 
2. for of 반복문
· array, string, arguments, NodeList, Map, Set등 iterable한 자료형에만 사용가능하다.
*/


// 18.Map, Set //

var person = new Map();
person.set('name','Brent');
console.log(person); // Map(1) {'name' => 'Brent'}, Map은 자료간의 연관성을 표현하기 위해 쓴다.
person.set([1,2,3],'Brent');
console.log(person); // Map(2) {'name' => 'Brent', Array(3) => 'Brent'}, 배열이든 뭐든 상관없다.

person.get('name'); // 자료 가져오는법
person.delete('name') // 자료 삭제하는법

for (var key of person.keys()){
    console.log(key); // (3) [1, 2, 3]
}
// Map 자료형에 직접 자료 집어넣을땐 [[]]을 사용하면 된다.