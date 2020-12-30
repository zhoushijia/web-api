window.onload = function () {
  // 歌手侧边栏的交互效果
  var as = document.querySelectorAll('.blk ul a')
  for (var i = 0; i < as.length; i++) {
    as[i].setAttribute('data-index', i)
    as[i].onclick = function () {
      for (var j = 0; j < as.length; j++) as[j].className = ''
      this.className = 'current'
    }
  }

  //主体的高赋值给左侧边栏
  var singerHeightR = document.querySelector('.bd_right')
  var singerHeightL = document.querySelector('.bd_left')
  var leftHeight = singerHeightR.offsetHeight
  singerHeightL.style.height = leftHeight + 'px'

  // 13 回到顶部
  $(window).on('scroll', function () {
    $(document).scrollTop() > 0 ? $('.c-back').show() : $('.c-back').hide()
  })
}
