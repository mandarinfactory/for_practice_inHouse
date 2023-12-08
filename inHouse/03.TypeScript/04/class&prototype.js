let nunu = {
  q: "consume",
  w: "snowball",
};
let garen = {
  q: "strike",
  w: "courage",
};
// 비슷한 객체들 만드는건 class로 만드는게 편하다.(object 뽑는 기계)
function 기계1(q, w) {
  this.q = q;
  // 기계1로부터 새로 생성되는 object(instance라고도 한다.)
  // 해당 object에 q:"consume"을 추가한다.
  this.w = w;
}
nunu = new 기계1("consume", "snowball");
garen = new 기계1("strike", "courage");

class Hero {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}

기계1.prototype.name = "kim"; // 이렇게 prototype에 저장해놓으면
// 자식인 nunu나 garen에서도 .name을 하면 "kim"이 나온다. --> prototype은 유전자라서 상속된다.
// .name이 해당 객체에 없더라도 부모객체로 올라가서 찾아본다. (prototype chain)