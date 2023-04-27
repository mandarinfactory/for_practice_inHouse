// 01.this //

console.log(this); // 01.window
const fn1 = () => {
  console.log(this); // 02.window
};
fn1();
let obj = {
  data: "Brent",
  fun: function () {
    console.log(this);
  },
};
obj.fun(); // 03.{data: 'Brent', fun: ƒ}
let obj2 = {
  data: {
    fun: () => {
      console.log(this);
    }, //function
  }, //data
};
obj2.data.fun(); // 04.window

/* 
01. this는 그냥 쓰거나 일반함수 안에서 쓰면 {window}가 뜬다.
02. strict mode('use strict') + 일반함수에서 쓰면 undefined가 뜬다.
    └-> 함수나 변수를 전역공간에서 만들면 {window}에서 보관하므로 window가 출력된다.
03. object 내에 있는 함수(method)안에서 this를 출력하면 --> 그 함수를 가지고 있는 object를 뜻함
04. 단, arrow function은 this값을 함수밖에 있던거 그대로 씀 (여기서는 window)
=== this는 해당 자신을 담고 있는 object를 출력시킨다 라고 생각하면 된다.
*/

function 기계() {
  this.이름 = "Brent"; // 기계(function)안에서 this는 새로 생성되는 object(instance)라고 보면 된다.
}
let obj3 = new 기계();
console.log(obj3); // 기계 {이름: 'Brent'}

document.querySelector(".hi").addEventListener("click", function (e) {
  //console.log(this), addEventListener내에서의 this는 e.currentTarget과 같다! 만약 arrow면 window로 나오니 주의!!
  let arr = [1, 2, 3];
  arr.forEach(function (a) {
    console.log(a); // 1 2 3
    console.log(this); // window --> 지금 this는 배열안에 있지 객체(object)안에 있는건 아니므로! --> 일반함수에 있다고 생각하면 된다.
  });
});

let obj4 = {
  name: ["김", "이", "박"],
  fun: function () {
    console.log(this); // {name: Array(3), fun: ƒ}로 출력된다. --> 해당함수의 주인인 객체 obj4가 출력된다.
    obj4.name.forEach(function () {
      console.log(this);
           /*
            window로 출력된다. -->  이 this는 일반함수내에서 출력되므로 obj4가 아닌 window가 출력된다.
            만약, arrow function으로 썼다면 내부의 this값을 외부 this값 그대로 재사용해서 가져온다.
            따라서 window가 아닌 {name: Array(3), fun: ƒ}가 3번 반복 출력된다.
            */
    });
  },
};
obj4.fun();

// 02.arrow-function //

let 함수 = (a) => a + 10;
console.log(함수(5)); // 15
/* 
- 함수는 그냥 쓰는 문법이 아니다! 
1. 코드들을 기능으로 묶고 싶을때 사용
2. 입출력 기계를 만들고 싶을때 사용
    └-> arrow를 쓰면 입출력 기계를 만들때 보기 쉬움(인자가 한개면 ()생략, return이 한줄로 가능하면 return과 {}생략가능)
*/
[1, 2, 3, 4].forEach((a) => console.log(a)); // 1 2 3 4
document.querySelector(".hi").addEventListener("click", (e) => {
  // 여기서 this를 출력하면 내부this를 외부this로 가져오므로 window가 출력된다!
  e.currentTarget; //으로 왠만하면 써주자! arrow를 쓰는경우라면!
});
let obj5 = {
  fun: () => {
    //return this를 쓰면 마찬가지로 window로 출력된다.
  }, //function
};
obj5.fun();

let 사람 = {
  name: "Brent",
  sayHi: function () {
    console.log(`Hi I'm ${this.name}`);
  },
};
사람.sayHi(); // Hi I'm Brent

let num = 0;
function allAdd() {
  let 자료 = {
    data: [1, 2, 3, 4, 5],
  };
  자료.data.forEach((e) => {
    num = num += e;
    console.log(num);
  });
}
allAdd(); // 15

let thisBtn = document
  .querySelector(".btn")
  .addEventListener("click", function () {
    setTimeout(() => {
      console.log(this.innerHTML);
    }, 1000);
  });

// 03.variables //

// - 변수는 선언, 할당, 범위만 알면 된다.

// 1. var : 재선언 && 재할당이 가능하다. / 범위 : function, 그외에는 전역변수임
var name1 = "Brent";
var name1 = "Kate"; // name1을 재선언 및 재할당을 했다.
console.log(name1); // Kate

// 2. let : 재선언 X, 재할당은 가능하다. / 범위 : block({})
let name2 = "John";
/* let name2 = 'Laura' --> error가 뜬다. */
name2 = "Laura"; // 이렇게 재할당만은 가능하다.
console.log(name2); // Laura

// 3. const : 재선언, 재할당 둘다 XXXXXXX / 범위 : block({})
const name3 = "Kelly";
/* const name3 = 'Bob';
name3 = 'Bob' --> 재선언, 재할당 둘다 error가 뜬다. */
const 사람1 = { 이름: "Kim" };
사람1.이름 = "Park";
console.log(사람1); // Park --> const로 선언했는데 재할당이 왜 가능한가? 이건 const변수 자체를 재할당한게 아닌 값을 변경했으므로!
// 만약 객체(object)자체를 수정불가능하게 하고 싶으면?
Object.freeze(사람1);
사람1.이름 = "Kim";
console.log(사람1); // Park으로 출력된다.

// - 변수의 hoisting 현상

console.log(나이); // undefined
var 나이 = 30;
console.log(나이); // 30
/* 
- hoisting현상 :  변수의 선언을 변수 범위 맨위로 끌고 오는 현상(JS언어 자체의 현상임) + 함수선언도 hoisting이 일어난다.
undefined가 나오는 이유는 할당은 안된거지 변수의 선언은 이미 hoisting현상으로 되어있다는걸 볼 수 있다. 
- 전역변수 : 모든 곳에서 쓸 수 있는 변수
*/
var age1 = 20;
window.age2 = 32; // 전역변수 만드는 또다른 방법
console.log(age2);

for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".btn1")[i].addEventListener("click", () => {
    document.querySelectorAll(".modal")[i].style.display = "block";
  });
} // var로 쓰면 error가 난다!

// 04.template literals(strings) //

var 장소 = "London";
var 문자 = `Brent is live in ${장소}`;
console.log(문자);

function 함수2(a, b) {
  console.log(a); // ['안녕하세요 ', ' 입니다.', raw: Array(2)]
  console.log(b); // London
  console.log(b + a[1] + a[0]); // London 입니다.안녕하세요
}

함수2`안녕하세요 ${장소} 입니다.`; // ['안녕하세요 ', ' 입니다.', raw: Array(2)](a), London(b)
/*
첫번째 인수 a는 함수에 들어온 값에서 문자들을 array화 해준다.
두번째 인수 b는 ${장소}를 말한다.
*/

let pants = 0;
let socks = 120;
let stock = `바지${pants} 양말${socks}`;

function 함수3(a, b, c) {
  console.log(a); // ['바지', ' 양말', '', raw: Array(3)]
  console.log(b); // 20
  console.log(c); // 120
  console.log(a[1] + b + a[0] + c); //  양말20바지120
}
함수3`바지${pants} 양말${socks}`;

function 함수4(a, b, c) {
  if (b === 0) {
    console.log(`바지가 다 팔렸습니다.`);
  }
}
함수4`바지${pants} 양말${socks}`;

// 05. spread operator(...) //
// 배열, 객체를 풀어서 합치거나 복사할때 많이 쓰인다!
// ...은 항상! {},[],함수()안에서만 써야한다!

var array01 = ["hello", "world"];
console.log(...array01); // hello world --> 배열에 ...을 붙이면 []를 제거한다.

var 문자01 = "hello";
console.log(...문자01); // h e l l o --> 문자에 붙이면 한글자씩 떼서 출력해준다.

var a = [1, 2, 3];
var b = [4, 5];

var c = [...a]
console.log(c); // [1, 2, 3]
c = [...a,...b]
console.log(c); // [1, 2, 3, 4, 5] --> 배열을 합치거나 복사(deep copy)할때 ...이 자주쓰인다.

var o1 = {
  a : 1,
  b : 2
}
var o2 = {
  ...o1, // 이렇게 하는게 deep copy!
  c : 3
}
console.log(o2); // {a: 1, b: 2, c: 3}
var o2 = {
  a : 2,
  ...o1
}
console.log(o2); // {a: 1, b: 2} --> 같은값을 합치게 되면 뒤에있는 값으로 변경된다.
var o2 = {
  ...o1,
  a : 2
}
console.log(o2); // {a: 2, b: 2} --> 같은값을 합치게 되면 뒤에있는 값으로 변경된다.
function addAll(a,b,c) {
  console.log(a + b + c);
}
var array02 = [10,20,30]
addAll(...array02) // 60

var person = {
  greet : function () {
    console.log(this.name + '안녕?'); // undefined안녕?
  }
}
var person2 = {
  name : 'Brent',
}
person.greet.apply(person2) // Brent안녕? --> apply(function)내에서 person.greet가 실행되게 해준다. = call과 비슷한데 apply는 배열형태도 가능하다.

// 06. rest Parameter //
function 함수03(a,b,c) {
  for(var i = 0;i < arguments.length; i++){
    console.log(arguments[i]);
  }
}
함수03(1,2,3); // arguments는 배열로써 활용이 된다. --> 모든 parameter를 []에 담아준다.

function 함수04(a,b, ...rest) {
  console.log(rest);
}
함수04(2,5,4,6,9) 
/* 
[4, 6, 9] --> rest는 ...rest된 부분만 배열로 반환시킨다. 다시말해, 이미 인자로 되어있는 a.b는 빼고 배열로 만든다.()
다시말해, 2,5는 제외하고 배열로 만들어준다.
1. ...rest는 가장 뒤에 써야한다.
2. 두번이상 쓸수 없다.
*/
function 함수05(...rest) {
  for(var i =0;i < rest.length;i++){
    console.log(rest[i]);
  }
}
함수05(1,2,3,4)
