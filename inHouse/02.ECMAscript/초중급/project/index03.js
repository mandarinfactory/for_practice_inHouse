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

// 12.import && export //
/* 
1. import 가져올거 from '경로' --> html, React면 Component파일
2. export default 내보낼거 --> 실제 JS파일
3. 내보낼거와 가져올거에 이름은 같을 필요가 없다.
4. export default는 파일당 1회만 사용가능하다. --> 여러개 하려면 export만 써서 내보내야한다. + {}사용!
5. export는 변수 선언 이후 사용하거나 아님 변수 선언하면서 같이 사용해도 된다.
6. export로만 내보냈으면 import로 받을때에도 같은이름으로 {}를 사용해서 받아야한다.
7. export와 export default는 동시에 사용할수 있다.
8. 단, 두개를 동시에 출력시에는 export default로 내보낸 변수가 가장 최우선으로 앞으로 와야한다.
*/
export var aa = 10;
var bb = 20;
var cc = 30;

export {bb};
export default cc;