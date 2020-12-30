$(function() {
    $('header .userBox').hover(function() {
        $(this).children().eq(1).toggle()
    })
    var flag = true
    $('.doper-02 .comment').on('click', function() {
        if (flag) {
            $('.show').show()
            $('.bd').css('height', '4500px')
            flag = false
        } else {
            $('.show').hide()
            $('.bd').css('height', '3824px')
            flag = true
        }
    })

    $('.d-trends a').on('click', function() {
        $('.s-video1').show()
    })
    $('.s-video1-hd i').on('click', function() {
        $('.s-video1').hide()
    })
    $(document).on('keydown', function(e) {
        if (e.key === 'Enter') {
            $('.btn .sub').click()
        }
    })
    $('.btn .sub').on('click', function() {
            if ($('#txt').val().trim().length === 0) return alert('写点东西吧')
            var str = `
            <div class="show-01">
            <img src="../images/user.jpg" alt="" />
            <div class="show-01-right"><a href="javascript:;">乐乐的小team :</a>${$('#txt').val()}</div>
        </div>
        <div class="rp-01">
            <span>11月27日 22:28</span>
            <a href="javascript:;"><i></i>(0)</a>
            <span>|</span>
            <a href="javascript:;">回复</a>
        </div>
            
            `
            $('.content-02 .lst').after(str)
            $('#txt').val('')
        })
        // $('.s-video1-hd').on('mousedown', function(e) {
        //     var x = e.pageX - $('.s-video1').offset().top
        //     var y = e.pageY - $('.s-video1').offset().left
        //     $('.s-video1-hd').on('mousemove', function(e) {
        //         $('.s-video1').css('left', `${e.pageX - x}px`)
        //         $('.s-video1').css('top', `${e.pageY - y}px`)
        //     })
        // })
    var hd = document.querySelector('.s-video1-hd')
    var box = document.querySelector('.s-video1')
    hd.addEventListener('mousedown', function(e) {
        var x = e.pageX - box.offsetLeft
        var y = e.pageY - box.offsetTop
            // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
        document.addEventListener('mousemove', move)

        function move(e) {
            box.style.left = e.pageX - x + 'px'
            box.style.top = e.pageY - y + 'px'
        }
        // (3) 鼠标弹起，就让鼠标移动事件移除
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', move)
        })
    })
})