const loginForm = document.querySelector("#login-form");
// querySelector로 볼때는 class(.), id(#)를 꼭 표시해줘야한다. //
// querySelector가 아닌 getElementById로도 사용 가능하다. 이때는 따로 표시할 필요 없다. //
const loginInput = loginForm.querySelector("input");
// loginForm 또한 HTML element이므로(<div class="login-form">을 element화한 이름이다.) document가 아닌 loginForm으로 검색이 가능하다. //
// === 좀더 정밀 조사가 가능하다. //
const identity = document.querySelector("#identity");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 일반적으로 string으로만 되어있는 변수는 대문자로 표기하곤 한다. //
// const로 element로 묶어서 자주 쓰는 변수는 오타를 줄이도록 한다. //
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // browser 내부 API인 localStorage에 username을 submit하면 바로 저장하게 해준다. //
    searchIdentity(username);
};
loginForm.addEventListener("submit",onLoginSubmit);
// addEventListener를 쓸때에는 function인 onloginSubmit을 바로 실행시키는건 아니므로 onLoginSubmit()식으로 기록하지 않는다. //
// form내 input이나, enter를 눌러서 submit을 할때마다 browser는 자동으로 새로고침 된다.(browserdefault) //
// 이걸 preventDefault로 막아준다. //
// function(){}꼴로 쓰면 event 정보를 얻을수 없지만, (event)식으로 공간을 만들면, argument가 생기고 JS가 발생한 event에 대한 정보를 준다. = infomation //
// addEventListener로 submit을 통해 onLoginSubmit function이 실행되면 첫번째 argument인 event가 실행된다. //
// event내에 있는 preventDefault가 submit후 자동으로 browser가 새로고침되는걸 막아준다. //
// console.log를 통해 loginInput에 있는 value(innerText)가 출력된다. //
function searchIdentity(username) {
    identity.innerText = `Hello ${username}`;
    identity.classList.remove(HIDDEN_CLASSNAME);
}
// `Hello ${username}`;은 원래 "Hello " + username;꼴인데 백틱(``)으로 바꾼거다. //
// classList에 아직 hidden이 있고, CSS.display.none이 되어있으므로, remove function을 통해 .hidden을 지워준다. //
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    searchIdentity(savedUsername);
};
// localStorage는 정보를 저장, 불러오기, 삭제가 가능한 browser가 가지고 있는 작은 DB같은 API //
// RECAP //
// 1. savedUsername이 null이라면, loginForm(#login-form)에서 .hidden을 지워서 form을 나오게 한다. //
// 2. addEventListener를 통해 user가 argument를 submit 하면, onLoginSubmit function이 실행된다. //
// 3. onLoginSubmit에서 submit을 하면 preventDefault를 통해 새로고침인 browserDefault가 중지되고, loginForm에 다시 .hidden이 추가되서 지워진다. //
// 4. input된 value(user가 입력한 argument) = username으로 element화 했고, localStorage에 username이라는 keyname과 함께 저장된다. //
// 5. 이제 else를 통해 searchIdentity function이 실행되고, innerText로 hello + "username"꼴로 browser에 나타난다. (이때 #identity의 .hidden이 삭제되면서 나타난다.) //
// 6. savedUsername으로 인해 localStorage에 저장된 username이 Hello + "username"꼴로 계속 나타나게 된다. //