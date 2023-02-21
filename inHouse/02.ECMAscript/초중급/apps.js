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

/* 02.  object(method) : assign(), keys/values(), entries/forEntries() ------------------------------------- */

const theID = Symbol('id');
const thisUser = {
    name : 'Steve',
    age : 37,
    [theID] : 'myid'
}
console.log(thisUser); // {name: 'Steve', age: 37, Symbol(id): 'myid'}
/* 
Symbol로 되어있는 data는 Object.keys/values등으로 나타나지 않는다. 
*/


