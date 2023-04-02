/* typescript는 일단 자동적으로 type이 지정된다. --> 쉴드를 자동으로 씌워준다. */
let name1 :string = 'kim'; 
// :~ --> 변수에 타입(string, number, boolean···)지정 = 변수에 쉴드를 씌우는것
let age :number = 49;
let married :undefined = undefined;

let member :string[] = ['Brent', 'John']
let people :{member1 : string, member2 : string} = { member1 : 'Brent', member2 : 'John' }
// 배열, 객체 또한 따로 [],{}로 타입을 지정할수 있다. 단, 배열은 []앞에 어떤 타입들이 들어가는지도 지정해야한다.
// 객체 또한 key에 해당하는 값의 타입을 지정할수 있다.

let project :{
    member :string[],
    days :number,
    started :boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }

let 회원 :number | string = 'Brent'; // union-type, 타입 2개이상 합친 새로운 타입만들기
회원 = 123;

let 회원들 :(number | string) [] = [1,'2',3]
let Obj1 :{ a : string | number }= { a : 12 }

let 이름 :any; // any는 모든 자료형 타입을 허용해준다.
이름 = 123;
이름 = undefined;
이름 = true; // any타입은 --> 타입의 쉴드 해제문법이다.(일반 JS변수 만들고 싶을때 쓴다.)

let 이름1 :unknown; // any랑 비슷하다. --> any보다는 안전한 모든 자료형 타입을 허용한다.
이름1 = {};
// let 변수1 :string = 이름1; --> 이미 이름1은 object로써 타입이 정해졌으므로 error가 발생하게 한다. (unknown이 안전한 이유)

/*  
이름1 - 1; 도 JS와 다르게 바로 error가 발생한다. TS는 JS와 다르게 타입을 엄격하게 확인한다. 
다시말해서,
string타입 + 1, number타입 + 1 은 허용하지만,
string | number타입 + 1은 허용하지 않는다.(해당타입이 어떤타입인지 애매하므로)
*/

function 함수(x){
  return x * 2
};
함수(30); // 60
