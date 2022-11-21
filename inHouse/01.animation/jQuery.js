$(function () {
    var scrTop
    var winHeight
    /*  변수선언! */
    function floatBanner () {
        scrTop = $(window).scrollTop()
        winHeight = $(window).height() // browser의 height값을 구하는법!
        $('.banner_rc').css({'top':scrTop + (winHeight * 0.5) - 150})// 100px 더 내려오게 하려고 + 100! && 나누기보단 곱하기를 사용!
    }
    
    floatBanner(); // 바로 시작해서!

    $(window).scroll(function () {/* window === web-browser, document = HTML DOM */
        floatBanner();
    })//scroll

    $(window).resize(function () {
        floatBanner();
    })//resize
})//document.ready