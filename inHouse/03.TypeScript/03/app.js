/* 07. class만들때 type지정 및 object type 지정시에 interface사용 */
class Person {
    name;
    // 여기를 field값이라고 하고 사전에 field값이 있고 type까지 지정이 되어있어야
    // constructor에서 사용이 가능하다.
    constructor(a) {
        // parameter에 직접 type을 지정한다.
        this.name = a;
    }
    함수12(b) {
        // prototype에 들어가는 함수12에도 type을 지정한다.
        console.log("안녕" + b);
    }
}
let 사람1 = new Person("Brent");
let 사람2 = new Person("John");
사람1.함수12("반가워");
let 네모 = { color: "red", width: 100 };
let 학생 = { name: "kim" };
let 선생 = { name: "kim", age: 20 };
