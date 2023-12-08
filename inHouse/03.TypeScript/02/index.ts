/* 03. 함수에 type지정하는 법 & void type */

const 함수2 = (x: number): number => {
  return x * 2;
};

const 함수3 = (x: number): void => {
  // 함수에서 return값이 없을 경우 --> void type을 쓸 수 있다.
  // void를 쓰면 실수로 뭔가 return하는걸 사전에 막아 준다.
  1 + 1;
};

// 함수3() --> parameter와 type이 둘다 지정되어있으면 꼭 함수를 쓸때 parameter는 필수이다.
// parameter가 옵션일경우 그냥 x?로 넣어주면 된다. --> 위의 number type을 number | undefined라는 union type으로 만들어준다.
const 함수4 = (x?: string) => {
  if (x) {
    console.log(`안녕하세요 ${x}`);
  } else {
    console.log("이름이 없습니다.");
  }
};

const 함수5 = (x: number | string) => {
  if (typeof x === "number") {
    const y = x.toString();
    const yDigit = y.length;
    console.log(yDigit);
  } else {
    const zDigit = x.length;
    console.log(zDigit);
  }
};

function 결혼가능하냐(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(결혼가능하냐(100, true, "상"));

const 함수6 = (x: number | string): number | string => {
  // type이 하나로 확정되지 않았을경우 꼭 type narrowing을 써줘야한다.
  if (typeof x === "number") {
    return x + 1;
  } else {
    return x;
  }
};

const 함수7 = (x: number | string): number | string => {
  let array: number[] = [];
  if (typeof x === "number") {
    return (array[0] = x);
  } else {
    return x;
  }
};

const 함수8 = (x:number|string) => {
  let array :number[] = [];
  array[0] = x as number;
  // assertion(type 덮어쓰기) --> as를 통해 x의 type이 number로 덮어씌어진다. 
  // 1. assertion은 narrowing할때 쓰이는거지 number를 string으로 바꿀때 쓰는게 아니다.
  // 2. 무슨 type이 확실히 들어올때 as~를 쓴다. (if문을 넣는게 더 좋음)
  // 3. 옛날 as문법은 <>를 이용해서 썼다.
}
