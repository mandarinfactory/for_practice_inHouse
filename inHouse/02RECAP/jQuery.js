$(function () {
    function scrollBox () {
        var scrTop = $(window).scrollTop();
        var box1Top = $('.box1').offset().top;
        if(scrTop >= box1Top){
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