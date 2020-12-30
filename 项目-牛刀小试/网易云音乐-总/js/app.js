window.onload = function () {
    var span = document.querySelector('.iconfont');
    var xt = document.querySelector('.iconfont-xitong')
    span.onclick = function () {
        console.log(1);

        Show_Hidden(xt);
        return false;
    }
}