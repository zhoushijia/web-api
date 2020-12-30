// 获取单个标签对象
function $(selector) {
  return document.querySelector(selector)
}
// 获取多个标签对象  伪数组
function $$(selector) {
  return document.querySelectorAll(selector)
}
