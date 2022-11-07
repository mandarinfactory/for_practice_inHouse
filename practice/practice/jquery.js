$(function () {
    var checkAnNum = [
        [2, 3], //chk2, chk3 < q1
        [1] //chk1 < q2
    ]// checkAnNum (for - i) => 정답의 갯수는 j.length
    $('.ex_five button').click(function () {
        /* if ($(`.ex_five .q1 .chk${checkAnNum[0][0]}`).prop('checked')) {
            checkCnt++
        }//chk2, checkCnt = 1
        console.log(checkCnt)
        if ($(`.ex_five .q1 .chk${checkAnNum[0][1]}`).prop('checked')) {
            checkCnt++
        }//chk3, checkCnt = 2
        console.log(checkCnt)
        if(checkCnt === checkAnNum[0].length){
                point++
            }
            console.log(point)
            if ($(`.ex_five .q2 .chk${checkAnNum[1][0]}`).prop('checked')) {
                checkCnt++
            }//chk1, checkCnt = 3
            console.log(checkCnt)
            if(checkCnt === checkAnNum[1].length){
                point++
            } */
        var point = 0;
        var checkCnt = 0;
        for(var k = 1; k <= 2; k++){
        for(var i = 0; i < checkAnNum.length; i++){
        for(var j = 0; j < checkAnNum[i].length; j++){
            if ($(`.ex_five .q${k} .chk${checkAnNum[i][j]}`).prop('checked')) {
                checkCnt++
                    }//if 
                }//for-j
                if(checkCnt === checkAnNum[i].length) point++ //if
            }//for-i
            $('.ex_five .result').text(point)
        }//for-k
        })//click
})//call-back