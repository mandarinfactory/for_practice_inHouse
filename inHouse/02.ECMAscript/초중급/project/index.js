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

let 함수 = a => a + 10;
console.log(함수(5)); // 15
/* 
- 함수는 그냥 쓰는 문법이 아니다! 
1. 코드들을 기능으로 묶고 싶을때 사용
2. 입출력 기계를 만들고 싶을때 사용
    └-> arrow를 쓰면 입출력 기계를 만들때 보기 쉬움(인자가 한개면 ()생략, return이 한줄로 가능하면 return과 {}생략가능)
*/
[1, 2, 3, 4].forEach(a => console.log(a)); // 1 2 3 4
document.querySelector('.hi').addEventListener('click', e => {
    // 여기서 this를 출력하면 내부this를 외부this로 가져오므로 window가 출력된다!
    e.currentTarget//으로 왠만하면 써주자! arrow를 쓰는경우라면!
});
let obj5 = {
    fun : () => {
        //return this를 쓰면 마찬가지로 window로 출력된다.
    },//function
}
obj5.fun()

let 사람 = {
    name : 'Brent',
    sayHi : function () {
        console.log(`Hi I'm ${this.name}`);
    }
}
사람.sayHi(); // Hi I'm Brent

let num = 0
function allAdd () {
    let 자료 = {
        data : [1,2,3,4,5]
    }
    자료.data.forEach(e => {
        num = num += e
        console.log(num);
    })
}
allAdd(); // 15

let thisBtn = document.querySelector('.btn').addEventListener('click', function () {
    setTimeout(() => {
        console.log(this.innerHTML);
    },1000)
})

