/* 10. REST parameter, destucturing 할 때 type지정 */

function 함수12(...a: number[]) {
  // ...을 붙이면 rest parameter이다.
}
함수12();

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];

type Student2 = { student2: boolean; age2: number };
let [변수1, 변수2] = ["안녕", 100];
let { student2, age2 }: Student2 = {
  student2: true,
  age2: 20,
};
function 함수13({ student2, age2 }: Student2) {
  console.log(student2, age2);
}
함수13({ student2: true, age2: 20 });

const maxNum = (...x: number[]) => {
  const arr = x;
  let lastNum = arr[0];
  arr.forEach((e) => {
    if (e > 0 && e > lastNum) {
      lastNum = e;
    }
  });
  console.log(lastNum);
};

maxNum(5, 7, 8, 9, 10, 90);

type Id = { user: string; comment: number[]; admin: boolean };
const 함수14 = ({ user, comment, admin }: Id): void => {
  console.log(user, comment, admin);
};
함수14({ user: "kim", comment: [3, 5, 4], admin: false });

type oneType = (number | string | boolean)[];
const 함수15 = ([x, y, z]: oneType): void => {
  console.log(x, y, z);
};
함수15([40, "wine", false]);

/* 11. Narrowing 더 알아보기 */

type Fish = { swim: string };
type Bird = { fly: string };
const 함수16 = (animal: Fish | Bird) => {
 if ("swim" in animal) {
    animal.swim
 } 
}
// typeof는 그냥 object, number, string, array만 구별가능하다.
// in은 object내 속성에 따라 narrowing을 할 수 있다.
// instanceof로는 object instanceof 부모class로 쓰면 된다.
type Car1 = {
    wheel: "4개",
    color: string
}
type Bike1 = {
    wheel: "2개",
    color: string
}
const 함수17 = (x:Car1 | Bike1) => {
    if (x.wheel === "4개") { // wheel이 각각 4개, 2개인걸로 literal type으로 쓸 수 있다.
        console.log("x는 Car타입 입니다.");
        // 다시말해, 이 type인지 논리적으로 특정지을 수 있으면 narrowing을 인정해준다.
    }
}