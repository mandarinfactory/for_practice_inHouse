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

for(let i = 0;i < 10; i++){
    console.log(i);
} // 1 2 3 4 5 6 7 8 9, for문

let a = 0;
while(a < 10) {
    console.log(a++);
} // 1 2 3 4 5 6 7 8 9, while문

while(true) {
    let answer = confirm('계속할까요?');
    if(!answer){
        break; // 확인을 누르면 계속 반복하게 되고, 취소를 누르면 break로 빠져나오게 된다.
    }
} // break

for (let b = 0;b < 10; b++) {
    if (b % 2) {
        continue;
    }
    console.log(b);
} // %2를 해서 0이면 false로 인식하므로 10 미만 숫자 중 나머지가 있는 숫자를 제외하고 짝수인 0, 2, 4, 6, 8이 출력된다.
/* 반복문(for,while,do..while,break,continue) ------------------------------------- */

const fruit = prompt('무슨 과일을 사고 싶으신가요?')

switch(fruit){
    case '사과' :
    console.log('2,000원 입니다.');
    break;
    case '포도' :
    console.log('5,000원 입니다.');
    break;
    case '귤' :
    case '복숭아' :
    console.log('2,500원 입니다.');
    break;
    default :
    console.log('그런 과일은 판매하지 않습니다.');
} /* 
'사과'를 입력하면 이후 모든 log들을 다 출력하는데 case는 해당 case를 실행하면 
그 이후의 case들까지 다 실행한다. 꼭 break 써줘야한다. 
또한, if-else문에서 else의 일을 switch문에서는 default가 한다.
같은 출력값을 갖는 case는 같이 써도 무방하다. (귤, 복숭아)
*/



