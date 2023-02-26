const inputIdVal = document.querySelector('.id').value;
const inputPwVal = document.querySelector('.pw').value;

document.querySelector('.btn-primary').addEventListener('click', () => {
    console.log(inputPwVal.length);
    if(inputIdVal == '' || inputPwVal == '') {
        alert('빈칸을 확인하고 다시 제출해주십시오.')
    } else if (inputPwVal.length < 6) {
        alert ('비번을 6자이상 쳐주시기 바랍니다.')
    }//if
    if(/\S+@\S+.\S+/.test(inputIdVal)) {
        alert('이메일의 형식이 확인되었습니다.')
    }//if
})//click
document.querySelector('form').addEventListener('submit', () => {
    if(/[A-Z]/.test(inputPwVal) == false) {
        alert('비번에 대문자 1개를 추가해주시기 바랍니다.')
        console.log(inputPwVal);
    } else {
        alert('비번이 확인되었습니다.')
        console.log(inputPwVal);
    }//if
})//submit


document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.list-group').classList.toggle('show');
})

document.querySelector('#login').addEventListener('click', () => {
    document.querySelector('.black-bg').style.display =' block'
    document.querySelector('.black-bg').classList.add('show-modal')
})

document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('.black-bg').style.display =' none'
    document.querySelector('.black-bg').classList.remove('show-modal')
})
let count = 0
const badge = document.querySelector('.badge')
badge.addEventListener('click', () => {
    count++
    if (count % 2 === 0) {
        badge.innerHTML = 'Dark 🔄'
    } else {
        badge.innerHTML = 'Light 🔄'
    }
})
let second = 5;
setInterval(() => {
    second -= 1;
    if(second >= 0) {
        document.querySelector('.alert').innerHTML = `${second}초 이내 구매시 사은품을 증정합니다!`
    }
},1000)
setTimeout(() => {
    document.querySelector('.alert').style.display='none'
}, 5000)

const slideContainer =  document.querySelector('.slide-container')
document.querySelector('.slide-1').addEventListener('click', () => {
    slideContainer.style.transform = 'translateX(0vw)';
})
document.querySelector('.slide-2').addEventListener('click', () => {
    slideContainer.style.transform = 'translateX(-100vw)';
})
document.querySelector('.slide-3').addEventListener('click', () => {
    slideContainer.style.transform = 'translateX(-200vw)';
})

/* 다음버튼 누르면 지금 보이는 사진이 1이면 2번 사진 보여주기  */
let thisPhoto = 1;
document.querySelector('.prev').addEventListener('click', () => {
    slideContainer.style.transform = `translateX(-${thisPhoto-2}00vw)`;
    thisPhoto--
})//prev
document.querySelector('.next').addEventListener('click', () => {
    slideContainer.style.transform = `translateX(-${thisPhoto}00vw)`;
    thisPhoto++
})//next

function foo() {
    return 123
    /* 
    return은 오른쪽에 있는 123을 '퉤' 밷어준다고 생각하면 쉽다.
    또한, return은 함수를 종료해달라는 기능도 있으므로 아래 쓰여진 코드들은 죽게 된다.
    */
}
const handleIndicator = () => {
    let curY = document.querySelector('html').scrollTop; // scroll한높이
    let totalY = document.querySelector('html').scrollHeight - document.querySelector('html').clientHeight; // 전체높이
    let percentage = (curY / totalY) * 100;
    document.querySelector('.indicator').style.width = `${percentage}%`
}//handleIndicator
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // window.scrollY = 브라우저에서 사용자가 scroll한 양
        document.querySelector('.navbar-brand').style.fontSize = '1.4em'
    } else {
        document.querySelector('.navbar-brand').style.fontSize = '1.8em'
    }
    if(document.querySelector('.indicatorbar') != null) handleIndicator();
})//window.scroll

/* div의 스크롤바 내린 양 + 해당 div의 높이 == div의 실제높이면 alert() 띄우기 */
document.querySelector('.lorem').addEventListener('scroll', () => {
    let scrTop = document.querySelector('.lorem').scrollTop; // 사용자가 scroll한 양
    let scrHeight = document.querySelector('.lorem').scrollHeight; // 실제 scroll의 높이
    let divHeight = document.querySelector('.lorem').clientHeight // 실제 해당 div의 높이
    if (scrTop + divHeight == scrHeight - 5) {
        alert('페이지를 다 읽으셨습니다.')
    }
})

let htmlScrH = document.querySelector('html').scrollHeight; // 현재 페이지의 실제높이
let htmlCliH = document.querySelector('html').clientHeight;// 현재 보고있는 페이지의 실제높이
let htmlScrY = window.scrollY // 현재 페이지의 scroll양

document.querySelector('.black-bg').addEventListener('click', e => {
    if (e.target == document.querySelector('.black-bg')) {
        /* e.stopPropagation();
        모든 브라우저는 event-bubbling이 일어남 --> event가 상위 html로 퍼지는 현상 */
        document.querySelector('.black-bg').classList.remove('show-modal')
    }
})