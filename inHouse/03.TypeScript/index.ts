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