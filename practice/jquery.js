$(function () {
    $('.ex_eight button').click(function () {
        $(this).siblings('button').removeClass('active');
        $(this).toggleClass('active')
    })
    $('.ex_nine button').click(function () {
        var boxNumber = $(`.ex_nine .box${$(this).text()}`).attr('data-bg')
        $(`.ex_nine div`).css({'background-color':'inherit'})
        $(`.ex_nine .box${$(this).text()}`).css({'background-color':boxNumber})
   })
   $('.ex_ten button').click(function () {
    $(`.ex_ten .box${$(this).text()}`).attr('data-bg')
    $(`.ex_ten .box${$(this).text()}`).toggleClass(`active${$(this).text()}`)
})
})