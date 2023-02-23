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