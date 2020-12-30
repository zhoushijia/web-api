$(function () {
  // 互斥锁,节流阀，互斥，让两个事件互不影响
  var flag = true

  // 显示与隐藏函数
  function toggleTop() {
    if ($(document).scrollTop() > $('.recommend').offset().top) {
      $('.fixedtool').fadeIn()
    } else {
      $('.fixedtool').fadeOut()
    }
  }
  // 页面不滚动刷新页面也会显示
  toggleTop()
  // 当运动到今日推荐，电梯导航显示出来；否则隐藏
  $(window).scroll(function () {
    toggleTop()
    // 当滚动到对应楼层，相应的电梯楼层高亮
    if (flag) {
      $('.floor > div').each(function (index, dom) {
        if ($(document).scrollTop() + 10 >= $(dom).offset().top) {
          $('.fixedtool li').eq(index).addClass('current').siblings('li').removeClass('current')
        }
      })
    }
  })

  // 给电梯元素注册点击事件
  $('.fixedtool li').click(function () {
    flag = false
    // 点击时高亮；排他思想
    $(this).addClass('current').siblings().removeClass('current')
    // 获得对应盒子的页面顶部坐标
    var currentPos = $('.floor > div').eq($(this).index()).offset().top
    // 通过动画效果使页面移动到相应位置
    $('html,body')
      .stop()
      .animate(
        {
          scrollTop: currentPos
        },
        // 互斥，让两个事件互不影响
        function () {
          flag = true
        }
      )
  })
})
