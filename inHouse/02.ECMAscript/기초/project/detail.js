/* 
버튼0 누르면
버튼??에 붙은 orange 클래스명 제거
버튼 0에 orange 클래스명 추가
모든 div에 붙은 show 클래스명 제거
div0에 show 클래스명 추가
*/
document.querySelectorAll('.tab-button').forEach(v => {
    v.addEventListener('click', e => {
        let tarVal = e.target.value 
        document.querySelectorAll(".tab-button")[`${tarVal}`].addEventListener("click", (e) => {
          document.querySelectorAll(".tab-button").forEach(v => {
            v.classList.remove("orange");
          })//forEach
          e.target.classList.add("orange");
          document.querySelectorAll('.tab-content').forEach(v => {
              v.classList.remove("show");
            })//forEach
            document.querySelectorAll(".tab-content")[`${tarVal}`].classList.add("show")
        })//click
    })//click
})//forEach

fetch('https://codingapple1.github.io/price.json')
.then(res => res.json())
.then(data => {
  console.log(data.price);
})
.catch(error => {
  console.log(error);
})

