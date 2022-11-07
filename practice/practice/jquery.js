$(function () {
    var checkAnNum = [
        [2, 3], //chk2, chk3 < q1
        [1] //chk1 < q2
    ]// checkAnNum (for - i) => 정답의 갯수는 j.length
    $('.ex_five button').click(function () {
            var point = 0;
            var checkCnt = 0;
            for (var j = 0; j < checkAnNum.length; j++){
            if ($(`.ex_five .q1 .chk${checkAnNum[0][0]}`).prop('checked')) {
                    checkCnt++
                }//chk2
                if ($(`.ex_five .q1 .chk${checkAnNum[0][1]}`).prop('checked')) {
                    checkCnt++
                }//chk3, checkCnt = 2
                console.log(checkCnt)
                if ($(`.ex_five .q2 .chk${checkAnNum[1][0]}`).prop('checked')) {
                    checkCnt++
                }//chk1
            }//for-j
            if(checkCnt == checkAnNum[0].length){
                point++
            }

            if(checkCnt == checkAnNum[1].length){
                point++
            }
        console.log(point)
        console.log(checkAnNum[0].length, checkAnNum[1].length)    
        console.log(checkCnt)
        })//click
})//call-back