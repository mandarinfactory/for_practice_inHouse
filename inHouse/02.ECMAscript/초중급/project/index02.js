// 07.primitive, reference data type //

var 변수 = 1234;
// - 그냥 문자와 숫자는 primitive data type이다. --> 변수에 값이 그대로 저장됨
var 어레이 = [1, 2, 3, 4];
var 오브젝트 = { name: "Brent" };
/*  
- array, object는 변수에 값이 저장이 되는게 아니다.
--> 어레이에 [1,2,3,4]가 저장된게 아니다. 변수에 reference가 저장된것이다.
reference는 [1,2,3,4]가 저쪽에 있다고 알려주는 화살표라고 생각하면 된다.
*/
var 이름1 = "김";
var 이름2 = 이름1;
console.log(이름1, 이름2); // 김 김
이름1 = "박";
console.log(이름1, 이름2); // 박 김

var 이름1 = { name: "김" };
var 이름2 = 이름1;
console.log(이름1, 이름2); // {name: '김'} {name: '김'}
이름1.name = "박";
console.log(이름1, 이름2); // {name: '박'} {name: '박'}
/* 
여기서 보면 이름2.name의 데이터는 변경한적이 없는데 이름1.name이 바뀌었다고 같이 바뀌게 되었다.
다시, reference의 정의를 생각해보면 이름1에는 {name : '김'}이 저장되어있는게 아닌,
{name : '김'}이 저기 있어요라는 화살표(reference)가 저장된다.
이름2에 이름1을 복사하면 {name : '김'}이 복사된게 아닌, 화살표({name : '김'}이 존재한다는 화살표)가 복사가 된것이다.
이름1,이름2 둘다 {name : '김'}가 위치하고 있다는 화살표일 뿐이지 해당 실제 값을 가지고 있는건 아니다. --> reference data type
따라서, 이름1.name을 통해 값을 변경하게 되면 화살표가 바뀌므로, 이름2도 같이 바뀌게 된다.
*/
var 이름1 = { name: "김" };
var 이름2 = { name: "박" };
// 이렇게 할당하면 이름1, 이름2 각각 독립적인 다른 화살표를 가지고 있다.

var 이름1 = { name: "김" };
var 이름2 = { name: "김" };
console.log(이름1 == 이름2); // false
이름1 = 이름2;
console.log(이름1 == 이름2); // true
/* 
{ name : '박' }가 동일한지를 물어보는게 아닌 이름1, 이름2가 이름인 화살표가 같냐고를 물어보는거기 때문에
false가 나온다.
*/

var 이름1 = { name: "김" };
function 변경(obj) {
  obj = { name: "Park" };
}
변경(이름1);
console.log(이름1); // {name: '김'}
/* 
왜 바뀌지 않고 {name: '김'}가 출력되는가?
parameter(여기서는 obj)는 변수생성 + 할당과 똑같다. 좀 더 풀어서 쓰면
변경(이름1)은 변경(이름1 = obj)로 볼수 있고, 이렇게 되면 이름1 = obj = {name: '김'}이라고 볼 수 있다.
근데 여기서 변경 function에서 obj에 { name : 'Park' }을 할당하게 된다. 이렇게 되면,
이름1 = {name: '김'}
obj = { name : 'Park' }
으로 각각 다른 화살표로 된것임을 알 수 있다.
따라서 이름1을 찍어보면 바뀌지 않고 {name: '김'}가 출력됨을 알 수 있다.
*/

// 08.Constructor && prototype && Object.create() + class //
// - object를 마구 복사하고 싶을 때 사용된다. (비슷한 object를 여러개 만들어야할때)
// - Constructor는 function을 이용하고, 이름은 대문자로 시작하는편이다.
// - 상속을 구현할 수 있는 또 하나의 문법 --> prototype === '유전자'
// - Object.create()는 ES5, class는 ES6 버전의 prototype문법이다.

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(` 안녕하세요. ${this.name}입니다.`);
  };
  /* 
    여기서 this는 새로생성되는 object를 뜻한다. --> instance라고 한다.
    this.age = 18; 처럼
    새로생성되는 object에 값 부여가능
    // prototype
    Student라는 함수(부모) ==> new Student들(자식)
    prototype에 값을 추가하면 모든 자식들이 물려받기가 가능하다.
    */
  Student.prototype.gender = "male";
}
var 학생1 = new Student("Kevin", 31); // --> Student function이 가지고 있는 name, age, sayHi속성들을 물려받음(상속)
var 학생2 = new Student("Brent", 25);
console.log(학생1); // Student {name: 'Kevin', age: 31, sayHi: ƒ}
console.log(학생2); // Student {name: 'Brent', age: 25, sayHi: ƒ}
console.log(학생1.sayHi()); // 안녕하세요. Kevin입니다.

console.log(학생1.gender); // male --> 따로 학생1을 출력한다고 gender와 관련된 key는 없다.
/* 
그렇다면 왜 gender라는 key를 가지고 있지 않는데 출력은 되는걸까?
JS는 일단 출력하려고 하는 key가 해당 object에 있는 확인하고 있으면 바로 출력, 없다면
해당 object의 부모유전자(prototype, 여기서는 Student라는 함수)를 확인해 있으면 거기서 출력하게끔 해준다.
└-> JavaScript만 있는 prototype의 동작원리이다.
 */

var arr = [1, 2, 3];
var arr = new Array(1, 2, 3); // --> 실제 array가 만들어지는 방식
console.log(Array.prototype); // 실제 부모Constructor를 확인해보면 다양한 내장함수들을 볼 수 있다.
/* 
위, 아래는 차이가 없는 같은 배열을 만들고 있다. [1,2,3] 
단, 함수로 만들어지지 않은 array나 object는 따로 prototype이 없다.
그럼, 실제 array가 만들어지는 방식을 보면 new ~ 가 붙는걸 알수 있는데 위에 Constructor를 생각해보면,
array를 만드는것도 이미 만들어져있는 Constructor를 통해 출력됨을 알 수 있다.(부모 ==> 자식으로 상속 받았다고 할 수 있다.)
따라서 부모의 유전자에 여러가지 내장함수들(sort, push, unshift ···)이 있기 때문이다.
그래서 자식에 없다고 하더라도 부모유전자(prototype)까지 올라가서 확인 후 동작하게 된다.
└-> MDN에서 배열 내장함수 검색하면 'Array.prototype.sort()'꼴로 나오는 이유가 이런 이유이다.
*/
var obj1 = { name: "Brent" };
var obj1 = new Object();
console.log(Object.prototype); // 얘 또한 다양한 내장함수들을 볼 수 있다.
// 얘도 마찬가지로 Object라는 부모Constructor에 따라 만들어지는 자식들중 하나라고 생각하면 된다.

console.log(학생1.__proto__); // {gender: 'male', constructor: ƒ}
// array.__proto__는 해당 array의 부모를 찾아준다.
var 부모Obj = { name: "John" };
var 자식Obj = {};
자식Obj.__proto__ = 부모Obj;
console.log(자식Obj.name); // John --> 부모Obj가 자식Obj의 prototype이 된것으로 볼 수 있다.

//ES5 상속기능방법 --> Object.create(); ==> 얘는 Constructor는 아님!

var 부모 = { name : 'Brent', age : 29 };
var 자식 = Object.create(부모);
console.log(자식); // {}
console.log(자식.name, 자식.age); // Brent 29
console.log(자식.__proto__); // {name: 'Brent', age: 29}
/* 
Object.create()는 자식이 prototype을 부모로 두는것이므로 key는 따로 가지고 있지 않지만,
JS문법상 없으면 부모prototype(유전자)를 확인하므로, prototype에 있는 key가 출력된다.
해당 prototype에 있는 key를 자식객체가 바꾸고 싶으면 그냥 '자식객체key = 변경할값'을 입력하면 
해당 key와 값이 자식객체에 저장된다.
*/
자식.age = 21;
var 손자 = Object.create(자식);
console.log(손자.name, 손자.age); // Brent 21 --> 손자 < 자식(21) < 부모(Brent)순으로 JS문법은 prototype(유전자)을 타고타고 올라가서 확인한다.

//ES6 상속기능방법 --> class
class 부모01 {
  constructor(name) {
    this.name = name;
    /* this.sayHi = function(){console.log('hello');} --> 자식이 직접 함수를 가짐 */
  }
  sayHi(){
    console.log('hello'); // 여기에 함수적으면 prototype에 추가된다.
  }
}
var 자식 = new 부모01('Brent');
console.log(자식); // 부모01 {name: 'Brent'}
console.log(자식.__proto__); // {constructor: ƒ, sayHi: ƒ} --> 부모prototype(유전자)
console.log(Object.getPrototypeOf(자식)); // {constructor: ƒ, sayHi: ƒ} --> 부모prototype(유전자)
/* 
그놈의 말만 오지게 많이 들은 객체지향문법(Object-Oriented)을 쓰는이유
1. object 여러개 만들어서 편하게 쓰려고 하는 것
*/

// 09.extends && super //
// - 유사한 class를 만드는법(extends --> class상속)

class 할아버지 {
  constructor(name){
    this.name = name;
    this.lastname = "Everett";
  }
}
var 할아버지1 = new 할아버지('Brent');
console.log(할아버지1); // 할아버지 {name: 'Brent', lastname: 'Everett'}
class 아버지 extends 할아버지 {
  constructor(name){
    super(name);
    this.age = 42; 
    /* 
    extends를 사용하고 this를 쓰려면 꼭! super()를 this전에 사용해야한다.
    super()는 extends한 할아버지의 constructor들을 가져온다고 생각하면 된다.
    또한, 상속할 class에서 쓰인 parameter들을 상속받을 class의 constructor, super의 ()에다가 넣어주면 된다.
    */
  }
}
var 아버지1 = new 아버지('Brent');
console.log(아버지1); // {name: 'Brent', lastname: 'Everett', age: 42}