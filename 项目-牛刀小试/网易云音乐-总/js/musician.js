$(function () {
  //   退出登录模块
  $('#user_name,.log_out').mouseenter(function () {
    $('.log_out').show()
  })
  $('#user_name,.log_out').mouseleave(function () {
    $('.log_out').hide()
  })
  // //     音乐人 鼠标经过模块
  // $(document).scrollTop(100)
  $(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $('.musician_content_text > h1').stop().fadeIn(300)
    } else {
      $('.musician_content_text > h1').fadeOut(200)
    }
    if ($(document).scrollTop() > 1100) {
      $('.music_cause > h1').stop().fadeIn(300)
    } else {
      $('.music_cause > h1').stop().fadeOut(200)
    }
    if ($(document).scrollTop() > 1400) {
      $('.music_distribution > h1 , .music_distribution > p').stop().fadeIn(300)
    } else {
      $('.music_distribution > h1 , .music_distribution > p').stop().fadeOut(200)
    }
    if ($(document).scrollTop() > 1600) {
      $('.music_details > ul').fadeIn(500)
    } else {
      $('.music_details > ul').fadeOut(200)
    }
    if ($(document).scrollTop() > 2000) {
      $('.bgc1').slideDown(500)
    } else {
      $('.bgc1').fadeOut(200)
    }
    if ($(document).scrollTop() > 2700) {
      $('.gain_revenue_title').fadeIn(500)
    } else {
      $('.gain_revenue_title').fadeOut(200)
    }
    if ($(document).scrollTop() > 2900) {
      $('.gain_revenue_content > ul').fadeIn(500)
    } else {
      $('.gain_revenue_content > ul').fadeOut(200)
    }
    if ($(document).scrollTop() > 3200) {
      $('.gain_revenue_img').slideDown(500)
    } else {
      $('.gain_revenue_img').fadeOut(200)
    }
    if ($(document).scrollTop() > 3950) {
      $('.innovative_function_title > h1').stop().fadeIn(300)
    } else {
      $('.innovative_function_title > h1').stop().fadeOut(200)
    }
    if ($(document).scrollTop() > 4500) {
      $('.innovative_function_content').stop().fadeIn(300)
    } else {
      $('.innovative_function_content').stop().fadeOut(200)
    }
    console.log($(document).scrollTop())
  })
  $('.img_seover').on('mouseenter', function () {
    $(this).siblings('.img_details').stop().fadeIn(200)
  })
  $('.ul_top > li').on('mouseleave', function () {
    $('.ul_top > li .img_details').stop().fadeOut(200)
  })
  $('.ul_bottom > li').on('mouseleave', function () {
    $('.ul_bottom > li .img_details').stop().fadeOut(200)
  })

  //    扶持计划选项卡 模块
  $('.tab > li').click(function () {
    $(this).addClass('current').siblings().removeClass('current')
    $(this).find('.qh').css('backgroundPosition', 'center left')
    $(this).siblings('li').find('.qh').css('backgroundPosition', 'center right')
    $(this).find('.subscript').css('display', 'block')
    $(this).siblings('li').find('.subscript').css('display', 'none')
    $(this).find('.qh').css('color', 'red')
    $(this).siblings('li').find('.qh').css('color', '#656565')
    var index = $(this).index()
    arr = index
    $('.tab_content > .nr').eq(index).stop().fadeIn(1000).show().siblings().stop().fadeOut(1000).hide()
  })
  var lis = document.querySelectorAll('.tab li')
  var arr = 0
  setInterval(function () {
    arr++
    if (arr >= lis.length) arr = 0
    $('.tab > li')[arr].click()
  }, 3000)
})
