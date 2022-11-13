$(function () {
    /* ex_one, two --------------------------------------------------------------------------- */
    // ${}가 아닌 parent, siblings, children인 node를 이용해서 function을 만들어본다! ${}로 많이쓰긴한다.
    function searchNumber (numX) {
        var a = 0; /*  클릭할때마다 점수가 변하면 안되니까 click-event 안에서 변수선언 ! 
        each-event안에서 하면 점수가 늘지를 않는다! 0 <=> 1 왔다갔다함. */
        var error =false; // for validation
        numX.parent().siblings('div').each(function () {
            var divNum = $(this).attr('data-ans')
            var inputNum = $(this).children('input:checked').val()
            if(inputNum === undefined){ // validation if statement => 아래 if(error){}로 연결된다.
                error = true;
                /*  return false; */ // 여기서 false를 return하면 false한 시점에서 function은 멈춘다.
            }
            if(divNum === inputNum) {
                a++;
            }
        })//each
        if(error){
            alert('모든 문제를 체크하고 확인해주시기 바랍니다.')
            return false;
            /* return -으로 하면 정확히 어떤 값을 return하는건지 알 수 없기때문에, 
            정확하게 return false라고 명시해주는게 좋다.
            만약, return으로 해놓으면 null값을 반환한다. */
        }// error값이 true인경우의 if
        numX.parent().siblings('.result').text(a); //한번만 나오면 되니까! each-event밖에서!
    }//function - searchNumber
    function eraseNumber (numY) {
        /* $('.ex_one input').attr('checked', false) => 이것도 되지만, 현재는 prop을 권장! */
        numY.parent().siblings('div').children('input').prop('checked', false)
        numY.parent().siblings('.result').text('그 결과는..?')
    }//function - earseNumber
    $('.ex_one .button_result, .ex_two .button_result').click(function () {
        searchNumber($(this))
    })//click(.button_result / ex_one)
    $('.ex_one .button_reset, .ex_two .button_reset').click(function () {
        eraseNumber($(this))
    })//click(.button_reset / ex_two)
    /* ex_three --------------------------------------------------------------------------- */
    $('.ex_three button').click(function () {
        var clickCnt = parseInt($(this).val()) //정답갯수(string => number화하고! 비교해야하니까!)
        var checkCnt = 0; // check한 갯수를 증감연산한 변수, each에서 선언하면 숫자가 계속 변하니까 click-event에서!
        $('.ex_three input').each(function () {
            if($(this).prop('checked') && $(this).val() === 'ok'){ // 'ok'이면서 checked가 되어있다면
                checkCnt ++; // checkCnt + 1
            }
            if($(this).prop('checked') && $(this).val() === 'no'){
                checkCnt --;
                return false;
            }
        })//each
        if(clickCnt === checkCnt ){
            $('.ex_three .result').text('정답!!!!!!!!')
        } else {
            $('.ex_three .result').text('오답ㅠㅠㅠㅠㅠ')
        }
    })//click(.ex_three)
    /* ex_four --------------------------------------------------------------------------- */
    $('.ex_four button').click(function () {
        var resultNumber = 0; // 점수 증가할 변수
        $('.ex_four div').each(function () {
            var number = parseInt($(this).attr('data-cnt'))
            var inputNumber = 0; // 정답체크 갯수 확인에 사용할 변수
            $(this).children('input').each(function () {
                if($(this).prop('checked') && $(this).val() === 'yes'){
                    inputNumber ++;
                } // correct(if)
                if($(this).prop('checked') && $(this).val() === 'no'){
                    inputNumber --;
                    return false
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
})//call-back function
