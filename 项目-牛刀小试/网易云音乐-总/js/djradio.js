// 批量导入背景图片
;(function () {
  var ul = document.querySelector('.top_list')
  var lis = ul.children
  var divs = document.querySelectorAll('.top_list li a div')
  for (var i = 0; i < lis.length; i++) {
    divs[i].style.backgroundImage = `url(../images/d_radio_list${i + 1}.jpg)`
  }
})()

//推荐节目 li.mousemove让播放按钮显示出来
;(function () {
  var lis = document.querySelectorAll('.rt_bd ul .itm')
  var playbutton = document.querySelectorAll('.itm .cvr > i')

  for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('data-index', i)
    lis[i].addEventListener('mouseenter', function () {
      var index = this.getAttribute('data-index')
      for (var j = 0; j < lis.length; j++) {
        playbutton[j].style.display = 'none'
      }
      playbutton[index].style.display = 'block'
    })

    lis[i].addEventListener('mouseleave', function () {
      var index = this.getAttribute('data-index')
      playbutton[index].style.display = 'none'
    })
  }
})()

$('.top_list a').on('click', function () {
  $(this).addClass('current').parent().siblings().find('a').removeClass('current')
  $(this).find('div').addClass('content').parents('li').siblings().find('div').removeClass('content')
  $(this).find('em').addClass('check').parents('li').siblings().find('em').removeClass('check')
})

//使用JQ修改排行榜的颜色
$('.radtop_fr .itm:gt(2) .rank em').css('color', '#999999')
$('.radtop_fr .itm:lt(3) .rank em').css('color', '#da4545')

//电梯导航
;(function () {
  var toolTop = $('.radtop').offset().top
  // console.log(toolTop)
  // console.log($(document).scrollTop())
  var flag = true
  function fn() {
    if ($(document).scrollTop() >= toolTop) {
      $('.fixedtool').fadeIn()
    } else {
      $('.fixedtool').fadeOut()
    }
  }
  fn()

  $(window).scroll(function () {
    fn()
    if (flag) {
      $('.radio_content > div').each(function (index, dom) {
        if ($(document).scrollTop() >= $(dom).offset().top) {
          $('.fixedtool li').eq(index).addClass('fixed_current').siblings().removeClass('fixed_current')
        }
      })
    }
  })

  $('.fixedtool li').click(function () {
    flag = false
    var index = $(this).index()
    $(this).addClass('fixed_current').siblings().removeClass('fixed_current')
    var fixed_currentPos = $('.radio_content > div').eq(index).offset().top
    $('html,body')
      .stop()
      .animate(
        {
          scrollTop: fixed_currentPos
        },
        function () {
          flag = true
        }
      )
  })
})()

// 13 回到顶部
$(window).on('scroll', function () {
  $(document).scrollTop() > 0 ? $('.c-back').show() : $('.c-back').hide()
})
