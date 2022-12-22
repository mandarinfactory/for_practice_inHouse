/* common.js => 필요한 function이나 그외 method를 저장하기 위해 만든 file! */
/* window infomation ------------------------------------------ */
  function winInfo () {
    window.scrY = $(window).scrollTop();
    window.scrX = $(window).scrollLeft();
    window.winH = $(window).innerHeight();
    window.winW = $(window).innerWidth(); /* 나중에 어떤 JS에서 쓰일수 있으니! 전역변수로 한다! $(window)는 아님! 그냥 window로 쓰자! */
  }//function
  
  winInfo();
  $(window).resize(function () {
    winInfo();
  }).scroll(function () {
    winInfo();
  })//resize, scroll(window-event)
