$(function () {
  $('.hot_cover').on('mouseenter', function () {
    $(this).find('.icon_play').show()
  })

  $('.hot_cover').on('mouseleave', function () {
    $(this).find('.icon_play').hide()
  })

  $('.page > a').on('click', function () {
    $(this).addClass('current').siblings().removeClass('current')
  })

  // 13 回到顶部
  $(window).on('scroll', function () {
    $(document).scrollTop() > 0 ? $('.c-back').show() : $('.c-back').hide()
  })
  ;(function () {
    // 获取1-15的按钮
    var as = document.querySelectorAll('.page a')
    var num = 0
    var circle = 0
    // 左箭头点击事件
    $('.left').on('click', function () {
      // if (num == 0) {
      // $('.left a').addClass('active')
      // return false
      // }
      // console.log($(as).eq(num))
      // var index = $(as).index()

      if (num == 0) {
        num = 0
        return false
      }
      num--
      // console.log(num)
      // console.log(num)

      circle > 0 ? circle-- : (circle = 0)

      for (var i = as.length - 1; i >= 0; i--) {
        as[i].className = ''
        // if ($(as).eq(i).val() == 1) {
        //   $('.left').attr('disabled', true)
        // }
      }
      as[circle].className = 'current'

      if (circle == 0) {
        $('.pageOne').show().siblings('.pageTwo').hide()
        $('.left a').addClass('active')
        return false
      } else if (circle == 1) {
        $('.left a').removeClass('active')
        $('.pageTwo').show().siblings('.pageOne').hide()
      } else {
        $('.left a').removeClass('active')
        $('.right a').removeClass('active')
      }
    })

    // 右箭头点击事件
    $('.right').on('click', function () {
      // if (num == as.length - 1) {
      // num = 0
      // $('.right a').addClass('active')
      // return false
      // }
      // console.log(num)
      if (num == as.length - 1) {
        num = as.length - 1
        return false
      }
      num++
      // console.log(num)

      if (num !== 0) {
        $('.left a').removeClass('active')
      }

      circle < as.length - 1 ? circle++ : circle

      for (var i = 0; i < as.length; i++) {
        as[i].className = ''
      }
      as[circle].className = 'current'

      if (circle == as.length - 1) {
        $('.right a').addClass('active')
        return false
      } else if (circle == 1) {
        $('.pageTwo').show().siblings('.pageOne').hide()
      } else {
        $('.left a').removeClass('active')
        $('.right a').removeClass('active')
      }
    })

    for (var i = 0; i < as.length; i++) {
      as[i].setAttribute('data-index', i)
      as[i].addEventListener('click', function () {
        for (var j = 0; j < as.length; j++) {
          as[j].className = ''
        }
        this.className = 'current'
        var index = this.getAttribute('data-index')
        if (index == 0) {
          $('.pageOne').show().siblings('.pageTwo').hide()
          $('.left a').addClass('active')
          $('.right a').removeClass('active')
        } else if (index == 1) {
          $('.left a, .right a').removeClass('active')
          $('.pageTwo').show().siblings('.pageOne').hide()
        } else if (index == as.length - 1) {
          $('.right a').addClass('active')
          $('.left a').removeClass('active')
        } else {
          $('.left a, .right a').removeClass('active')
        }

        num = index
        circle = index
      })
    }
  })()
})
