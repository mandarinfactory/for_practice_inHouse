$(function () {
    function scrollBox () {
        var scrTop = $(window).scrollTop();
        if(scrTop >= 200){
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