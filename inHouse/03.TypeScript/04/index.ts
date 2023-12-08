/* 07. typescript로 HTML 변경, 조작시 주의점 */

const title = document.querySelector(".title");
// as Element를 써도 되지만, 지양하는 편이다.
if (title?.innerHTML !== undefined) {
  // title에 innerHTML이 있으면 출력해주고 없으면 undefined === ?
  title.innerHTML = "반가워요!";
}

const link = document.querySelectorAll(".link");
link.forEach((e) => {
  if (e instanceof HTMLAnchorElement) {
    // 그냥 Element가 아닌 보다 상세한 type들이다. HTMLAnchor/Button...
    e.href = "https://www.kakao.com";
  }
});

const button = document.querySelector(".button");
const image = document.querySelector(".image");
button?.addEventListener("click", (v) => {
  if (typeof v !== undefined) {
    if (image instanceof HTMLImageElement) image.src = "new.jpg";
  }
});

/* 08. class문법에서 type지정하기 */

class Person {
  //field영역에서 사전에 type을 지정해 줄 수 있다.
  name: string;
  constructor(a: string) {
    this.name = a;
  }
}

let 사람1 = new Person("a");
let 사람2 = new Person("b");

class Car {
  model: string;
  price: number;
  constructor(x: string, y: number) {
    this.model = x;
    this.price = y;
  }
  tax = (): number => {
    return this.price / 10;
  }; // prototype
}

let car1 = new Car("아반떼", 3000);

type StrNum = string | number;
class Word {
  num;
  str;
  constructor(...param: StrNum[]) {
    let number: number[] = [];
    let string: string[] = [];

    param.forEach((v) => {
      if (typeof v === "string") {
        string.push(v);
      } else {
        number.push(v);
      }
    });
    this.num = number;
    this.str = string;
  }
}

let word1 = new Word(1, 4, "ab", "cd");

/* 09. object type지정시 interface도 있다. */

interface Square { color: string; width: number }; // interface는 =필요없다. class만드는법과 유사하다.
let 네모 = { color: "red", width: 900 };
