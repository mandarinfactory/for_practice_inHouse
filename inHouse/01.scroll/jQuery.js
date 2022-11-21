$(function () {
    var scrTop
    var winHeight
    /*  변수선언! */
    function floatBanner () {
        scrTop = $(window).scrollTop()
        winHeight = $(window).height() // browser의 height값을 구하는법!
        $('.banner_lt').css({'top':scrTop})
        $('.banner_lc').css({'top':scrTop + winHeight * 0.5 - 100})
        $('.banner_lb').css({'top':scrTop + winHeight - 200})
        $('.banner_ct').css({'top':scrTop})
        $('.banner_cc').css({'top':scrTop + winHeight * 0.5 - 100})
        $('.banner_cb').css({'top':scrTop + winHeight - 200})
        $('.banner_rt').css({'top':scrTop})
        $('.banner_rc').css({'top':scrTop + winHeight * 0.5 - 100})// 100px 더 내려오게 하려고 + 100! && 나누기보단 곱하기를 사용!
        $('.banner_rb').css({'top':scrTop + winHeight - 200})
    }
    
    floatBanner(); // 바로 시작해서!

    $(window).scroll(function () {/* window === web-browser, document = HTML DOM */
        floatBanner();
    }).resize(function () {
        floatBanner();
    })//scroll && resize
})//document.ready