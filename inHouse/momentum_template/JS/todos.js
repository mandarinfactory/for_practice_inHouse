const todoForm = document.querySelector("#todo-form");
const todoWrittenInput = todoForm.querySelector("input"); 
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
// localStorage에서 toDos를 저장할때 같이 저장되는 keyname! //
let toDos = [];
// const --> let으로 변경해서 아래 toDos = parsedToDos에서 변경가능하게끔 해준다. //
// 이렇게 해야 이전에 user가 input에 쓴 value들이 사라지지않고 localStorage에도 browser에도 paint하게 해준다. // 
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// toDos를 통해 newTodo를 array화 하게 한다. //
// localStorage에 array되어있는 newtoDo(toDos)를 저장한다. --> 이때, JSON.Stringify를 통해 string화 하게 한다. //
// localStorage에도 array된 상태로 저장되므로 하나하나 개별로 출력이 가능하게끔 한다. //

function deleteTodoButton(event) {
    const list = event.target.parentElement;
    list.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(list.id));
    saveToDos();
}
// event.target은 해당 event가 지정되어서(target) parentElement로 해당값의 parent를 알려줌. //
// 위 list와 아래 list는 서로 충돌하지 않는다. --> function이 하나 끝나게 되면 서로 영향을 받지 않는다. //
// 지역변수(local Variable)은 {중괄호}로 나타내고, 한 지역내에서만 사용할 수 있는 변수이다. --> 그러한 변수는 그 지역내에서만 정의된다.(function같은) =/= 전역변수(global Variable) //
// toDo는 toDos DB에 있는(localStorage에 저장되어있는) 요소 중 하나이다. //
// list.remove()로는 browser에서만 지워지고 console창에는 여전히 살아있어서 따로 list.id값을 확인 할 수 있다. //
// toDo.id와 list.id가 다른걸 남기고 싶다. --> 우리가 클릭한 list.id(newTodoObject로 된 id = Date.Now())와 다른 toDo.id는 남기고 싶다. //
// toDo.id는 number고 list.id는 string이므로 parseInt로 변환시켜서 출력한다. //
// toDo를 filter로 다른 array로 대체한 후 saveToDos()를 통해 다시 localStorage에 저장시켜준다. (이전것은 지워짐.) //

function paintTodo(newTodo) {
    const list = document.createElement("li");
    list.id = newTodo.id;
    // newTodo.id에서 number로 넣어줬어도 DOM에서는 string으로 형변환해서 받아드리므로 따로 filter때 parseInt를 사용해준다. //
    const span = document.createElement("span");
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText = "X";
    button.addEventListener("click", deleteTodoButton);
    list.appendChild(span);
    list.appendChild(button);
    todoList.appendChild(list);
}
// 1. 위에서 가져온 newTodo(이미 user가 submit해서 todoForm에 입력된값이 저장된 element)를 저장하는것. //
// 2. createElement로 JS --> HTML에 li와 span을 생성하고 생성된 span을 appendChlild로 li안에 append한다. //
// 3. 만들어진 span innerText에 newTodo를 인식시킨다. //
// 4. list(span)에 저장된 user의 submit값을 appendChild로 todoList에 append해서 browser에 보여준다. + list로 button을 append해준다. //
// 5. createElement로 button 생성 후, button에 'X'표 설정하고 addEventListener로 click하면 deleteTodoButton function 활성화 하게 한다. //
// list뒤에 id를 붙여서 li옆에 id(Date.Now()로 각각 구분시킨 id값)가 딸려오도록 한다. 또한, event로써의 newTodo(function paintTodo(newTodo))는 object이므로 따로 .text로 innerText를 구별해서 출력값을 나눈다. //

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoWrittenInput.value; 
    todoWrittenInput.value = "";
    const newTodoObject = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObject);
    paintTodo(newTodoObject);
    saveToDos();
};
todoForm.addEventListener("submit", handleToDoSubmit);
// intro.js와 많이 비슷하다. 헷갈려서 하는 RECAP! //
// 1. todoForm에 user가 submit(addEventListener)하면 그 input은 todoWrittenInput으로 출력된다. //
// 2. console.log(todoWrittenInput.value)하면 해당 input값이 출력된다. //
// 3. 해당 input값은 newTodo로 element화 하고, todoWrittenInput값은 null("")이 된다. --> submit하고 form을 빈칸으로 만들어야하므로! //
// 4. 빈칸 만들기전에 이전에 user가 submit한 값은 저장해야하므로 newTodo로 null만들기전에 저장해놓는다. //
// 5. 따라서 console.log(newTodo, todoWrittenInput.value); 하게 되면 user가 submit한 값 + null된 값이 같이 출력된다. //
// 6. todoWrittenInput이 후에 null이 되었다고 해서 newTodo까지 null이 되지 않는다. //
// newTodo를 toDos array에 push 시킨다(element를 추가시킨다. 비슷한걸로 call, apply를 쓴다.) //
// toDos에 저장시키고, paintTodo를 통해 browser에 출 력시키고, 바로 saveToDos function을 실행시킨다(localStorage에 저장하기 위해서). //
// newTodo가 text형태만이 아닌 id도 같이 있기해 구별이 편하도록 하기 위해 따로 -Object로 묶는다. //
// id는 Math.random형태처럼 Date.now()로 ms를 주는 function을 이용한다. //

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
// localStorage에 저장된 toDos를 browser에 저장하기 위한 코드이다. //
// !==은 '~이 아닌' 따라서 savedToDos가 null이 아니면 savedToDos를 JSON.parse화 한다. --> JS가 Stringify보다 더 값들을 잘 이해할수 있는 arraye들로 만들어준다. //
// forEach --> function실행시, 그 array에 있는 각각의 item들에 대해 각각 실행시켜주게 해준다. //
// => 는 arrow function으로 쓰인다. //
// console창에 forEach로 각각의 값들이 "this is the turn of 각각의값"으로 출력해준다. //
// 이미 paintTodo에 newTodo들이 있으므로 forEach(paintTodo);로 정리가 가능하다. //
// localStorage내에 있는 이전의 todo들은 default로 사라지므로, toDos를 const --> let으로 변경 후, //
// toDos = parsedToDos로 지정해놓는다. 값이 추가되더라도 이전의 값들은 지워지지 않는다. //
// 이렇게 parsedTodos.forEach하게 되면 각각의 array된 값들이 <li id="Date,now()">로 구분되어있는 각각의 값으로 나온다. //
// paintTodo(newTodo)들은 browser상에는 innerText를 .text로 구별해서 문제없이 출력된다. //
// 위에도 쓴대로 const toDos를 let으로 바꾸면서 아래 toDos = parsedToDos를 문제없이 인식하면서 이전의 value들을 복원시켜준다. //
// 다시 paintTodo로 forEach 각각의 value들이 function에 맞게 paint된다. --> HTML에 저장되고 browser에 출력된다. //
