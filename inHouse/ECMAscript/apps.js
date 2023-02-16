let theName = 'Harry';
let theLastName = 'Potter'
let age = 29;
const PI = 3.141592
const BIRTHDAY = 01/11

console.log(theName, age); // Brent 29
/* 변수 --------------------------------- */

console.log(1 + 2); //3
console.log(10 - 3); //7
console.log(3 * 2); //6
console.log(6 / 3); //2
console.log(6 % 4); //2 
console.log(1 / 0); //infinity
console.log(theName/2); //NaN(Not a Number)
//자료형내 숫자형

console.log(theName == 'Brent'); //true
console.log(age < 10); //false
//자료형내 boolean형

let theAge
let theUser = null
console.log(theAge); //undefined --> 변수 선언만 했지 해당 변수에 값을 할당하지는 않았으므로!
console.log(theUser); // null --> 'null'이라는 값을 할당받았지만 이 값은 존재하지 않는 값. === 'empty'를 가진 값이다.
//null && undefined

console.log(typeof 3);
console.log(typeof theName);
console.log(typeof true);
console.log(typeof 'abcde');
console.log(typeof theAge);
console.log(typeof theUser);
//typeof

console.log(1 + 1); //2
console.log(theName + theLastName); //HarryPotter
console.log(theName + 30); //Harry30
console.log('30' + 30); //3030
/* 자료형 ------------------------------- */
