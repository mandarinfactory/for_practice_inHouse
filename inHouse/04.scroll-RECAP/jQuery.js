$(function () {
    function scrollSpy () {
        var scrTop = $(window).scrollTop();
        var offstTwo = $('.section2').offset().top;
        var offstThree = $('.section3').offset().top;

        if(scrTop + 40 >= offstTwo && scrTop + 40 < offstThree){
            $('.a2').addClass('active')
        } else {
            $('.a2').removeClass('active')
        }
    }//function

    scrollSpy();

    $(window).resize(function () {
        scrollSpy();
    }).scroll(function () {
        scrollSpy();
    })//resize && scroll

})//document.ready