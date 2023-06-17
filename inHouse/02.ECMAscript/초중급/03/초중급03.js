// 8. primitve / reference data type

var a = 1234; // 변수에 값이 그대로 저장되는 data를 primitve data라고 한다.

var 배열1 = [1, 2, 3];
// 변수에 reference가 저장되는걸 reference data라고 한다. --> 변수에 값이 저장되는게 아니다. (배열, 객체가 reference)
// 배열인 [1,2,3]이 저쪽에 있다(var 배열1)고 알려주는 화살표라고 생각하면 된다.
var 객체1 = { name: "kim" };
// 객체 또한 reference로 { name: "kim" }이 저쪽에 알려주는 화살표가 변수(객체1)이다.

var 이름1 = "김";
var 이름2 = 이름1;
이름1 = "박"; // 이렇게 되면 이름1은 "박", 이름2는 "김"이 출력된다. --> primitive type
// 이름1의 값은 "박"으로 바뀌었지만 그게 이름2의 값까지 바뀌는건 아니기 때문이다.

이름1 = { name: "김" };
이름2 = 이름1;
console.log(이름1.name); // 김
console.log(이름2.name); // 김

이름1.name = "박";
console.log(이름1.name); // 박
console.log(이름2.name); // 박
// 이름2 또한 변하게 된다. 이름2는 그냥 이름1이라는 화살표를 복사한거이므로 이름1이 바뀌어서 같이 이름2도 바뀌게 된다.

var 이름1 = { name: "김" };
var 이름2 = { name: "김" };
console.log(이름1 == 이름2); // false
// 보기엔 이름1과 이름2는 같아 보이지만 각각 다른 메모리에 저장되어있는 화살표이다. 전혀 다른값이라는것! (배열도 똑같음)

function 변경기계(obj) {
  obj = { name: "park" };
}
변경기계(이름1); // { name: "김" }
/* 
풀어서 정리하자면, 변경기계(이름1)은 변경기계(var obj = 이름1)이므로 obj는 reference를 복사한 또다른 화살표이다.
그러다가 obj는 다시 함수내에서 { name: "park" }를 가리키는 화살표로 변경된다.
따라서, obj.name = "park"으로 하면 이름1의 객체값이 아예 바뀌어서 park로 나오지만,(이때는 obj는 primitive type이다.)
위에처럼 함수가 성림되면 이름1과 obj가 각각 reference type이라서 값이 아닌 화살표로 각각의 객체값을 가리키고 있어서
예상하는 값이 아닌 값이 나온다. (이름1 = { name: "김" }, obj = { name : "park"})
*/

// 9. constructor (object 생성기계) && prototype

var 학생1 = {
  name: "김",
  age: 16,
};

function StudentId(a, b) {
  this.name = a; // 여기서 this는 해당 object를 뜻한다. (새로생성되는 object, instance를 뜻한다.)
  this.age = b;
  this.sayHi = function () {
    console.log(`안녕하세요 ${this.name}입니다.`);
  };
}
var 학생2 = new StudentId("최", 18);
console.log(학생2); // StudentId {name: '최', age: 18, sayHi: ƒ}}
학생2.sayHi(); // 안녕하세요 최입니다.

function ProductInfo(a, b) {
  this.name = a;
  this.price = b;
  console.log(this.price * 0.1);
}

let 제품1 = ProductInfo("셔츠", 35000);
// 여기서 constructor가 부모(StudentId, ProductInfo)고 부모를 이용해 만든 object를 자식(학생2, 제품1)이라고 한다.

// prototype은 유전자라고 생각하면 된다.
// constructor를 만들면 꼭 prototype이라는 공간이 자동으로 생긴다.
// 내 부모 유전자(부모prototype)을 검사하고 싶다면 .__proto__라고 하면 출력된다.

StudentId.prototype.gender = "남자";
var 학생3 = new StudentId("박", 17);
console.log(학생3); // StudentId {name: '박', age: 17, sayHi: ƒ}
console.log(학생3.gender); // 남자
console.log(학생3.__proto__); // Object
// 따로 학생3에 gender 값이 없는데도 이미 prototype으로 부모에 gender값이 있으므로 "남자"가 출력된다.
// JS는 일단 해당 값을 요청하면 자식(학생3) 확인 후 없으면 부모(StudentId···)까지 확인해보고 출력시킨다.

var arr = [1, 2, 3];
var arr = new Array(1, 2, 3); // 위 아래가 같은 방법이다.
/* 
"new Array" --> 새로운 constructor를 만드는 방법과 같은걸 알 수 있다. 
다시말해, new Array가 있다는건 상속할 수 있는 constructor가 있고, 
이 부모prototype 안에는 .sort(), .toString()···등의 내장함수가 포함되어있다는것을 알 수 있다.
*/
var obj = new Object(); // --> 마찬가지로 Object.prototype이라는 부모 prototype이 있다.

var 부모객체1 = { name: "kim" };
var 자식객체1 = {};
자식객체1.__proto__ = 부모객체1; // .__proto__를 이용해서 부모-자식관계를 만들수 있다.
console.log(자식객체1.name); // kim

function StudentName(a, b) {
  this.name = a;
  this.age = b;
  this.sayHi = function () {
    console.log("반가워~!");
  };
}

console.log(new StudentName("kim", 20).sayHi());
console.log(new StudentName("lee", 17));

var arr = [1, 2, 3];
var arr = arr.filter((x) => x != 3);

console.log(arr); //[1,2]
