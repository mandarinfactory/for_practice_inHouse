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
var obj = {
    name : 'Brent',
    age : 30
};
/* var name = obj.name; */
var {name,age} = { name : 'Brent', age : 29 } // 위에서 말한대로 destructuring을 쓰려면 해당 모양만 맞춰서 생성하면 된다.
