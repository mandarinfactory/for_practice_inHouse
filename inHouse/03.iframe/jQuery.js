$(document).ready(function () {
    function videoResize () {
        var imgWidth = $('.ex_three div img').innerWidth();
        var imgHeight = $('.ex_three div img').innerHeight();
        $('.ex_three div iframe').width(imgWidth);
        $('.ex_three div iframe').height(imgHeight);
    }//function
    
    $(window).load(function() {
        videoResize();
    })//모든 bineral-data(이미지등)가 다 다운 받아야(load) 출력가능!

    $(window).resize(function() {
        videoResize();
    })/* resize되면 함수실행 시키기 위해서! */
})//document.ready