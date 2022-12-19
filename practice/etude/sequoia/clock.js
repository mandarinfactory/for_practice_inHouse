const nowClock = document.querySelector("span.status-bar__column__clock")
// querySelector를 이용해서 class로 묶인(BEM사용!)span을 가져옴. //

function paintClockTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    nowClock.innerText = `${hours}:${minutes}`;
}
// paintClockTime으로 function화해 new Date()를(현재 시간, 날짜를 알려줌) 가져옴.(const date) //
// hours와 minutes를 number에서 string화 해주기 위해서 string으로 묶는다. --> JSON.Stirngify로도 가능! --> 뒤에 "0"을 추가하기 위해 string화하고 추가해야함! //
// innerText를 통해 browser에 paint 해준다. //

paintClockTime();

setInterval(paintClockTime, 1000);
// browser실행하고 바로 보여주기 위해 따로 function을 바로 실행시켜준다. //
// setInterval을 사용해서 실시간으로 보여주도록 한다. //