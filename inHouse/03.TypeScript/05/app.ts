/* 11. Generic */

// 함수 parameter에 type도 입력가능하게 해준다.

function 함수<MyType>(a: MyType[]): MyType { 
    // <number>가 parameter처럼 MyType에 들어가서 type을 지정해준다. --> Generic방법
  return a[0];
}

let a = 함수<number>([5, 2]);
