$(function () {
    $('.ex_one button').click(function () {
        $('.ex_one .result').empty() // text를 지움!
        for(var i = 10; i >= 1; i --){
            $('.ex_one .result').append(`${11-i}<br>`)
        }//for(.ex_one)
    })//click(.ex_one)
    /* ex_one ----------------------------------------------- */
    $('.ex_two button').click(function () {
        var str = $('.ex_two input').val()
        $('.ex_two .result').empty()
        for (var i = 0; i <= str.length; i++) {
            var indexNum = str.charAt(str.length-i);
            $('.ex_two .result').append(`${indexNum}<br>`) 
            /* str.charAt(n) = string에서 n번째가 가리키고 있는 문자열을 char-type으로 변환한다.  
            단, JS에서 n번째는 0,1,2,3....순으로 나온다.
            .append는 새로운element를 마지막에 추가하는 method이다.(prepend는 맨앞에) */
        }//for statement가 나오면, 항상 pattern을 생각하자! (must 반복되는 pattern이 있다!)
    })//click(.ex_two)
    /* ex_two ----------------------------------------------- */
    $('.ex_three button').click(function () {
        var str = $('.ex_three input').val()
        $('.ex_three .result').empty()
        for (var i = str.length; i >= 0; i--) {
            $('.ex_three .result').append(`${str.charAt(i)}<br>`) 
        }//for statement
    })//click(.ex_three) => ex_two의 for의 또다른 방법!
    /* ex_three ----------------------------------------------- */
    $('.ex_four button').click(function () {
        var str = $('.ex_four input').val()
        $('.ex_four .result').html('<ul></ul>')
        for (var i = str.length-1; i >= 0; i--) {
            $('.ex_four .result ul').append(`<ul>${str.charAt(i)}</ul>`) 
        }//for
    })//click
    /* ex_four ------------------------------------------------ */
    $('.ex_five button').click(function () {
        var a = 0;
        /* a += 1;
        a += 2;
        a += 3;
        a += 4;
        a += 5; */ // 1. 먼저 반복되는 식을 구하고, 내에서 반복되어야하는 값(1,2,3,4,5 = i)을 찾아낸다.
        for (var i = 1 ; i <= 5 ; i++) {
            console.log(a += i) // 2. for문으로 묶어서 정리한다.
        }//for
    })//click(.ex_five)
    /* ex_five ------------------------------------------------ */
    $('.ex_six button').click(function () {
        var a = 0;
        var strOne = parseInt($('.ex_six input').val()) 
        var strTwo = parseInt($('.ex_six input~').val())
        if(isNaN(strOne) || isNaN(strTwo)){
            alert('빈칸에 숫자를 확인하고 적어주시기 바랍니다!')
        }//if
        if (strOne <= strTwo){
            var start = strOne;
            var end = strTwo;
        } else {
            var start = strTwo;
            var end = strOne;
        }
        for(var i =start; i <= end; i++){
            $('.ex_six .result').text(`${a += i}`)
        }//for
    })//click(.ex_six)
    /* ex_six ------------------------------------------------ */
    $('.ex_seven button').click(function () {
        var a = 1;
        var b = parseInt($('.ex_seven input').val())
        var c = parseInt($('.ex_seven input~').val())
        for (var i = a; i <= c; i++) {
            i *= b
        }
        $('.ex_seven .result').text(a)
    })//click
    /* ex_seven ------------------------------------------------ */
    $('.ex_eight button').click(function () {
        var b = parseInt($('.ex_eight .first').val())
        var c = parseInt($('.ex_eight .second').val())
        var d = parseInt($('.ex_eight .third').val())
        for(var i = 1; i <= d; i ++){
            b += c
            $('.ex_eight .result').append(`${b}`)
        }
    })//click
    /* ex_eight ------------------------------------------------ */
    for (var i = 1 ; i <= 10; i++) {
        var numOne = Math.floor(Math.random() * 10)
        var numTwo = Math.floor(Math.random() * 10)
        $('.ex_nine .question').append(`
        <p class='q${i}'>
        <input class='n1' type='text' size='1' readonly value='${numOne}'>
        +
        <input class='n2' type='text' size='1' readonly value='${numTwo}'>
        =
        <input class='n3' type='text' size='1'>
        </p>
        `)}
    $('.ex_nine button').click(function () {
        var a = 0 // 맞힌 갯수에 +1씩 추가될 점수
        for (var i = 1; i <= 10; i++) {
                var b = parseInt($(`.q${i} .n1`).val())
                var c = parseInt($(`.q${i} .n2`).val())
                var d = parseInt($(`.q${i} .n3`).val()) //user가 input에 넣은 값
                if (d === (b + c)) {
                a ++;
                $(`.ex_nine .q${i}`).css({'background-color':'green'})
            } else {
                $(`.ex_nine .q${i}`).css({'background-color':'red'})
                }//if-else
            }//for
        $('.ex_nine .result').text(a)//result
    })//click
    /* ex_nine ------------------------------------------------ */
})//call-back function