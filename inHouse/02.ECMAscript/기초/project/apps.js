document.querySelector('.btn-primary').addEventListener('click', () => {
    const inputIdVal = document.querySelector('.id').value
    const inputPwVal = document.querySelector('.pw').value
    console.log(inputPwVal.length);
    if(inputIdVal == '' || inputPwVal == '') {
        alert('빈칸을 확인하고 다시 제출해주십시오.')
    } else if (inputPwVal.length < 6) {
        alert ('비번을 6자이상 쳐주시기 바랍니다.')
    }//if
})

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
