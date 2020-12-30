$(function () {
  // 当运动到今日推荐，电梯导航显示出来
  $(window).scroll(function () {
    if ($(document).scrollTop() > $('.recommend').offset().top) {
      $('.fixedtool').fadeIn()
    } else {
      $('.fixedtool').fadeOut()
    }
  })
})
