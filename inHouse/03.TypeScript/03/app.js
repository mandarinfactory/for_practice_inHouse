class Person {
    name;
    // 여기를 field값이라고 하고 사전에 field값이 있고 type까지 지정이 되어있어야
    // constructor에서 사용이 가능하다.
    constructor(a) {
        this.name = a;
    }
    ;
    함수(b) {
        console.log("안녕" + b);
    }
    ;
}
;
let 사람1 = new Person("Brent");
let 사람2 = new Person("John");
사람1.함수("반가워");
