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
9. 변수명을 바꾸려면 import시에 {변수 as 새로운변수명} ~으로 바꿔주면 된다.
10. *는 모든 변수를 import해오는데 보통 as를 사용해서 이름을 변경해준다. --> 단, default를 사용한건 따로 가져와야한다.
*/
export var aa = 10;
var bb = 20;
var cc = 30;

export {bb};
export default cc;

// 13.Stack, Queue를 이용한 웹브라우저 동작원리 //
// - 우리가 짠 JS는 웹브라우저를 통해 실행이 되므로!
/* 
1. Stack --> 코드를 실행해주는 곳(하나만 있다. --> 그래서 JS는 보통 single threaded)
2. 잠깐 '대기실(Web API)'에 보내는 코드들이 있다 . --> Ajax요청코드, eventListener, setTimeout등
3. '대기실(Web API)'에서 queue로 이동 후 stack으로 하나씩 올린다.(stack이 바쁜곳이므로 stack이 비어있을때만 하나씩 올려보낸다.)
4. JS에서 동기적(synchronous)/비동기적(asynchronous)?
└-> JS는 동기적으로 처리된다.(한번에 한줄, 순서대로)
└-> 근데 가끔 비동기적인 처리도 가능하다.(setTimeout, eventListener, Ajax요청함수 등)
*/

// 14.sync/async && callback //
// - JS는 동기식처리(synchronous) --> 한번에 코드 한줄씩 차례로 실행!
console.log(1);
console.log(2);
console.log(3); // 동기식처리, 코드한줄씩 순차적으로!
// - 비동기식처리(asynchronous) --> Ajax요청함수, eventListener, setTimeout
console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000);
console.log(3);
// 1 3 이 나오고 1초후에 2가 나온다. --> 비동기식처리

// - callback함수는 JS를 순차적으로 실행하려고 쓴다. ==> callback함수를 보완해서 나온게 Promise패턴!
function fn01(param) {
    console.log(100);
    param(); // callback함수를 이용한 함수 디자인
}
function fn02() {
    console.log(200);

}
fn01(fn02);

// 15.Promise //
// Promise === 성공/실패 판정 기계
// Promise는 성공하면 resolved, 판정대기중이면 pending, 실패하면 rejected로 3가지 상태로 나뉜다.
// Promise는 비동기적 처리가 가능하게 바꿔주는 기계가 아닌 성공/실패를 판정해주는 기계이다. --> 그냥 callback함수의 대체제
// 단, fetch API는 쓰면 자동으로 Promise를 반환하므로 .then(), catch(), finally()등을 쓸 수 있다.

var 프로미스 = new Promise(function (resolve, reject){
    setTimeout(function() {
        resolve();
    },1000);
});
프로미스.then(function (){//.then 이후는 프로미스가 성공일 경우 실행할 코드이다. --> then은 계속 연결시킬수 있다.
    console.log(`성공`);
}).catch(function() {//.catch는 실패일 경우 실행될 코드이다.
    console.log('실패!');
})
