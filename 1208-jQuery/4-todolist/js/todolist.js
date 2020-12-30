$(function () {
  // 将本地存储中的数据渲染到页面
  render()

  // 键盘按下时存储数据
  $('#title').on('keydown', function (e) {
    if (e.key == 'Enter') {
      if ($(this).val().trim().length == 0) return alert('请输入内容')
      var obj = {
        title: $(this).val(),
        done: false
      }
      $(this).val('')
      var data = getData()
      data.push(obj)
      // 以数组的形式存储到本地内存中
      savaData(data)
      render()
    }
  })

  //   获取本地存储的数据  数组
  function getData() {
    return JSON.parse(localStorage.getItem('todolist')) || []
  }

  //   保存到本地存储
  function savaData(data) {
    return localStorage.setItem('todolist', JSON.stringify(data))
  }

  // 将本地存储的数据渲染到页面上
  function render() {
    var data = getData()
    var ul = ''
    var ol = ''
    var ulCount = 0
    var olCount = 0
    $.each(data, function (index, item) {
      if (item.done) {
        ul += `
            <li>
                <input type="checkbox" checked>
                <p>${item.title}</p>
                <a href="javascript:;" data-index="${index}"></a>
            </li>
        `
        ulCount++
      } else {
        ol += `
              <li>
                  <input type="checkbox" >
                  <p>${item.title}</p>
                  <a href="javascript:;" data-index="${index}"></a>
              </li>
        `
        olCount++
      }
    })
    $('#donelist').html(ul)
    $('#todolist').html(ol)
    $('#todocount').text(olCount)
    $('#donecount').text(ulCount)
  }

  // 删除对应的事项，li
  $('#donelist,#todolist').on('click', 'a', function () {
    if (confirm('你真的要删除吗？')) {
      // 获取本地存储数据
      var data = getData()
      // 获得要删除的对象的本地存储角标
      var index = $(this).attr('data-index')
      // 删除对应对象
      data.splice(index, 1)
      // 重新存储到本地存储，刷新本地存储
      savaData(data)
      // 重新渲染
      render()
    }
  })

  // 当选中时，变成已完成
  $('#todolist,#donelist').on('click', 'input', function () {
    // 获取对应角标
    var index = $(this).siblings('a').attr('data-index')
    // 获取数据
    var data = getData()
    // 修改数组数据
    data[index].done = $(this).prop('checked')
    // 刷新本地存储数据
    savaData(data)
    // 重新渲染
    render()
  })
})
