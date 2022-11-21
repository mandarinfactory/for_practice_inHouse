$(function () {
    function scrollBox () {
        var scrTop = $(window).scrollTop();
        var winHeight = $(window).innerHeight();
        var boxHeight = $('.box1').innerHeight();
        var box1Top = $('.box1').offset().top;
        if(scrTop >= box1Top - winHeight * 0.25 - boxHeight * 0.5){
            $('.box1').addClass('active')
        } else {
            $('.box1').removeClass('active')
        }//if-else
    }//function

    scrollBox();
    $(window).scroll(function () {
        scrollBox();
    }).resize(function () {
        scrollBox();
    })//scroll && resize

})//document.ready