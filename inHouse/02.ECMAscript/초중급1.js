/* 01. this */
console.log(this); // {window}

function 함수 () {
    console.log(this); // {window}
};
함수();
/* 어쨋든 함수내 log(this)나 밖에 있는 log(this)나 해당 this를 담고있는 객체(object)는 {window}로 동일하다. */

var 객체 = {
    data : "Kim",
    함수 : function () {
        console.log(this); // var 객체를 출력한다. {data: 'Kim', 함수: ƒ} --> 나를 포함하고 있는 객체(object)
    },
};

객체.함수();

var 객체2 = {
    data : {
        함수 : function () {
            console.log(this); // 자기자신을 포함하는 객체만 출력된다. --> {함수: ƒ}
        },
    },
};

객체2.data.함수();

var 객체3 = {
    data : {
        함수 : () => {
            console.log(this); // 화살표함수를 쓰면 {window}가 출력된다. --> 상위의 this값(window)을 그대로 사용한다.
        },
    },
};

객체3.data.함수();