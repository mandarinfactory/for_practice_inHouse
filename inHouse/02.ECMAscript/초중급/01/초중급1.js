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
