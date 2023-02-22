function theUser(name, age) {
    // this = {}
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    }
}

let user1 = new theUser('Mike', 20);
let user2 = new theUser('Brent', 25);
let user3 = new theUser('Micheal', 29);
user3.sayName();// Micheal

function Item (title, price) {
    // this = {}
    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`가격은 ${price}원 입니다.`);
    }
    //return this;
}

const item1 = new Item('인형', 8900)
const item2 = new Item('연필세트', 5500)
item1.showPrice();// 가격은 8900원 입니다.
console.log(item1, item2);

/* 01. 생성자함수 ------------------------------------------------ */

let n = 'name';
let a = 'age';

const id = {
    [n] : 'Frank',
    [a] : 39,
};
console.log(id); // {name: 'Frank', age: 39}

function makeObj(key, val) {
    return {
        [key] : val
    }
}
const obj = makeObj('나이', 41);
console.log(obj); // {나이: 41}

const name = {
    name : 'Laura',
    age : 34
}
/* const newName = name */
const copyName1 = Object.assign({}, name)
console.log(copyName1);
const copyName2 = Object.assign({ gender : 'female' }, name) // 빈객체가 아니여도 같이 통합되서 복제된다.
console.log(copyName2);
const copyName3 = Object.assign({ name : 'Alexiss' }, name)
console.log(copyName3); // 복제되는 객제내에 이미 같은 key값이 있으면 새로 변경될 객체의 key로 덮어쓰기가 된다. --> Laura
//Object.assign()

const today = {
    year : '2023',
    month : 'February',
    day : 21,
    date : 'Tuesday'
}
let todayKeys = Object.keys(today);
console.log(todayKeys); // ['year', 'month', 'day', 'date']

let todayVals = Object.values(today);
console.log(todayVals); // ['2023', 'February', 21, 'Tuesday']

let theToday = Object.entries(today);
console.log(theToday); // [['year', '2023']['month', 'February']['day', 21]['date', 'Tuesday']]

console.log(Object.fromEntries(theToday)); // {year: '2023', month: 'February', day: 21, date: 'Tuesday'}
//Object.keys() && values() && entries() && fromEntries()

/* 02. object(method) : assign(), keys/values(), entries/forEntries() ------------------------------------- */

//다른 개발자가 만들어 놓은 객체
const thisUser = {
    name : 'Steve',
    age : 36,
};

//본인이 작업
const showName = Symbol('show name');
thisUser[showName] = function () {
    console.log(this.name);
};

thisUser[showName]();

//사용자가 접속하면 보는 메세지
for (let key in thisUser) {
    console.log(`His ${key} is ${thisUser[key]}.`);
}

/* 03. Symbol ----------------------------------------------------------- */

let list = [
    '01. 들어가며',
    '02. JS의 역사',
    '03. 자료형',
    '04. 함수',
    '05. 배열'
]

let newList = [];

for(let i = 0; i < list.length; i++) {
    newList.push(
        list[i].slice(4)
    )
}
console.log(newList);

// 금칙어 : 코카콜라

function hasPepsi(str) {
    if(str.indexOf('코카콜라') > -1){
        console.log('누가아아 코카콜라를 말했는가아아?');
    } else {
        console.log('킹시 갓시');
    }
}

hasPepsi('와 코카콜라가 짱이지~');
hasPepsi('펩시가 최고지~');

//includes --> 문자가 있으면 true, 없으면 false를 반환한다.

function thePepsi(str) {
    if(str.includes('코카콜라')){
        console.log('누가아아 코카콜라를 말했는가아아?');
    } else {
        console.log('킹시 갓시');
    }
}

thePepsi('와 코카콜라가 짱이지~');
thePepsi('펩시가 최고지~');


