$(function () {
  // 被选择的高亮
  function toggleCheck() {
    // 将所有的高亮去除
    $('.j-checkbox').parents('.cart-item').removeClass('check-cart-item')
    // 被选中的高亮
    $('.j-checkbox:checked').parents('.cart-item').addClass('check-cart-item')
  }

  // 全选
  $('.checkall').change(function () {
    $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'))
    toggleCheck()
    getSum()
  })

  // 单选
  $('.j-checkbox').change(function () {
    // jQuery中的:checked选择器
    $('.checkall').prop('checked', $('.j-checkbox:checked').length === $('.j-checkbox').length)
    toggleCheck()
    getSum()
  })

  // 求每种商品的总价
  function sum(obj, n) {
    var p = $(obj).parents('.p-num').siblings('.p-price').html().substr(1)
    var count = p * n
    $(obj)
      .parents('.p-num')
      .siblings('.p-sum')
      .html(`￥${count.toFixed(2)}`)
  }
  // 增+
  $('.increment').click(function () {
    var n = +$(this).siblings('.itxt').val()
    n++
    $(this).siblings('.itxt').val(n)
    sum(this, n)
    getSum()
  })
  // 减
  $('.decrement').click(function () {
    var n = +$(this).siblings('.itxt').val()
    if (n <= 1) return false
    n--
    $(this).siblings('.itxt').val(n)
    sum(this, n)
    getSum()
  })
  // 手动修改
  $('.itxt').change(function () {
    var n = $(this).val()
    sum(this, n)
    getSum()
  })

  function getSum() {
    var count = 0
    var money = 0
    // 被选中的商品计算总件数和价格
    $('.j-checkbox:checked').each(function (index, dom) {
      count += +$(dom).parent().siblings('.p-num').find('.itxt').val()
      money += +$(dom).parent().siblings('.p-sum').text().substr(1)
    })
    $('.amount-sum em').text(count)
    $('.price-sum em').text('￥' + money.toFixed(2))
  }

  // 删除单件商品
  $('.p-action a').click(function () {
    if (confirm('确定要删除商品吗？')) $(this).parents('.cart-item').remove()
    if ($('.cart-item').length == 0) $('.checkall').prop('checked', false)
    getSum()
  })
  // 删除选中商品
  $('.remove-batch').click(function () {
    if (confirm('确定要删除商品吗？')) $('.j-checkbox:checked').parents('.cart-item').remove()
    if ($('.cart-item').length == 0) $('.checkall').prop('checked', false)
    getSum()
  })
  // 清空购物车
  $('.clear-all').click(function () {
    if (confirm('确定要删除商品吗？')) $('.cart-item').remove()
    if ($('.cart-item').length == 0) $('.checkall').prop('checked', false)
    getSum()
  })
})
