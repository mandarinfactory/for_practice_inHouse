/* 15. type을 import, export 하는 법 */

import { 이름6, 나이, Name } from "./a";

console.log(이름6, 나이);
let 변수: Name = "park";

/* 16. type을 parameter로 입력하는 Generic */

const 함수19 = <Type>(x: Type[]) :Type=> {
  return x[0];
};
// number type이 parameter처럼 Type에 들어가서 type화 된다. --> 저엉말 편하다.
let a = 함수19<number>([4, 2]);

interface LengthCheck {
    length : number
}
const 함수20 = <Type extends LengthCheck>(x : Type) => {
    return x.length;
    // Generic(<>)을 쓰고 뒤에 extends로 type을 쓰면 해당 type으로만 제한된다.
}
함수20<string>("100");