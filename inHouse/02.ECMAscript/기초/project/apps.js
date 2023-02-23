document.querySelector('.btn-primary').addEventListener('click', () => {
    const inputIdVal = document.querySelector('.id').value
    const inputPwVal = document.querySelector('.pw').value
    if(inputIdVal == '' || inputPwVal == '') {
        alert('빈칸을 확인하고 다시 제출해주십시오.')
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

/* 전송버튼 누르면 ---
저기 input에 입력한 값이 공백이면 --- 알림창 띄어주기 ---- */