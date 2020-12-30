window.addEventListener('load', function () {
  // 放大镜
  var goods_img = document.querySelector('.goods_img')
  // console.log(goods_img)
  var box = document.querySelector('.mouseBox_left')
  var boxn = document.querySelector('.mouseBox_right')
  var img1 = document.querySelector('.goods_img > img')
  var dtp = document.querySelector('.dtp')
  //  图片切换
  var cut = document.querySelectorAll('.goods_img_bottom > li')
  for (var i = 0; i < cut.length; i++) {
    cut[i].index = i + 1
    cut[i].onmouseenter = function () {
      this.parentNode.querySelector('.current').classList.remove('current')
      this.classList.add('current')
      img1.src = '../images/c-brand5-' + this.index + '.jpg'
      dtp.src = '../images/c-brand5-b' + this.index + '.jpg'
    }
  }
  goods_img.addEventListener('mouseover', function () {
    box.style.display = 'block'
    boxn.style.display = 'block'
  })
  goods_img.addEventListener('mouseout', function () {
    box.style.display = 'none'
    boxn.style.display = 'none'
  })
  goods_img.addEventListener('mousemove', function (e) {
    var x = e.pageX - this.offsetLeft
    var y = e.pageY - this.offsetTop

    var boxX = x - box.offsetWidth / 2
    var boxY = y - box.offsetHeight / 2

    var boxMaxX = goods_img.offsetWidth - box.offsetWidth
    var boxMaxY = goods_img.offsetHeight - box.offsetHeight

    if (boxX <= 0) {
      boxX = 0
    } else if (boxX >= boxMaxX) {
      boxX = boxMaxX
    }
    if (boxY <= 0) {
      boxY = 0
    } else if (boxY >= boxMaxY) {
      boxY = boxMaxY
    }
    box.style.left = boxX + 'px'
    box.style.top = boxY + 'px'

    var dtpMaxX = boxn.offsetWidth - dtp.offsetWidth
    var dtpMaxY = boxn.offsetHeight - dtp.offsetHeight

    var dtpMovX = (boxX * dtpMaxX) / boxMaxX
    var dtpMovY = (boxY * dtpMaxY) / boxMaxY

    dtp.style.left = dtpMovX + 'px'
    dtp.style.top = dtpMovY + 'px'
  })
  //加减数量
  var increment = document.querySelector('.plus')
  var decrement = document.querySelector('.reduce')

  increment.onclick = function () {
    var n = this.parentNode.querySelector('input').value
    n++
    this.parentNode.querySelector('input').value = n
    decrement.style.cursor = 'pointer'
  }
  decrement.onclick = function () {
    var n = this.parentNode.querySelector('input').value
    n--
    if (n < 1) {
      this.style.cursor = 'not-allowed'
      return
    }
    this.parentNode.querySelector('input').value = n
  }
  // 选择商品样式
  var pol = document.querySelector('.goods_color1')
  var por = document.querySelector('.goods_color2')
  pol.onclick = function () {
    this.classList.add('currentColor')
    por.classList.remove('currentColor')
    img1.src = '../images/c-brand5-3.jpg'
    dtp.src = '../images/c-brand5-b3.jpg'
  }
  por.onclick = function () {
    this.classList.add('currentColor')
    pol.classList.remove('currentColor')
    img1.src = '../images/c-brand5-2.jpg'
    dtp.src = '../images/c-brand5-b2.jpg'
  }

  // 商品信息存入本地存储
  //   获得本地存储中的comments数据
  function getProduct() {
    return JSON.parse(localStorage.getItem('product')) || []
  }
  //  将comments数据存储到本地
  function saveProduct(data) {
    localStorage.setItem('product', JSON.stringify(data))
  }
  // 点击加入购物车存储数据到本地
  $('.goods_option .left,.goods_option .right').on('click', function () {
    var uname = $('.goods_explain h3').text()
    var uprice = $('.goods_price em').text().substr(1)
    var unum = $('.goods_num .itxt').val()
    if ($('.goods_color1').hasClass('currentColor')) {
      utype = $('.goods_color1').text()
    } else {
      utype = $('.goods_color2').text()
    }
    uimg = $('.goods_img > img').prop('src')
    var data = getProduct()
    var obj = {
      // id用来判断该商品是否被重复加入购物车
      id: 4,
      img: uimg,
      name: uname,
      type: utype,
      num: unum,
      price: uprice
    }
    var count = +unum
    // flag用来判断该商品是否需要更新或者直接添加到后台
    var flag = true
    // 如果有相同商品，则更新
    $.each(data, function (i, item) {
      if (obj.id == item.id) {
        data[i] = obj
        flag = false
        count += +item.num
      }
    })
    // 否则，直接加入后台
    if (flag) data.push(obj)
    saveProduct(data)
    $('.shop span').text(count)
    location.href = '../pages/car.html'
  })
})
