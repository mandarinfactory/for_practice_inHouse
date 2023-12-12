/* 19. d.ts 파일 만들기 */

// d.ts파일은 type정의 보관용 파일이다. (components, screens같은 폴더역할)

import { Age } from "./type.d";

let age: Age = 29;
let name: string = "kim";

/* 20. implement */

// object type지정시 interface뿐만아니라 implement도 사용할 수 있다.

interface CarType {
  model: string;
  price: number;
}
class Car implements CarType {
  // class이름 우측에 implement를 쓰고 해당 interface이름을 쓰면
  // "이 class가 interface에 있는 속성을 다 들고 있나?"라고 확인이 가능하다.
  // implement는 해당 interface에 들어있는 속성을 가지고 있는 확인을 할뿐이지
  // class에다가 type을 할당하고 변형시키는 keyword는 아니다.
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 현기차 = new Car("morning");

/* 21.object index signitures */

interface UserType {
  [key: string]: string | number;
  // key에 모든 속성이 string으로 된 속성 --> index signiture
  // index signiture에서는 중복되는 속성은 안된다. (한개는 number이고 그외는 string으로 이런건 안된다.)
  // 단, 겹치게 type을 지정해주면 된다.
}

let user: UserType = {
  name: "kim",
  age: 20,
  location: "seoul",
};

interface CssType {
  "font-size": CssType | number; // { "font-size" : CssType }
}

let css: CssType = {
  "font-size": {
    "font-size": {
      "font-size": 15,
    },
  },
};

/* 22. object type 변환기 만들기 */

let object = {
  name: "kim",
  age: 20,
};
Object.keys(object); // ["name", "age"]

interface Person1 {
  age: number;
  name: string;
}
type Person1Keys = keyof Person1; // keyof는 key값을 전부 가져온다. 여기서는 "age" | "name"으로 가져온다.(literal type)
let a: Person1Keys = "age";

interface Person2 {
  [key: string]: number;
}
type Person2Keys = keyof Person2; // index signiture는 string | number로 나온다.
let b: Person2Keys = 30;

type Car2 = {
  color: boolean;
  mode: boolean;
  price: boolean | number;
};

type TypeChanger<Type> = {
  [key in keyof Type]: string;
  // 위 Car2에 있는 color, model, price가 type화 되서 color | model | price가 되고,
  // 다시 이게 key값으로 되면서 type을 string으로 가지게 된다.
};
type NewType = TypeChanger<Car2>; // Car2의 type들이 전부 string으로 변한걸 볼 수 있다.

/* 23. 조건문으로 type만들기 & infer */

type Age2<Type> = Type extends string ? string : unknown;
// if-else문은 삼항연산자로 변환하는것을 지향한다.
// 조건식은 -extends-를 써서 맞는지 틀린지를 구별할 수 있다.
let a1: Age2<string>; // string
let a2: Age2<number>; // unknown

type FirstItem<Type> = Type extends any[] ? Type[0] : any;
let a3: FirstItem<string[]>;
let a4: FirstItem<"hi">;

type 타입추출<Type> = Type extends (infer Return)[] ? Return : unknown; 
// infer은 type을 왼쪽에서 추출한다. 여기서는 타입추출<Type>에서의 Type(string[])이다.
// 여기서 Return은 string이다. --> string[]에서 infer는 string만 추출해온다.
type abc =  타입추출<string[]>;
let b1: abc = "hi"; // abc type은 string이다.

