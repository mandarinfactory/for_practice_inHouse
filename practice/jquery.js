$(function (){
     /* ex_four --------------------------------------------------------------------------- */
     $('.ex_four button').click(function () {
        var resultNumber = 0; // 점수 증가할 변수
        $('.ex_four div').each(function () {
            var number = parseInt($(this).attr('data-cnt'))
            var inputNumber = 0; // 정답체크 갯수 확인에 사용할 변수
            $(this).children('input').each(function () {
                if($(this).prop('checked') && $(this).val() === 'yes'){
                    inputNumber ++;
                }// correct(if)
                if($(this).prop('checked') && $(this).val() === 'no'){
                    inputNumber --;
                }// incorrect(if)
            })//each_input(4번씩 * div의 갯수 = 12번)
            if (number === inputNumber){
                resultNumber ++ // 찍어야할 갯수와 찍은 갯수가 동일하다.
            }// if statement
                if($(this).children('input:checked').val() === 'yes'){
                    $('.ex_four div').css({'background-color':'green'})
                } else if ($(this).children('input:checked').val() === 'no'){
                    $('.ex_four div').css({'background-color':'firebrick'})
                } else return false
        })//each_div(3번씩) 
        $('.ex_four .result').text(resultNumber)
    })//click(.ex_four/assignment)
})