$(function () {
    /* ex_one -------------------------------------------------------- */
    $('.ex_one button').click(function () {
        $('.ex_one .result').empty('') // each밖에 click할때 한번 '결과!!'를 지우고 each element를 출력시킨다.
        $('.ex_one button').each(function () {
            var thisText = $(this).text() // 이때의 this는 click할때의 this가 아닌, 차례가 온 'this' element이다.
            $('.ex_one .result').append(thisText) // append : 이어붙이는 명령어
        })//each
        /*  each = forEach(), 차레를 왔을때의 각각 event를 말한다. => 무조건 call-back함수를 써넣는다.
        element의 갯수만큼 each event가 실행시켜준다. */
    })//click
    /* ex_two -------------------------------------------------------- */
    /* 갯수는 한번만 출력한다! => 차례대로 증감연산!(+need 변수선언) */
    /* var a = 0 => click할때마다 숫자가 계속증가! */
    $('.ex_two button').click(function () {
        var a = 0; //click하는 순간에 0을 만들고 each event로 차례대로 실행시켜준다.
        $('.ex_two .box').each(function () {
            /* var a = 0 => 증가가 안됨. */
            a ++;
            /*  $('.ex_two .result').text(a) => 1, 2, 3을 출력한다. */
        })//each
        $('.ex_two .result').text(a)
    })//click
    /* ex_three -------------------------------------------------------- */
    $('.ex_three button').click(function () {
        $('.ex_three .box').each(function () {
            var boxColor = $(this).attr('data-bg')
            $(this).css({'background-color':boxColor})
        })//each
    })//click
    /* assignment!(ex_four) -------------------------------------------- */
    $('.ex_four button').click(function () {
        var a = 0;
        $('.ex_four p').each(function () {
            var paraNum = $(this).attr('data-answer')
            var dataNum = ($(this).children('input:checked')).attr('data-n')
            if (paraNum === dataNum) {
                a ++
            } else {''}
        })//each
        $('.ex_four .result').text(`${a}점입니다. 축하합니다.`);
    })//click
})//call-back