// 11.desctructuring(구조분해, 패턴매칭) //

var arr = [1,2,3,4];

/* var a = arr[0]; */
var [a,b,c,d = 10] = [1,2,3];
// 모양만 맞춰서 변수를 선언하면 변수가 생성된다.
console.log(a,b,c,d); 
/* 
1 2 3 10(d에는 다른값이 들어가지 않았으므로 default값으로 들어간다.) 
--> destructuring을 쓰면 보다 직관적으로 변수를 만들 수 있다. 
--> 만약, 값을 할당하지 않는다면 undefined가 나온다.
*/
var obj1 = {
    name : 'Brent',
    age : 30
};
/* var name = obj1.name; */
var {name : 나이, age = 31} = { name : 'Brent' }; // 위에서 말한대로 destructuring을 쓰려면 해당 모양만 맞춰서 생성하면 된다.
console.log(나이, age); // Brent 31

var name = 'John';
var age = 32;
var obj02 = {
    name, // object의 key와 value가 같으면 2번쓸필요 없다.
    age
}
console.log(obj02); // {name: 'John', age: 32}

var obj03 = {
    name : 'Brian',
    age : 42,
};
function 함수01({ name, age }) {
    console.log(name, age);
}
함수01(obj03); // Brian --> name / 42 --> age