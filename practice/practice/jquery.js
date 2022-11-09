$(function () {
    for(var i = 1; i <= 5; i++){
        var randomNum = Math.ceil(Math.random() * 100);
        $('.ex_nine .q').append(`${randomNum},`);
    }//for-i
    $('.ex_nine .btn_odd').click(function j() {
        $('.ex_nine .result').empty();
        var numberArr = ($('.ex_nine .q').text()).split(',') // 1. 글자전체 가져옴, 2. ['','','']꼴로 만들어준다.
        console.log($('.ex_nine .q').text())   
        console.log(numberArr)   
        numberArr.forEach(function (v){
        var oddArr = []
            if(parseInt(v) % 2 !== 0){
            oddArr = numberArr.push(v)//map-oddArr //3. 홀수, 짝수검사를 통해 해당하는 배열을 새로 만든다!
            }//if
            })//forEach-numberArr
            console.log(oddArr);
            /* 
            1. 글자 전체를 가져온다. '3','2','5' // split
            2. 그리고 글자를 , 기준으로 쪼개고 배열로 만든다. ['3','2','5']
            3. 배열을 반복해서 홀수,짝수검사를 통해(parseInt) 해당하는 배열을 새로 만들어야한다. ['3', '5'] // map
            4. 생성된 배열의 갯수는 .length로!
            5. 생성된 배열로 반복해서 숫자를 출력한다.(여러개니까!)  
            */
        })//click(.btn_odd)
    /* ex_nine -------------------------------------------------------- */
})//call-back