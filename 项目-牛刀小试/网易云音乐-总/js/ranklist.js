$(function() {
    var id = location.search
    var index = id.indexOf('=')
    id = id.substr(index + 1)
    if (id) {
        $('.list .mine')
            .eq(id - 1)
            .addClass('z-selected')
            .siblings('li')
            .removeClass('z-selected')
        $('#main .right>div')
            .eq(id - 1)
            .show()
            .siblings()
            .hide()
    }
    $('header .userBox').hover(function() {
        $(this).children().eq(1).toggle()
    })
    $('tbody tr').hover(
        function() {
            $(this).find('.u-dur').hide().next().show()
        },
        function() {
            $(this).find('.u-dur').show().next().hide()
        }
    )
    $('.list .mine').on('click', function() {
        $(this).addClass('z-selected').siblings('.mine').removeClass('z-selected')
        $('.right > div').eq($(this).index()).show().siblings().hide()
    })
    $('#main .list .f-cb li')
        .eq(0)
        .on('click', function() {
            $(document).prop('title', '云音乐飙升榜 - 排行榜 - 网易云音乐')
        })
        // 11歌单评论
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
        $.each(data, function(index, item) {
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
    $('.c-colletList').on('click', '.c-btns-sub', function() {
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
    $('.c-colletList').on('keydown', '.c-txtwrap textarea', function(e) {
            if (e.key == 'Enter') {
                $(this).parent().siblings('.btns').children('.c-btns-sub ').click()
                    // 当回车提交时失去焦点，防止在提交后光标不能回去第一行
                $('.c-txtwrap textarea').blur()
            }
        })
        // 事件委托给a标签注册点击事件  删除
    $('.c-colletList').on('click', '.cmmts .dlt', function() {
        if (confirm('你要删除此评论吗？')) {
            var index = $(this).attr('data-index')
            var data = getComments()
            data.splice(index, 1)
            saveComments(data)
            renderComments()
        }
    })

    // 12 回到顶部
    $(window).on('scroll', function() {
        $(document).scrollTop() > 0 ? $('.c-back').show() : $('.c-back').hide()
    })

    // 13 删除歌曲
    $('.c-createList').on('click', '.t-delete', function() {
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