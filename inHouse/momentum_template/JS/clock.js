const clockation = document.querySelector("h2#clock");

function getClockTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clockation.innerText = `${hours}:${minutes}:${seconds}`;
}
// 이미 console에 new Date는 기본으로 있다. new Date 하면 현재 시각,날짜가 나온다. //
// 하지만, 그냥 ${date.getHours();}꼴로 browser에 나오면 8, 9시 등 1자리수는 09가 아닌 그냥 9로 출력된다. //
// 따라서 parseInt처럼 String으로 묶어 number --> string으로 변환해준다. (parseInt는 그 반대의 기능을 한다.) //
// padStart(최대길이, 그길이미만이면 바로 앞에 추가할 string) && padEnd(최대길이, 그길이미만이면 바로 뒤에 추가할 string) //
// 다시 시,분,초 정리해서 element화 한 후 innerText에 묶어서 정리한다. //
// element화 한 후 `${}`로 묶는다. --> ${}은 표현식 삽입으로 사이에 변수나 연산등을 삽입할 수 있게 되어있다. //
// hours, minutes, secounds등을 다 date로 불러와서 clockation.innerText로 browser에 보이게 나타낸다. //

getClockTime();
// 아래 setInterval로 매1초마다 나오게 하지만, 첫1초는 delay있는걸 바로 function을 실행하게 함으로써 없애준다. //
setInterval(getClockTime, 1000);
// interval --> 매번 일어나야하는 무엇인가를 말한다. && timeout도 비슷하다. //
// setInterval(실행하고자하는 function, 이 function을 몇ms로 할것인가?) 1000ms = 1s //
