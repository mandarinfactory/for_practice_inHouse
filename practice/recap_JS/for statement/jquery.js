$(function () {
    $('.ex_one .button_result').click(function () {
        a = 0;/* 변수 a를 click-event가 아닌 each-event에서 선언한다면, 클릭할때마다 점수가 변하게 된다.
        따라서 click-event에서 변수를 선언한다. each에서 하면 0 <=> 1에서 왔다갔다 하게 된다. */
        var error = false;
        $(this).parent().siblings('div').each(function () {
            var divNum = $(this).attr('data-ans');
            var inputNum = $(this).children('input:checked').val();
            if (inputNum === undefined){
                error = true;
            } // if => for validation
            if(divNum === inputNum) {
               a++;
            }//if => divNum === inputNum
        })//each
        if (error){
            alert('모든 문제를 체크하고 확인해주시기 바랍니다.')
            return false;
        }//if => for error is true
        $(this).parent().siblings('.result').text(a);
    })//click
})//call-back function