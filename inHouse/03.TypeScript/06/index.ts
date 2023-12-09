/* 12. 함수에 사용하는 never type */

function 함수18(): never {
  // never는 void랑 비슷하다.
  // 1. 절대 return값이 오면 안되다.
  // 2. end-point가 없어야한다. --> 함수가 끝나면 안된다. (= return이 오면 안된다.)
  // void로 대체 가능해서 잘 안쓰인다.
  throw new Error(); // 강제로 에러 실행시켜서 코드를 중단시킨다.
  while (true) {} // true일경우 내부값을 계속 실행시킨다.
  // never type은 코드를 이상하게 짜면 자주 나오기땜에 알고 있어야한다.
}
let 함수19 = function () {
  throw new Error(); // 이때도 never가 나온다.
};
// 내가 짠 코드에서 never type이 나오면 잘못된거니까 빨리 디버깅을 하면 된다.

/* 13. public, private */

class User1 {
  public name: string; // public이 붙으면 모든 자식이 이용가능(안써도 원래 있는 기능이다.)
  private age: number;
  private familyName: string = "park";
  constructor(x: string, y: number) {
    this.name = this.familyName + x;
    this.age = y;
  }
}
let 유저1 = new User1("minsu", 23);
유저1.name = "jang";
//유저1.age --> private이 붙으면 수정권한이 없어져서 class내에서만 수정 / 이용가능하다.
// 실수로 변경하는걸 막을 수 있다.

class Person2 {
  constructor(public name: string) {
    // parameter는 자식의 name속성에 기입
  }
}

let 자식1 = new Person2("kim");

/* 14. protected, static */

class User2 {
  protected x = 10; // private이면 해당 class에서만 사용가능하다.
  // protected를 쓰면 현재 class 및 extends된 class안에서까지 사용가능하다.
  // 둘다 자식들 내에서는 사용 불가능하다.
}
class NewUser extends User2 {
  doThis() {
    this.x = 20;
  }
}

class User3 {
  static x = 10; // static은 부모만 쓸수 있게 한다. --> 자식들은 상속받지 못한다.
  // private / protected / public + static으로 쓸 수 있고, 각각 개별적인 성격으로 쓰인다.
  y = 20;
}

let 자식2 = new User3();
User3.x; // 이렇게 해야 x = 10값을 쓸 수 있다.

class User4 {
  static skill = "JS";
  intro = User4.skill + "안녕";
}
User4.skill = "TS";
let 철수 = new User4();

class User5 {
  private static x = 10; // 해당 User5내에서만 쓰이고 자식에게 상속이 안된다.
  public static y = 20; // 자식에게 상속이 안된다.
  protected z = 30; // 해당User5 및 extends된 class에서만 쓰일 수 있다.
}

class User6 {
  private static x = 10;
  public static y = 20;
  addOne = (a: number) => {
    return User6.x + a;
  };
  printX = (...b: any) => {
    console.log(b);
  };
}
let theUser = new User6();
theUser.addOne(3); //이렇게 하면 x가 3 더해져야함
theUser.addOne(4); //이렇게 하면 x가 4 더해져야함
theUser.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

class Square1 {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
        top:${a * 400}px; 
        left:${a * 400}px; 
        width:${this.width}px; 
        height : ${this.height}px; 
        background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}
