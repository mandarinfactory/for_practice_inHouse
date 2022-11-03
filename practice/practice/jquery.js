$(function () {
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
            var a = 0; // 맞힌 갯수 변수 선언
            for (var i = 1; i <= 10; i++) {
                var b = parseInt($(`.ex_nine .q${i} .n1`).val())
                var c = parseInt($(`.ex_nine .q${i} .n2`).val())
                var d = parseInt($(`.ex_nine .q${i} .n3`).val()) // user가 넣은 값
                if (d === (b + c)){
                    a ++
                    $(`.ex_nine .q${i}`).css({'background-color':'green'})
                } else {
                    $(`.ex_nine .q${i}`).css({'background-color':'firebrick'})
                }//if
            }//for
            $('.ex_nine .result').text(a)
        })//click
})//call-back