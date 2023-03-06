// 11.desctructuring(구조분해, 패턴매칭) //

var arr = [1,2,3,4];

/* var a = arr[0]; */
var [a,b,c] = [1,2,3];
// 모양만 맞춰서 변수를 선언하면 변수가 생성된다.
console.log(a,b,c); // 1 2 3 --> destructuring을 쓰면 보다 직관적으로 변수를 만들 수 있다.
