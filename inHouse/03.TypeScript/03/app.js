/* JS class문법 && prototype을 알아보자 */

function 기계 (Qskill, Wskill) {
    this.q = Qskill,
    this.w = Wskill
}
// class는 쉽게말해 object를 만드는 기계이다. --> 여기서 만들어지는 object를 instance라고 한다.

var a = new 기계("consume", "snowball");
console.log(a); // 기계 {q: 'consume', w: 'snowball'}

class Hero {
    Constructor () {
        this.q = "가나다";
        this.w = "라마바";
    };
}; // ES6오면서 따로 class라고 명령어가 생겼다.

console.log(기계.prototype); // {constructor: ƒ} --> prototype은 유전자라고 생각하면 쉽다!
// 따라서 prototype에 뭔가 추가하면 해당 자식들도 사용이 가능하다. --> 상속이 된다.

기계.prototype.name = "Brent";
console.log(a.name); // Brent
// 이렇게 a객체가 name이라는 key를 가지고 있지 않더라도 부모인 prototype(부모유전자)에 있는걸 확인후 인식하여 출력시킨다.
