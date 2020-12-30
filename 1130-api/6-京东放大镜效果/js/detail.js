window.addEventListener('load', function () {
  var preview_img = document.querySelector('.preview_img')
  // console.log(preview_img)
  var mask = document.querySelector('.mask')
  var big = document.querySelector('.big')

  preview_img.addEventListener('mouseover', function () {
    mask.style.display = 'block'
    big.style.display = 'block'
  })
  preview_img.addEventListener('mouseout', function () {
    mask.style.display = 'none'
    big.style.display = 'none'
  })
  preview_img.addEventListener('mousemove', function (e) {
    // this.style.overflow = 'hidden'
    var maskX = e.pageX - this.offsetLeft - mask.offsetWidth / 2
    var maskY = e.pageY - this.offsetTop - mask.offsetHeight / 2
    // 下面的代码用来限制mask小盒子的移动范围，关键点
    if (maskX < 0) {
      maskX = 0
    }
    if (maskX > 100) {
      maskX = preview_img.offsetWidth - mask.offsetWidth
    }
    if (maskY < 0) {
      maskY = 0
    }
    if (maskY > 100) {
      maskY = preview_img.offsetHeight - mask.offsetHeight
    }
    mask.style.left = maskX + 'px'
    mask.style.top = maskY + 'px'
    var bigImg = document.querySelector('.bigImg')
    var deltaX = (maskX * (bigImg.offsetWidth - big.offsetWidth)) / (preview_img.offsetWidth - mask.offsetWidth)
    var deltaY = (maskY * (bigImg.offsetWidth - big.offsetWidth)) / (preview_img.offsetWidth - mask.offsetWidth)
    bigImg.style.left = -deltaX + 'px'
    bigImg.style.top = -deltaY + 'px'
  })
})
