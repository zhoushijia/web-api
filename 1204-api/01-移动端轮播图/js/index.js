window.addEventListener('load', function () {
  var focus = document.querySelector('.focus')
  var ul = focus.children[0]
  var ol = focus.children[1]
  var w = focus.offsetWidth
  //   控制图片切换图片
  var index = 0
  //   检查是否滑动
  var flag = false
  // 轮播图自动播放
  var timer = setInterval(function () {
    index++
    var tx = -index * w
    ul.style.transition = 'all 0.3s'
    ul.style.transform = `translateX(${tx}px)`
  }, 2000)

  ul.addEventListener('transitionend', function () {
    // 当index为3的时候是最后一个盒子的第一张图片
    if (index >= 3) {
      // 以下代码是为了跳过第二个盒子的第一张图片
      index = 0
      ul.style.transition = 'none'
      var tx = 0
      ul.style.transform = `translateX(${tx}px)`
    } else if (index < 0) {
      index = 2
      ul.style.transition = 'none'
      var tx = -index * w
      ul.style.transform = `translateX(${tx}px)`
    }
    ol.querySelector('.current').classList.remove('current')
    ol.children[index].classList.add('current')
  })

  //   手指滑动控制得到上一张或下一张图片
  var startX = 0
  var moveX = 0
  ul.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].pageX
    clearInterval(timer)
    // flag = false
  })
  ul.addEventListener('touchmove', function (e) {
    moveX = e.targetTouches[0].pageX - startX
    var tx = -index * w + moveX
    // 手指滑动时没有动画的过渡效果
    ul.style.transition = 'none'
    ul.style.transform = `translateX(${tx}px)`
    e.preventDefault()
    flag = true
  })

  ul.addEventListener('touchend', function (e) {
    if (flag) {
      // 判断手指滑动距离, 判断是否需要播放下一张或上一张
      if (Math.abs(moveX) > 50) {
        if (moveX > 0) {
          // 大于零则播放上一张 index来控制距离
          index--
        } else {
          // 大于零则播放下一张 index来控制距离
          index++
        }
        var tx = -index * w
        ul.style.transition = 'all .3s'
        ul.style.transform = `translateX(${tx}px)`
      } else {
        // 回弹
        var tx = -index * w
        ul.style.transition = 'all .1s'
        ul.style.transform = `translateX(${tx}px)`
      }
      flag = false
    }

    // 离开时恢复定时器功能
    // 在开启之前需要清除,防止加快的bug
    clearInterval(timer)
    timer = setInterval(function () {
      index++
      var tx = -index * w
      ul.style.transition = 'all .3s'
      ul.style.transform = `translateX(${tx}px)`
    }, 2000)
  })

  var goBack = document.querySelector('.goBack')
  var navTop = document.querySelector('nav').offsetTop
  window.addEventListener('scroll', function () {
    var t = window.pageYOffset
    if (t > navTop) {
      goBack.style.display = 'block'
    } else {
      goBack.style.display = 'none'
    }
  })
  goBack.addEventListener('click', function () {
    window.scroll(0, 0)
  })
})
