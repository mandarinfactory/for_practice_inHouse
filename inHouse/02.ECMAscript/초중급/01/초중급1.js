/* 01. this */

console.log(this); // {window}

function 함수() {
  console.log(this); // {window}
}
함수();
/* 어쨋든 함수내 log(this)나 밖에 있는 log(this)나 해당 this를 담고있는 객체(object)는 {window}로 동일하다. */

var 객체 = {
  data: "Kim",
  함수: function () {
    console.log(this); // var 객체를 출력한다. {data: 'Kim', 함수: ƒ} --> 나를 포함하고 있는 객체(object)
  },
};

객체.함수();

var 객체2 = {
  data: {
    함수: function () {
      console.log(this); // 자기자신을 포함하는 객체만 출력된다. --> {함수: ƒ}
    },
  },
};

객체2.data.함수();

var 객체3 = {
  data: {
    함수: () => {
      console.log(this); // 화살표함수를 쓰면 {window}가 출력된다. --> 상위의 this값(window)을 그대로 사용한다.
    },
  },
};

객체3.data.함수();

function 기계() {
  this.이름 = "Kim"; // 객체생성기계(constructor)에서 쓰면 생성되는 객체(object)를 뜻한다.
} // 이렇게 constructor안에서 생성되는 객체를 instance라고 한다.

var 오브젝트 = new 기계(); // 기계 {이름: 'Kim'}

document.querySelector("#버튼").addEventListener("click", function (e) {
  console.log(this); // e.currentTarget
}); // 이 함수에서 화살표함수를 쓰면 this는 {window}로 출력된다.

function makeArray(e) {
  var 어레이 = [1, 2, 3];
  어레이.forEach(function (v) {
    console.log(this); // {window}
  });
}

makeArray();

var 객체4 = {
  이름들: ["김", "이", "박"],
  함수: function () {
    console.log(this); // 해당 object를 출력한다. {이름들: Array(3), 함수: ƒ}
    객체4.이름들.forEach(function () {
      console.log(this); // {window} --> this를 포함하는 {}가 객체가 아닌 일반함수이므로 window가 출력된다.
    }); // 단, forEach의 callback함수를 화살표함수로 쓰게 되면 상위의 this값을 물려받으므로 object가 출력된다. {이름들: Array(3), 함수: ƒ}
  },
};

객체4.함수();

/* 02.arrow function */

var 사람 = {
  name: "손흥민",
  sayHi: () => {
    console.log("DO YOU KNOW SON?");
  },
};
사람.sayHi(); //"DO YOU KNOW SON?"

var 자료 = {
  data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = () => {
  var add = 0;
  자료.data.forEach((v) => {
    add = add + v;
  });
};

자료.전부더하기();

document.getElementById("버튼").addEventListener("click", function () {
  setTimeout(() => {
    console.log(this.innerHTML); // 만약 addEvent도 arrow면 그냥 e.target~꼴로 바꾸면 된다.
  }, 1000);
});

/* 03. 변수선언 --> var, let, const + hoisting현상 */

// 변수선언시에는 선언, 할당, 범위만 잘 파악하면 된다.

// 1. var : 재선언 O, 재할당 O, 범위 function

var 이름 = 1;
var 이름 = "kim"; // 재선언 O
이름 = "Lee"; // 재할당 O
function 함수var() {
  var 이름 = 7;
}; // 범위 function
console.log(이름); // 1

// 2. let : 재선언 X, 재할당 O, 범위 {}(객체)

let 나이 = 20;
let 나이 = 30; // 재선언 X, error가 출력된다.
나이 - 60; // 재할당 O

// 3. const(constant,상수) : 재선언 X, 재할당 X, 범위 {}(객체)

const 장소 = "서울";
const 장소 = "부천"; // 재선언 X 
장소 = "부산"; // 재할당 X
const 사람이름 = { 이름 : "Kim" }
사람이름.이름 = "Lee"; //const는 "=" 사이에서의 재할당이 안될뿐이지 내부 값 변경에는 관여하지 않는다.
Object.freeze(사람이름); // 이렇게 freeze로 묶으면 수정이 불가능해진다. erroe가 따로 출력되지는 않는다.

if (true) {
  let 나이 = "Park";
}
console.log(나이); // 60

var 나이1 = 30;
// JS는 "var 나이1"로 먼저 변수선언 후 "나이1 = 30;"로 후에 할당한다.
// 다시말해, 변수의 선언을 변수 범위 맨위로 끌고 오게 하는데 이걸 hoisting 현상이라고 한다.
// 따라서, console.log()시에 var로 변수선언했을경우 아직 할당이 안되서 undefined가 출력되는 경우가 종종있다.

// 전역변수 : 모든 곳에서 쓸 수 있는 변수 --> window.변수명 = 할당값 꼴로 전역변수를 선언할 수 있다.
window.이름2 = "kim"; // 전역변수로 지정하려면 따로 window를 붙여서 쓰는것을 지향한다.
var 나이2 = 35;
function 함수2 () {
  let 나미3 = 49; // 지역변수
  console.log(나이2);
};
함수2(); // 35
/* 바깥({window})에서 선언된 변수는 안쪽(function,여기서는 함수2)에서도 사용가능하다. 단, 반대는 안된다. (바깥 --> 내부)*/
// 함수선언 또한 hoisting 현상이 일어난다.
