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
이름2 = 이름1
console.log(이름1.name); // 김
console.log(이름2.name); // 김

이름1.name = "박";
console.log(이름1.name); // 박
console.log(이름2.name); // 박 
// 이름2 또한 변하게 된다. 이름2는 그냥 이름1이라는 화살표를 복사한거이므로 이름1이 바뀌어서 같이 이름2도 바뀌게 된다.
