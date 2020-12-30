var songDatas = [
  { uname: '伴虎', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '04:31', singer: '许嵩', album: '梦游计' },
  { uname: 'We Are The World (Demo)', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '05:20', singer: 'Michael Jackson', album: 'The Ultimate Collection' },
  { uname: 'Fade', des: ``, mv: ``, time: '04:24', singer: 'Alan Walker', album: 'Fade' },
  { uname: 'Little Do You Know', des: ``, mv: ``, time: '02:48', singer: 'Campsite Dream', album: 'Little Do You Know' },
  { uname: 'Grand Blue', des: ` - (TV动画《碧蓝之海》片头曲 ；TVアニメ『ぐらんぶる』オープニングテーマ)`, mv: ``, time: '05:13', singer: '湘南乃風', album: '湘南乃風 〜一五一会〜' },
  { uname: '絆', des: ``, mv: ``, time: '04:30', singer: 'miu-clips', album: 'Rhythm of My Heart' },
  { uname: 'Over That', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '03:25', singer: 'Emily Vaughn', album: 'Over That' },
  { uname: '春意红包', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '04:44', singer: '三无MarBlue/祖娅纳惜/泠鸢yousa/洛萱/不才/小缘', album: '春意红包 - EP' },
  { uname: '南方姑娘', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '05:32', singer: '赵雷', album: '赵小雷' },
  { uname: '趁早', des: ``, mv: ``, time: '05:00', singer: '张宇', album: '一声所爱 大地飞歌 第十一期' },
  { uname: '会读书', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '03:31', singer: '林俊杰', album: '乐行者' },
  { uname: '说散就散', des: ` - (电影《前任3：再见前任》主题曲)`, mv: ``, time: '04:02', singer: '袁娅维', album: '说散就散' },
  { uname: '红昭愿', des: ``, mv: ``, time: '02:53', singer: '音阙诗听', album: '红昭愿' },
  { uname: '远走高飞', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '04:01', singer: '金志文', album: 'Hello 1' },
  { uname: 'mede:mede', des: ``, mv: ``, time: '03:35', singer: 'Reol', album: '極彩色' },
  { uname: 'アイロニ', des: ``, mv: ``, time: '04:04', singer: 'majiko', album: 'Contrast' },
  { uname: 'aLIEz', des: ` - (TV动画《ALDNOAH.ZERO》ED2 )`, mv: ``, time: '04:28', singer: 'mizuki (瑞葵)/SawanoHiroyuki[nZk]', album: 'A/Z | aLIEz' },
  { uname: '没那么简单', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '05:08', singer: '黄小琥', album: '简单/不简单' },
  { uname: '你不是真正的快乐 (Live)', des: ``, mv: ``, time: '05:20', singer: 'G.E.M.邓紫棋', album: '我是歌手第二季 半决赛' },
  { uname: '意外', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '04:47', singer: '薛之谦', album: '意外' },
  { uname: '暧昧', des: ``, mv: `<span class="mv" title="播放mv"></span>`, time: '05:12', singer: '薛之谦', album: '渡' }
]
$(function () {
  // 将上面的songDatas中数据加载到tr中再拼接到喜欢歌单中
  var favListStr = ''
  fav()
  function fav() {
    $.each(songDatas, function (index, item) {
      favListStr += `
           <tr>
                <td class="w74"><span>${index + 1}</span><i class="t-play-icon"></i></td>
                <td class="two">
                  <div class="t-song-name">
                    <a href="javascript:;" title="${item['uname']}">${item['uname']}</a>
                    <span>${item['des']}</span>
                    ${item['mv']}
                  </div>
                </td>
                <td class="w111">
                  <span class="time">${item['time']}</span>
                  <div class="opt">
                    <a href="javascript:;" class="t-add" title="添加到播放列表"></a>
                    <span class="t-fav icn" title="收藏"></span>
                    <span class="t-share icn" title="分享"></span>
                    <span class="t-download icn" title="下载"></span>
                    <span class="t-delete icn" title="删除"></span>
                  </div>
                </td>
                <td class="w103">
                  <div class="text">
                    <a href="javascript:;" title="${item['singer']}">${item['singer']}</a>
                  </div>
                </td>
                <td class="w147">
                  <div class="text">
                    <a href="javascript:;" title="${item['album']}">${item['album']}</a>
                  </div>
                </td>
             </tr>   
      `
    })
  }
  // 1点击歌手切换到歌手页
  $('.artist').on('click', function () {
    $(this).addClass('current').siblings('.h2').removeClass('current')
    $('.c-singers').show().siblings().hide()
    $('.c-colletList > .c-list,.c-createList > .c-list').hide()
    $('.minelist > ul .j-iflag').removeClass('z-selected')
  })

  // 2点击视频切换到视频页
  $('.myMv').on('click', function () {
    $(this).addClass('current').siblings('.h2').removeClass('current')
    $('.c-mvs').show().siblings().hide()
    $('.c-colletList > .c-list,.c-createList > .c-list').hide()
    $('.minelist > ul .j-iflag').removeClass('z-selected')
  })

  //   3点击创建栏歌单显示相应被点击歌单页
  $('.mine > ul').on('click', '.j-iflag', function () {
    $('.h2').removeClass('current')
    $(this).addClass('z-selected').siblings('.j-iflag').removeClass('z-selected')
    $(this).parents('.minelist').siblings('.minelist').find('.j-iflag').removeClass('z-selected')
    var index = $(this).index()
    // 让创建栏显示出来
    $('.c-createList').show().siblings().hide()
    $('.c-colletList > .c-list').hide()
    $('.c-createList > .c-list').eq(index).show().siblings().hide()
  })

  //   4点击收藏栏歌单显示相应被点击歌单页
  $('.other > ul').on('click', '.j-iflag', function () {
    $('.h2').removeClass('current')
    $(this).parents('.minelist').siblings('.minelist').find('.j-iflag').removeClass('z-selected')
    $(this).addClass('z-selected').siblings('.j-iflag').removeClass('z-selected')
    var index = $(this).index()
    // 让收藏栏显示出来
    $('.c-colletList').show().siblings().hide()
    $('.c-createList > .c-list').hide()
    $('.c-colletList > .c-list').eq(index).show().siblings().hide()
  })

  //   5歌单收起和展开，及左侧三角变换
  $('.minelist-main').on('click', function () {
    $(this).parent().siblings('.j-flag').stop().toggle()
    $(this).children('.triangle-t').toggleClass('triangle-l')
  })

  // 直接放到自定义歌单创建的渲染中
  // 6新建歌单的添加收藏分享下载删除样式调整
  function newListCss() {
    $('.c-newList .play').addClass('play-dis').children('span').addClass('span-dis').children('i').hide()
    $('.c-newList .add').hide()
    $('.c-newList').find('.i-btni').addClass('i-btni-dis')
    $('.c-newList .favorite i').addClass('fav-dis')
    $('.c-newList .share i').addClass('share-dis')
    $('.c-newList .download i').addClass('download-dis')
    $('.c-newList .comment i').addClass('comment-dis')
    // 新建歌单的播放次数隐藏
    $('.c-newList .more').hide()
  }

  //   收藏歌单头部的播放分享下载评论按钮大小的调整
  $('.c-colletList > .c-list .i-btni').css('width', 71)
  $('.c-colletList > .c-list .download').css('width', 59)

  //  7 收藏歌单介绍的展开与收起
  $('.s-fc7').on('click', function () {
    if ($(this).text() == '展开') {
      $(this)
        .html('收起' + '<i class="u-icn u-icn-69 u-icn-70"></i>')
        .parents()
        .siblings('#desc-more')
        .show()
        .siblings('#desc-dot')
        .hide()
    } else {
      $(this)
        .html('展开' + '<i class="u-icn u-icn-69 "></i>')
        .parents()
        .siblings('#desc-more')
        .hide()
        .siblings('#desc-dot')
        .show()
    }
  })

  // 8歌曲的添加收藏分享下载删除选项显示与隐藏  事件委托
  $('.c-createList,.c-colletList').on('mouseenter', 'tbody tr', function () {
    $(this).find('.opt').show().siblings('.time').hide()
  })
  $('.c-createList,.c-colletList').on('mouseleave', 'tbody tr', function () {
    $(this).find('.opt').hide().siblings('.time').show()
  })

  // 收藏歌单的删除选项隐藏
  $('.c-colletList .t-delete').hide()

  // 9新建歌单
  // 新建歌单在评论的前面，防止未进行事件委托的代码无法执行，保证能从本地取到数据
  // 点击新建,模态框显示
  $('.mine .newlist').on('click', function () {
    $('#newList').show()
    $('#bg').show()
  })
  // 点击×和取消,模态框消失
  $('#closeBtn,#nosel').on('click', function () {
    $('#newList').hide().find('.list-input').val('')
    $('#bg').hide()
    $('.c-err').css('visibility', 'hidden')
  })

  // 按住title拖动模态框
  $('#title')[0].addEventListener('mousedown', function (e) {
    var x = e.pageX - $('#newList')[0].offsetLeft
    var y = e.pageY - $('#newList')[0].offsetTop
    document.addEventListener('mousemove', move)
    function move(e) {
      $('#newList')[0].style.left = e.pageX - x + 'px'
      $('#newList')[0].style.top = e.pageY - y + 'px'
    }
    document.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', move)
    })
  })

  // 初始渲染歌单信息
  renderList()
  //   获得本地存储中的歌单数据
  function getList() {
    return JSON.parse(localStorage.getItem('list')) || []
  }
  //  将comments数据存储到本地
  function saveList(data) {
    localStorage.setItem('list', JSON.stringify(data))
  }
  //将自建歌单本地数据渲染到页面
  function renderList() {
    // 左侧我喜欢的歌单
    var str = `
          <li class="j-iflag z-selected">
          <div class="item clearfix" >
            <div class="left"><a hidefocus="true" class="avatar"><img src="../images/c-l-1.jpg" alt=""></a></div>
            <p class="name"><a hidefocus="true" href="javascript:;" class="s-fc0" title="我喜欢的音乐">我喜欢的音乐</a></p>
            <p class="s-fc4 num">21首</p>
          </div>
          <span class="oper hshow"></span>
        </li>
    `

    var newListStr = `
    <div class="c-list">
    <!-- 歌单标题 -->
    <div class="c-list-top ">
      <div class="c-list-info clearfix">
        <div class="song-img">
          <img src="../images/c-song-1.jpg" alt="" />
          <div class="mask"></div>
        </div>
        <div class="songlist-hd">
          <div class="hd">
            <h2>
              <i><span class="r-font"></span></i> 我喜欢的音乐
            </h2>
          </div>
          <div class="user">
            <a href="javascript:;" class="face"><img src="../images/user.jpg" alt="" /></a>
            <a href="javascript:;" class="uname">骚骚的乐乐耶耶耶</a>
            <span class="time">2016-01-25&nbsp;创建</span>
          </div>
          <div class="btns ">
            <a class="play" href="javascript:;"
              ><span><i class="p-icon c-button2-p"></i><em>播放</em></span></a
            >
            <a class="add" href="javascript:;"></a>
            <a class="favorite i-btni" href="javascript:;"><i>收藏</i></a>
            <a class="share i-btni" href="javascript:;"><i>分享</i></a>
            <a class="download i-btni" href="javascript:;"><i>下载</i></a>
            <a class="comment i-btni" href="javascript:;"><i>评论</i></a>
          </div>
        </div>
      </div>
      <div class="c-song-title">
        <h3>歌曲列表</h3>
        <span><i>21</i>首歌</span>
        <div class="more">播放：<em>168</em>次</div>
      </div>
    </div>
     <!-- 歌曲列表 -->
    <div class="c-list-middle clearfix">
      <div class="c-list-songs">
        <table>
          <thead>
            <tr>
              <th class="w74"></th>
              <th>歌曲标题</th>
              <th class="w111">时长</th>
              <th class="w103">歌手</th>
              <th class="w147">专辑</th>
            </tr>
          </thead>
          <tbody>
                ${favListStr}   
          </tbody>
        </table>
      </div>
    </div>
    <!-- 评论 -->
    <div class="c-list-bottom">
      <div class="c-comment">
        <div class="c-comment-hd">
          <h3>评论</h3>
          <span>共<i>0</i>条评论</span>
        </div>
        <div class="c-comment-main">
          <div class="iptarea">
            <div class="user">
              <img src="../images/user.jpg" alt="" />
            </div>
            <div class="c-flag">
              <div class="c-cmmtipt">
                <div class="c-txtwrap">
                  <textarea placeholder="评论"></textarea>
                </div>
                <div class="btns clearfix">
                  <i class="biaoqing c-btns-icon"></i>
                  <i class="tuijian c-btns-icon" ></i>
                  <a href="javascript:;" class="c-btns-sub">评论</a>
                  <span>140</span>
                </div>
                <div class="c-arr">
                  <em class="arrline">◆</em>
                  <span class="arrclr">◆</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 历史评论 -->
          <div class="cmmts">
          </div>
          <!-- 隐藏的换页栏 -->
         <div class="c-page" style="display: none;"></div>
        </div>
      </div>
    </div>
  </div>   
    `
    var data = getList()
    $.each(data, function (index, item) {
      // 创建左侧自定义歌单
      str += ` 
              <li class="j-iflag">
              <div class="item clearfix" >
                <div class="left">
                  <a hidefocus="true" class="avatar">
                    <img src="../images/c-l-new.jpg" alt="">
                  </a>
                </div>
                <p class="name">
                  <a hidefocus="true" href="javascript:;" class="s-fc0" title="${item.list}">
                  ${item.list}
                  </a>
                </p>
                <p class="s-fc4 num">0首</p>
              </div>
            
              <span class="oper hshow">
                <a title="编辑" href="javascript:;" class="u-icn u-icn-10">
                </a>
                <a title="删除" data-index="${index}" href="javascript:;" class="u-icn u-icn-11">

                </a>
              </span>
            </li>
      `

      // 右侧自定义歌单
      newListStr += `
                <div class="c-list c-newList">
                <div class="c-list-top ">
                  <div class="c-list-info clearfix">
                    <div class="song-img">
                      <img src="../images/c-song-empty.jpg" alt="" />
                      <div class="mask"></div>
                    </div>
                    <div class="songlist-hd">
                      <div class="hd">
                        <h2>
                          <i><span class="r-font"></span></i>  ${item.list}
                          <a title="编辑" href="javascript:;" class="u-icn u-icn-10">编辑</a>
                        </h2>
                      </div>
                      <div class="user">
                        <a href="javascript:;" class="face"><img src="../images/user.jpg" alt="" /></a>
                        <a href="javascript:;" class="uname">骚骚的乐乐耶耶耶</a>
                        <span class="time">2016-01-25&nbsp;创建</span>
                      </div>
                      <div class="btns ">
                        <a class="play" href="javascript:;"
                          ><span><i class="p-icon c-button2-p"></i><em>播放</em></span></a
                        >
                        <a class="add" href="javascript:;"></a>
                        <a class="favorite i-btni" href="javascript:;"><i>收藏</i></a>
                        <a class="share i-btni" href="javascript:;"><i>分享</i></a>
                        <a class="download i-btni" href="javascript:;"><i>下载</i></a>
                        <a class="comment i-btni" href="javascript:;"><i>评论</i></a>
                      </div>
                    </div>
                  </div>
                  <div class="c-song-title">
                    <h3>歌曲列表</h3>
                    <span><i>0</i>首歌</span>
                    <div class="more">播放：<em>0</em>次</div>
                  </div>
                </div>
                <div class="c-list-middle clearfix">
                  <div class="c-list-songs">
                    <div class="n-nmusic">
                      <h3 >
                        <i class="u-icn u-icn-21"></i>暂无音乐！
                      </h3>
                      <p>
                        点击
                        <i class="u-icn u-icn-22"></i>
                        即可将你喜欢的音乐收藏到“我的音乐”&nbsp;&nbsp;&nbsp;&nbsp;马上去
                        <a href="../index.html" >发现音乐</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      `
    })

    // 左侧栏创建歌单
    $('.mine .j-flag').html(str)
    // 左侧歌单数量
    $('.mine h2 .minelist-main i').text(`${data.length + 1}`)
    // 右侧创建歌单栏
    $('.c-createList').html(newListStr)

    newListCss()
    // 当没有评论时，将评论标题隐藏
    // if (data.length == 0) $('.cmmts').children('h3').hide()
  }

  // 未输入内容点击创建时,报错;否则将创建的歌单保存本地,并渲染到页面
  $('#newList-button-submit').on('click', function () {
    if ($('.list-input').val().trim().length == 0) return $('.c-err').css('visibility', 'visible')
    var data = getList()
    var listObj = {
      list: $('.list-input').val()
    }
    data.push(listObj)
    saveList(data)
    renderList()
    $('.list-input').val('')
    // 关闭新建歌单模态框
    $('#newList').hide()
    $('#bg').hide()
    $('.c-err').css('visibility', 'hidden')
  })
  // 回车触发新建
  $('.list-input').on('keydown', function (e) {
    if (e.key == 'Enter') {
      $(this).parent().siblings('.newList-button').children('#newList-button-submit').click()
    }
  })

  //  删除自建歌单
  $('.mine .j-flag').on('click', '.u-icn-11', function () {
    if (confirm('你确定要删除此歌单?')) {
      var data = getList()
      var index = $(this).attr('data-index')
      data.splice(index, 1)
      saveList(data)
      renderList()
      //    这里有小bug  当删除完自建歌单时,页面需要自动切换
    }
  })

  // 10编辑修改自建歌单信息
  $('.mine,.c-createList').on('click', '.u-icn-10', function () {
    var data = getList()
    // 判断是左侧编辑，还是右侧编辑
    if ($(this).parent().hasClass('oper')) {
      var i = $(this).parents('.j-iflag').index() - 1
    } else {
      var i = $(this).parents('.c-newList').index() - 1
    }
    $('.g-wrap .c-name').val(data[i].list)
    $('.g-wrap .u-bread1 a').text(data[i].list)
    // 将编辑页面显示出来，其他页面隐藏，高亮效果取消
    $('.g-wrap').show().siblings().hide()
    $('.c-colletList > .c-list,.c-createList > .c-list').hide()
    $('.minelist .j-iflag').removeClass('z-selected').parents('.minelist').siblings('h2').removeClass('current')
    // 用来做标记，更改的是第几个歌单
    $('.g-wrap .u-bread1 a').prop('id', i)
  })

  // 当名字更改时，保存按钮可用
  $('.g-wrap .c-name').on('keydown', function () {
    $('.g-wrap .save').addClass('saveColor').prop('disabled', false)
  })
  // 当名字未更改时，保存按钮不可用
  $('.g-wrap .c-name').on('keyup', function () {
    if ($(this).val() == $('.g-wrap .u-bread1 a').text()) {
      $('.g-wrap .save').removeClass('saveColor').prop('disabled', true)
    }
  })
  // 点击保存保存按钮，更改名字
  $('.g-wrap .save ').on('click', function () {
    var data = getList()
    var index = +$('.g-wrap .u-bread1 a').prop('id')
    data[index].list = $('.g-wrap .c-name').val()
    // 更改后刷新本地存储
    saveList(data)
    renderList()
    // 保存后关闭该页面
    $('.g-wrap .cc').click()
    // 页面操作完成保存按钮设置为不可用
    $('.g-wrap .save').removeClass('saveColor').prop('disabled', true)
  })
  // 点击取消时，退回原来的页面
  $('.g-wrap .u-bread1 a,.g-wrap .cc').on('click', function () {
    $('.mine .j-iflag')
      .eq(+$('.g-wrap .u-bread1 a').prop('id') + 1)
      .trigger('click')

    // 页面操作完成保存按钮设置为不可用
    $('.g-wrap .save').removeClass('saveColor').prop('disabled', true)
  })

  // 11 删除收藏歌单
  $('.other .j-flag .u-icn-11').on('click', function () {
    if (confirm('你确定要删除此歌单?')) {
      $(this).parents('.j-flag').siblings('h2').find('i').text('0')
      // 在删除前做修改操作,否则删除后,该元素已经不存在,无法寻找父元素
      $(this).parents('.j-iflag').remove()
    }
  })

  // 12歌单评论
  //   打开页面时访问本地存储
  renderComments()
  //   获得本地存储中的comments数据
  function getComments() {
    return JSON.parse(localStorage.getItem('comments')) || []
  }
  //  将comments数据存储到本地
  function saveComments(data) {
    localStorage.setItem('comments', JSON.stringify(data))
  }
  //将本地数据渲染到页面
  function renderComments() {
    var str = ''
    var data = getComments()
    $.each(data, function (index, item) {
      str += `
                    <div class="itm" >
                    <div class="head">
                      <a href="javascript:;">
                        <img src=${item.img}>
                      </a>
                    </div>
                    <div class="cntwrap">
                      <div>
                        <div class="cnt f-brk">
                          <a href="javascript:;" >
                          骚骚的乐乐耶耶耶 
                          </a>：${item.txt}
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time">
                          刚刚
                        </div>
                        <span class="dlt" data-index="${index}">
                          <a href="javascript:;" >
                            删除
                          </a>
                          <span class="sep">|</span>
                        </span>
                        <a href="javascript:;" >
                          <i class="zan"></i>
                        </a>
                        <span class="sep">|</span>
                        <a href="javascript:;" >
                          回复
                        </a>
                      </div>
                    </div>
                  </div>
        `
    })
    // 评论计数
    $('.cmmts').html(`<h3>最新评论(${data.length})</h3>` + str)
    // 评论计数
    $('.c-comment-hd').find('i').text(`${data.length}`)
    // 头部 评论计数
    $('.comment i').text(`(${data.length})`)
    // 当没有评论时，将评论标题隐藏
    if (data.length == 0) {
      // 无评论时，标题隐藏
      $('.cmmts').children('h3').hide()
      // 头部评论模块变为文字
      $('.comment i').text('评论')
    }
  }

  // 提交时存储数据到本地，并渲染在页面上
  $('.c-createList,.c-colletList').on('click', '.c-btns-sub', function () {
    console.log(111)
    var utxt = $(this).parent().siblings('.c-txtwrap').find('textarea').val()
    var uimg = $(this).parents('.iptarea').children('.user').children('img').prop('src')
    if (utxt.trim().length == 0) return alert('输入评论不能为空')
    var data = getComments()
    var obj = {
      img: uimg,
      txt: utxt
    }
    data.unshift(obj)
    saveComments(data)
    renderComments()
    $('.c-txtwrap textarea').val('')
  })
  // 回车提交数据
  $('.c-createList,.c-colletList').on('keydown', '.c-txtwrap textarea', function (e) {
    if (e.key == 'Enter') {
      $(this).parent().siblings('.btns').children('.c-btns-sub ').click()
      // 当回车提交时失去焦点，防止在提交后光标不能回去第一行
      $('.c-txtwrap textarea').blur()
    }
  })
  // 事件委托给a标签注册点击事件  删除
  $('.c-createList,.c-colletList').on('click', '.cmmts .dlt', function () {
    if (confirm('你要删除此评论吗？')) {
      var index = $(this).attr('data-index')
      var data = getComments()
      data.splice(index, 1)
      saveComments(data)
      renderComments()
    }
  })

  // 13 回到顶部
  $(window).on('scroll', function () {
    $(document).scrollTop() > 0 ? $('.c-back').show() : $('.c-back').hide()
  })

  // 14 删除歌曲
  $('.c-createList').on('click', '.t-delete', function () {
    if (confirm('确定删除此歌曲？')) {
      // 获取删除歌曲的角标值
      var index = $(this).parents('.w111').siblings('.w74').children('span').text() - 1
      // 移除此歌曲
      $(this).parents('tr').remove()
      // songDatas中的相应歌曲信息删除
      songDatas.splice(index, 1)
      // 遍历之前将字符串中的数据清空
      favListStr = ''
      // 重新遍历songDatas数据
      fav()
      // 将歌单信息重新渲染到页面上
      renderList()
    }
  })
})
