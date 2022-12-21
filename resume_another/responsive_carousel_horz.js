
function responsive_carousel_horz(obj,useWheel,intervalDelay, timeoutDelay) {
  var useWheel = useWheel
  var obj = obj
  var n = 1
  var change_flag = true
  var drag_flag = false
  var touch_start
  var touch_end
  var touch_move
  var drag_range
  var prevx
  var x = 0
  var dir
  var con_w
  var carousel_w
  var drag_r_limit
  var drag_l_limit
  var col_x
  var col_w
  var wrap_x
  var leng = $(obj).find(".img_container li").size()
  var delta
  var intervalID
  var timeoutID
  var intervalDelay = intervalDelay
  var timeoutDelay = timeoutDelay
  for (i = 1; i <= leng; i++) {
    $(obj).find(".img_container li").eq(i - 1).addClass("imgbox" + i + " imgbox" + (leng + i) + " imgbox" + (i - leng)).attr("data-n", i)
    $(obj).find(".indicator button").eq(i - 1).addClass("btn" + i + " btn" + (leng + i) + " btn" + (i - leng)).attr("data-n", i)
  }//for
  for (i = 1; i <= leng; i++) {
    $(obj).find(".img_container li.imgbox" + i).clone().appendTo($(obj).find(".img_container")).css({ "position": "absolute", "top": 0, "left": 100 + (i - 1) * (100 / leng) + "%" }).attr("data-n", leng + i)
  }//for
  for (i = leng; i >= 1; i--) {
    $(obj).find(".img_container li.imgbox" + i).eq(0).clone().prependTo($(obj).find(".img_container")).css({ "position": "absolute", "top": 0, "right": 100 + (leng - i) * (100 / leng) + "%" }).attr("data-n", i - leng)
  }//for
  $(obj).find("img").attr("draggable", "false")
  setTimeout(function () {
    $(obj).find(".imgbox1").addClass("active")
    $(obj).find(".btn1").addClass("active")
  }, 10)
  get_size()
  autoplay()
  function autoplay(){
    $(obj).find(".progress .bar").css("width",0)
    $(obj).find(".progress .bar").stop().animate({"width":"100%"},intervalDelay)
    if(timeoutDelay == undefined || intervalDelay == undefined){return false}
    intervalID = setInterval(function(){
      n ++
      change()
      $(obj).find(".progress .bar").css("width",0)
      $(obj).find(".progress .bar").stop().animate({"width":"100%"},intervalDelay)
    },intervalDelay)
  }//fn autoplay
  function restart_autoplay(){
    $(obj).find(".progress .bar").css("width",0)
    clearInterval(intervalID)
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function(){
      autoplay()
    },timeoutDelay)
  }//fn restart

  function get_size() {
    con_w = $(obj).find(".img_container").width()
    carousel_w = $(obj).width()
    drag_r_limit = con_w
    drag_l_limit = carousel_w - con_w * 2
  }//get_soze
  function drag_start() {
    drag_flag = true
    prevx = $(obj).find(".img_container").position().left
    x = prevx
    $(obj).find(".img_container").stop().animate()
    change_flag = true
    $(obj).find(".progress .bar").stop().animate()
    $(obj).find(".progress .bar").css("width",0)
    clearInterval(intervalID)
  }//fn
  function drag_move() {
    if (drag_flag == false) { return false }
    drag_range = touch_move - touch_start
    x = prevx + drag_range
    if (x > 0) { x = -con_w; prevx = x; touch_start = touch_move }
    if (x < drag_l_limit) { x = carousel_w - con_w; prevx = x; touch_start = touch_move }
    if (prevx < x) {
      dir = "r"
    } else if (prevx > x) {
      dir = "l"
    }
    $(obj).find(".img_container").css("left", x)
  }//fn drag
  function drag_end() {
    if (drag_flag == false) { return false }
    drag_flag = false
    $(obj).find(".img_container li").each(function () {
      col_x = $(this).offset().left
      col_w = $(this).width()
      wrap_x = $(obj).find(".col_width").offset().left
      if (col_x < wrap_x && col_x + col_w >= wrap_x) {
        n = parseInt($(this).attr("data-n"))
        if (dir == "l") {
          n++
        }
      }//if
    })//each
    if (prevx == x) { return false }
    change()
    restart_autoplay()
  }//fn
  function change() {
    $(obj).find(".img_container").stop().animate({ "left": (n - 1) * -100 + "%" }, function () {
      if (n < 1) {
        n = n + leng
      }
      if (n > leng) {
        n = n - leng //수정
      }
      $(this).css("left", (n - 1) * -100 + "%")
      change_flag = true
      console.log(n);
    })//aniamtion
    $(obj).find(".img_container li").removeClass("active")
    $(obj).find(".indicator button").removeClass("active")
    $(obj).find(".img_container .imgbox" + n).addClass("active")
    $(obj).find(".indicator .btn" + n).addClass("active")
  }//fn change
  $(window).resize(function () {
    get_size()
  })//resize
  $(obj).mousedown(function (e) {
    touch_start = e.clientX
    drag_start()
  })//mousedown
  $(document).mousemove(function (e) {
    touch_move = e.clientX
    drag_move()
  })//mousemove
  $(document).mouseup(function (e) {
    touch_end = e.clientX
    drag_end()
  })//mouseup
  $(obj).find(".img_container").bind("touchstart", function (e) {
    touch_start = e.originalEvent.changedTouches[0].clientX
    drag_start()
  })//touchstart
  $(document).bind("touchmove", function (e) {
    touch_move = e.originalEvent.changedTouches[0].clientX
    drag_move()
  })//touchmove
  $(document).bind("touchend", function (e) {
    touch_end = e.originalEvent.changedTouches[0].clientX
    drag_end()
  })//touchsend
  if(useWheel === true){
    $(obj).bind("mousewheel", function (e) {
      if (change_flag == true) { change_flag = false } else { return false }
      delta = e.originalEvent.wheelDelta / -120
      n += delta
      change()
    })//wheel
  }//if useWheel
  $(obj).find(".next").click(function(){
    if (change_flag == true) { change_flag = false } else { return false }
    n++
    change() 
    restart_autoplay()
  })//click
  $(obj).find(".prev").click(function(){
    if (change_flag == true) { change_flag = false } else { return false }
    n--
    change()
    restart_autoplay()
  })//click
  $(obj).find(".indicator button").click(function(){
    if (change_flag == true) { change_flag = false } else { return false }
    n = parseInt( $(this).attr("data-n") )
    change() 
    restart_autoplay()
  })//click
  $(obj).find(".next").mousedown(function(){
    return false
  })//click
  $(obj).find(".prev").mousedown(function(){
    return false
  })//click
  $(obj).find(".indicator button").mousedown(function(){
    return false
  })//click
}//responsive_carousel fn end