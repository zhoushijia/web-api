$(function () {
  // 将详情页商品渲染到页面
  if (getProduct().length > 0) {
    renderProduct()
  }
  // 计算单价
  $('.n-cart .cnt').each(function (index, dom) {
    $(this)
      .find('.c-price')
      .text('¥' + $(this).find('.c-num').val() * $(this).find('.price em').text())
  })
  // 从本地获取数据
  function getProduct() {
    return JSON.parse(localStorage.getItem('product')) || []
  }
  //  将数据存储到本地
  function saveProduct(data) {
    localStorage.setItem('product', JSON.stringify(data))
  }
  //将本地数据渲染到页面
  function renderProduct() {
    $('.brands').show().siblings('.empty').hide()
    var str = `
                <!-- 满减 -->
                <li class="clearfix s-fc4 first">
                  <div class="f-fl product">全部商品&nbsp;(&nbsp;0&nbsp;)&nbsp;</div>
                  <a href="./shopping.html">
                    <div class="f-fr f-mgr20">
                      <div class="f-fl icon"><i></i></div>
                      <div class="f-fl txt s-fc333">全场满<em class="s-fcTheme">¥119</em>免运费(还差¥119)&nbsp;&nbsp; 去凑单&gt;</div>
                    </div>
                  </a>
                </li>
    `
    var data = getProduct()
    $.each(data, function (index, item) {
      str += `
      <li class="clearfix">
      <div class="check f-fl">
        <input type="checkbox" name="" id="" class="j-checkbox checkbox" />
      </div>
      <div class="cnt f-fl">
        <div class="coverwrap f-fl">
          <div class="cover f-bd2">
            <!-- item.id+1 表示跳转的对应商品 相当于身份牌 -->
            <a target="_blank" href=${'../pages/shopping-brand' + (item.id + 1) + '.html'}>
              <img src=${item.img} />
            </a>
          </div>
        </div>
        <div class="msg f-fl">
          <a target="_blank" href=${'../pages/shopping-brand' + (item.id + 1) + '.html'}>
            <p class="tit f-thide">${item.name}</p>
          </a>
          <p class="sku s-fc4 f-thide">${item.type}</p>
        </div>

        <div class="price f-fl f-tc">¥<em>${item.price}</em></div>

        <div class="ctrl f-fl f-pr f-tc">
          <div class="u-counter f-fl number">
            <a data-action="down" href="javascript:;" class="btn btn-dis j-x down">
              <i class="u-icn u-icn-27"></i>
            </a>
            <span class="tot"> <input type="text" class="c-num text f-fs1 j-x" value=${item.num} /> </span>
            <a data-action="plus" href="javascript:;" class="btn j-x plus"><i class="u-icn u-icn-28"></i></a>
          </div>
        </div>
        <div class="price line f-fl f-tc c-price"></div>
        <div class="delete f-fl"></div>
      </div>
    </li>
      `
    })
    str += `
    <!-- 结算栏 -->
    <li class="bottom" id="bottom">
      <div class="clearfix s-fc4">
        <div class="check f-fl">
          <input type="checkbox" name="" id="" class="checkall checkbox" />
        </div>
        <div class="f-fl">
          <div class="coverwrap f-fl s-fc333">全选</div>
          <div class="product f-fl">已选择 <em class="s-fcTheme amount-sum">0</em> 件商品</div>
        </div>
        <div class="z-dis f-fr jiesuan">结算</div>
        <div class="f-fr">
          <span class="s-fc4 yunfei"> 差119元免运费 &nbsp;|&nbsp; </span>
          <span class="s-fc1">合计&nbsp;:&nbsp;</span>
          <span class="f-fs20 s-fcTheme"> ¥<em class="price-sum">0.00</em> </span>
        </div>
      </div>
    </li> 
    `
    $('.brands ul').html(str)
  }

  // 头部购物车商品数量
  carNum()
  function carNum() {
    var amount = 0
    $('.j-checkbox').each(function (index, dom) {
      amount += +$(dom).parent().siblings('.cnt').children('.ctrl').find('.c-num').val()
    })
    $('.head .shop span').text(amount)
    localStorage.setItem('amount', amount)
  }
  function jieSuan() {
    // 只要有勾选，结算栏高亮
    $('.j-checkbox:checked').length > 0 ? $('.jiesuan').addClass('paybtn') : $('.jiesuan').removeClass('paybtn')
  }
  // 全选功能
  $('.n-cart').on('change', '.checkall', function () {
    $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'))
    jieSuan()
    getSum()
  })

  // 单选
  $('.n-cart').on('change', '.j-checkbox', function () {
    // jQuery中的:checked选择器
    $('.checkall').prop('checked', $('.j-checkbox:checked').length === $('.j-checkbox').length)
    jieSuan()
    getSum()
  })

  // 求每种商品的总价
  function sum(obj, n) {
    var p = +$(obj).parents('.ctrl').siblings('.price').children('em').html()
    var count = p * n
    $(obj)
      .parents('.ctrl')
      .siblings('.c-price')
      .html(`¥${count.toFixed(2)}`)
  }
  //   结算栏总价
  function getSum() {
    var count = 0
    var money = 0
    // 被选中的商品计算总件数和价格
    $('.j-checkbox:checked').each(function (index, dom) {
      count += +$(dom).parent().siblings('.cnt').children('.ctrl').find('.c-num').val()
      money += +$(dom).parent().siblings('.cnt').children('.c-price').text().substr(1)
    })
    $('.amount-sum').text(count)
    $('.first .product').text(`全部商品 ( ${count} ) `)
    $('.price-sum').text(money.toFixed(2))
    // 总额大于119 免运费
    $('.yunfei').text(money >= 119 ? '已享受免运费 | ' : '差119元免运费 | ')
    $('.first a .txt').html(money >= 119 ? '全场满<em class="s-fcTheme">¥119</em>免运费' : '全场满<em class="s-fcTheme">¥119</em>免运费(还差¥119)&nbsp;&nbsp; 去凑单&gt;')
  }
  // 增+
  $('.n-cart').on('click', '.plus', function () {
    var n = +$(this).siblings('.tot').children('.c-num').val()
    n++
    $(this).siblings('.tot').children('.c-num').val(n)
    sum(this, n)
    getSum()
    carNum()
  })

  // 减
  $('.n-cart').on('click', '.down', function () {
    var n = +$(this).siblings('.tot').children('.c-num').val()
    if (n <= 1) return false
    n--
    $(this).siblings('.tot').children('.c-num').val(n)
    sum(this, n)
    getSum()
    carNum()
  })

  // 手动修改数量
  $('.n-cart').on('change', '.c-num', function () {
    if ($(this).val() <= 0) $(this).val(1)
    var n = $(this).val()
    sum(this, n)
    getSum()
    carNum()
  })
  //   商品删除
  $('.n-cart').on('click', '.delete', function () {
    if (confirm('确定要删除商品吗？')) $(this).parents('li').remove()
    if ($('.brands .j-checkbox').length == 0) {
      $('.checkall').prop('checked', false)
      $('.brands').hide().siblings('.empty').show()
    }
    getSum()
    carNum()
  })
})
