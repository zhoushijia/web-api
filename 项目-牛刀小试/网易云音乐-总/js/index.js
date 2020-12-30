window.onload = function() {
    var cur = document.querySelector('footer .cur')
    var play = document.querySelector('footer .btns .ply')
    var f = true
    var timer = null
    var em = document.querySelector('footer span.time em')
    var count = 0
    var m = document.querySelector('footer .time span.m')
    var s = document.querySelector('footer .time span.s')
    play.onclick = function() {
        if (f) {
            clearInterval(timer)
            timer = setInterval(function() {
                cur.style.left = cur.offsetLeft + 2.3 + 'px'
                count++
                // 需要改变页面上时分秒的值
                s.innerHTML = showNum(count % 60)
                m.innerHTML = showNum(parseInt(count / 60) % 60)
            }, 1000)
            f = false
        } else {
            clearInterval(timer)
            f = true
        }
    }

    function showNum(num) {
        if (num < 10) {
            return '0' + num
        }
        return num
    }
    var picW = $('.ban-img ul li').width()
    $('.ban-img ul li').each(function(i, ele) {
        var li = $('<li></li>')
        $('.ban-img .dots').append(li)
    })
    $('.ban-img ol li')[0].className = 'redyd'
    $('.dots').on('click', 'li', function() {
        $(this).addClass('redyd').siblings().removeClass('redyd')
        var index = $(this).index()
        n = count = index
        $('.ban-img ul').css('left', -n * picW + 'px')
        $('.banner').css({
            background: `url(images/f-Bg${n}.jpg) no-repeat center center`,
            backgroundSize: '6000px'
        })
    })
    var n = 0,
        count = 0
    $('.ban .btn-left').on('click', function() {
        if (n == 0) {
            n = $('.ban-img ol li').length
        }
        n--
        if (count > 0) {
            count--
        } else {
            count = $('.ban-img ol li').length - 1
        }
        $('.ban-img ul').css('left', -n * picW + 'px')
        $('.ban-img ol li').eq(count).addClass('redyd').siblings().removeClass('redyd')
        $('.banner').css({
            background: `url(images/f-Bg${n}.jpg) no-repeat center center`,
            backgroundSize: '6000px'
        })
    })
    $('.ban .btn-right').on('click', function() {
        if (n == $('.ban-img ol li').length - 1) {
            n = -1
        }
        n++
        if (count < $('.ban-img ol li').length - 1) {
            count++
        } else {
            count = 0
        }
        $('.ban-img ul').css('left', -n * picW + 'px')
        $('.ban-img ol li').eq(count).addClass('redyd').siblings().removeClass('redyd')
        $('.banner').css({
            background: `url(images/f-Bg${n}.jpg) no-repeat center center`,
            backgroundSize: '6000px'
        })
    })
    var timer = setInterval(function() {
        document.querySelector('.ban .btn-right').click()
    }, 3000)
    $('.ban-img,.btn-left,.btn-right').on('mouseenter', function() {
        clearInterval(timer)
    })
    $('.ban-img').on('mouseleave', function() {
        timer = setInterval(function() {
            document.querySelector('.ban .btn-right').click()
        }, 2500)
    })

    var num = 0
    var w = $('#new .roll').width()
    $('#new .inner .pre').on('click', function() {
        if (num == 2) {
            num = 0
            $(this).next().find('.roller').css('left', '0px')
        }
        num++
        $(this)
            .next()
            .find('.roller')
            .stop()
            .animate({
                left: -num * w + 'px'
            })
    })
    $('#new .inner .nxt').on('click', function() {
        if (num == 0) {
            num = 2
            $(this)
                .prev()
                .find('.roller')
                .css('left', `${-num * w}px`)
        }
        num--
        $(this)
            .prev()
            .find('.roller')
            .stop()
            .animate({
                left: -num * w + 'px'
            })
    })

    var searchInput = document.querySelector('header .search input')
    searchInput.onfocus = function() {
        if (this.placeholder === '音乐/视频/电台/用户') {
            this.placeholder = ''
        }
    }
    searchInput.onblur = function() {
        if (this.placeholder.trim().length === 0) {
            this.placeholder = '音乐/视频/电台/用户'
        }
    }
    var Flag = true
    $('.btns .ply').click(function() {
        if (Flag) {
            $('audio')[0].play()
            $(this).css('backgroundPosition', '0 -165px')
            Flag = false
        } else {
            $('audio')[0].pause()
            $(this).css('backgroundPosition', '0 -204px')
            Flag = true
        }
    })
    $('.n-bilst ol li').hover(
        function() {
            $(this).children('.oper').show().siblings('.thide').css('width', '96px')
        },
        function() {
            $(this).children('.oper').hide().siblings('.thide').css('width', '170px')
        }
    )
    $('#recom .bd li .btn')
        .eq(0)
        .on('click', function() {
            $(this).parent().siblings('.u-cover').find('img').prop('src', 'https://p1.music.126.net/kNB4K2Q0frPW7TQ-78jBMg==/109951165293745459.jpg?param=140y140').siblings('.bottom').find('span').html('5219万')
            $(this).parent().prev().find('a').html('[下班听我的] 打工人又度过了一天 下班快乐')
        })
    $('#recom .bd li .btn')
        .eq(1)
        .on('click', function() {
            $(this).parent().siblings('.u-cover').find('img').prop('src', 'https://p1.music.126.net/55_qVCUbIlEcOYAAcCaemA==/19147994997916339.jpg?param=140y140').siblings('.bottom').find('span').html('2185万')
            $(this).parent().prev().find('a').html('耳 朵 喜 欢 你')
        })
    $('#recom .bd li .btn')
        .eq(2)
        .on('click', function() {
            $(this).parent().siblings('.u-cover').find('img').prop('src', 'http://p2.music.126.net/f2zWeO064rsF6Y8ajYFjTA==/5886785255252613.jpg?param=140y140').siblings('.bottom').find('span').html('164万')
            $(this).parent().prev().find('a').html('S.H.E 热门49单曲')
        })
    $('footer').mouseenter(function() {
        $('footer > .bg').stop().animate({
                top: 0
            },
            500
        )
    })
    $('footer').mouseleave(function() {
        $('footer > .bg').stop().animate({
                top: 46
            },
            500
        )
    })

    var flag = true
    $('footer .box .btn').on('click', function() {
        if (flag) {
            $(this).css('backgroundPosition', '-100px -400px')
            $('footer >.bg').css('top', '0')
            $('footer').unbind('mouseleave')
            flag = false
        } else {
            $(this).css('backgroundPosition', '-80px -400px')
            $('footer').mouseleave(function() {
                $('footer > .bg').stop().animate({
                        top: 46
                    },
                    500
                )
            })
            flag = true
        }
    })
    $('.n-myinfo .btnwrap .sign').click(function() {
        $(this)
            .css('backgroundPosition', 'right -346px')
            .next()
            .fadeIn()
            .animate({
                    top: -25
                },
                function() {
                    $(this).fadeOut()
                }
            )

        $(this).find('i').html('已签到').css('color', 'rgb(190, 190, 190)').css('backgroundPosition', '0px -305px')
    })
    $(window).on('scroll', function() {
        $(document).scrollTop() > 0 ? $('.c-back').show() : $('.c-back').hide()
    })
    $('.c-back').click(function() {
        $('html,body').animate({
            scrollTop: 0
        })
    })
}