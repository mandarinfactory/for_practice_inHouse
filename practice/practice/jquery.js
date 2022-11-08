$(function () {
    $('.ex_one button').click(function () {
        var a = [1, 3]
        var point = 0;
        for(var i = 0; i < a.length; i++)
        if($(`.ex_one .q_${i} .radio${a[i]}`).prop('checked')) point++
    })//click(.ex_one)
    /* ex_one ------------------------------------------------------- */
    $('.ex_two button').click(function () {
        var a = [0,1,0,1]
        var checkCnt = 0;
        for(var i = 0; i < a.length; i++)
        if( // 정답조건!
        ($(`.ex_two .chk${i}`).prop('checked') && a[i] === 1)
        ||
        (!$(`.ex_two .chk${i}`).prop('checked') && a[i] === 0) // checkbox 하나 검사한것!(check된것, 안된것 4개!) * 총4번해야함!
        ){checkCnt++}
        if(checkCnt === a.length){
            $('.ex_two .result').text('정답')
        } else {
            $('.ex_two .result').text('오답')
        }
    })//click(.ex_two)
    /* ex_two ------------------------------------------------------- */
    $('.ex_three button').click(function () {
        var a = [0,1,0,1]
        var i = 0
        var checkCnt = 0;
        $('.ex_three input').each(function () {
            if(
                ($(this).prop('checked') && a[i] === 1)
                ||
                (!$(this).prop('checked') && a[i] === 0) // => .ex_two랑 비슷하다! i만 변경!
                ){checkCnt++} //4번 검사! 
                i++ // i값도 변화해야하니까!
        })//each
        if(checkCnt === a.length){
            $('.ex_three .result').text('정답')
        } else {
            $('.ex_three .result').text('오답')
        }//if-else
    })//click(.ex_three)
    /* ex_three ------------------------------------------------------- */
    $('.ex_four button').click(function () {
        var checkCnt = 0;
        var a = [2,4] //2, 4번째에 답이있다!(1, 3번째에는 답X)
        for(var i = 1; i <= 4; i++){
            $(`.ex_four input:nth-child(${i})`).prop('checked') && 
        }//for
    })//click
    /* ex_four ------------------------------------------------------- */
})//call-back