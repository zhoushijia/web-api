$(function () {
    
        var userBox = document.querySelector('header .userBox')
        userBox.onmouseover = function() {
            this.children[1].style.display = 'block'
        }
        userBox.onmouseout = function() {
            this.children[1].style.display = 'none'
        }
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
  
})