;(function () {
  // 监控区域tab切换
  $('.monitor').on('click', '.tabs a', function () {
    $(this).addClass('active').siblings('a').removeClass('active')
    $('.monitor .content').eq($(this).index()).show().siblings('.content').hide()
  })

  //将内容区复制一份，保证动画不会出现空白
  $('.marquee').each(function (index, dom) {
    $(dom).append($(dom).children('.row').clone())
  })
})()
// 点位分布统计
;(function () {
  var myChart = echarts.init($('.pie')[0])
  var option = {
    tooltip: {
      // trigger 触发方式。  非轴图形，使用item的意思是放到数据对应图形上触发提示
      trigger: 'item',
      //   格式与series中的数据对应
      // 格式化提示内容：
      // a 代表series系列图表名称
      // b 代表series数据名称 data 里面的name
      // c 代表series数据值 data 里面的value
      // d代表  当前数据/总数据的比例
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // 内容的颜色
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
      {
        name: '点位统计',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ],
        // 文字大小
        label: {
          fontSize: 10
        },
        // 折线长度
        labelLine: {
          length: 6,
          length2: 8
        }
      }
    ]
  }
  myChart.setOption(option)

  //   当浏览器缩放时，表跟着一起缩放
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()
// 全国用户总量统计
;(function () {
  // 灰色柱子
  var obj = {
    name: '',
    value: 1200,
    // 柱子颜色
    itemStyle: {
      color: '#254065'
    },
    // 鼠标经过柱子颜色
    emphasis: {
      itemStyle: {
        color: '#254065'
      }
    },
    tooltip: {
      extraCssText: 'opacity:0'
    }
  }
  var myChart = echarts.init($('.bar')[0])

  var option = {
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0,
      0,
      0,
      1,
      [
        { offset: 0, color: '#00fffb' }, // 0 起始颜色
        { offset: 1, color: '#0061ce' } // 1 结束颜色
      ]
    ),
    tooltip: {
      trigger: 'item'
      //   axisPointer: {
      //     // 坐标轴指示器，坐标轴触发有效
      //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      //   }
    },
    grid: {
      left: '0%',
      right: '3%',
      bottom: '3%',
      top: '3%',
      containLabel: true,
      show: true,
      borderColor: 'rgba(0, 240, 255, 0.3)'
    },
    xAxis: [
      {
        type: 'category',
        data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
        axisTick: {
          // 坐标刻度偏移
          alignWithLabel: false,
          // 坐标刻度隐藏
          show: false
        },
        // x坐标轴文字标签样式设置
        axisLabel: {
          color: '#4c9bfd'
        },
        // 坐标轴线颜色
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',

        axisTick: {
          // 坐标刻度偏移
          alignWithLabel: false,
          // 坐标刻度隐藏
          show: false
        },
        // x坐标轴文字标签样式设置
        axisLabel: {
          color: '#4c9bfd'
        },
        // 坐标轴线颜色
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
          }
        },
        // 切割线颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [2100, 1900, 1700, 1560, 1400, obj, obj, obj, 900, 750, 600, 480, 240]
      }
    ]
  }

  myChart.setOption(option)
  //   当浏览器缩放时，表跟着一起缩放
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()
// 各时段销售额
;(function () {
  // 1. 准备数据
  var data = {
    day365: { orders: '20,301,987', amount: '99834' },
    day90: { orders: '301,987', amount: '9834' },
    day30: { orders: '1,987', amount: '3834' },
    day1: { orders: '987', amount: '834' }
  }
  var index = 0
  // 点击高亮，切换到对应的数据
  $('.filter a').on('click', function () {
    $(this).addClass('active').siblings('a').removeClass('active')
    index = $(this).index()
    var day = $(this).attr('data-day')
    $('.order .data  h4')[0].innerText = data[day].orders
    $('.order .data  h4')[1].innerText = data[day].amount
  })
  // 定时器 自动循环
  var timer = setInterval(function () {
    $('.filter a').eq(index).trigger('click')
    index++
    if (index >= 4) index = 0
  }, 1000)
  // 鼠标经过停止，移开继续
  $('.order').hover(
    function () {
      clearInterval(timer)
    },
    function () {
      clearInterval(timer)
      timer = setInterval(function () {
        $('.filter a').eq(index).trigger('click')
        index++
        if (index >= 4) index = 0
      }, 1000)
    }
  )
})()
// 销售额
;(function () {
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  }
  var myChart = echarts.init($('.line')[0])
  var option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      // 坐标轴指示器，坐标轴触发有效
      trigger: 'axis'
    },
    legend: {
      data: ['预期销售额', '实际销售额'],
      right: '10%', // 距离右边10%
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a', // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴内间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLine: {
        show: false // 去除轴线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [
      {
        // 这里的名字必须与legend对应
        name: '预期销售额',
        type: 'line',
        smooth: true,
        data: data.year[0]
      },
      {
        // 这里的名字必须与legend对应
        name: '实际销售额',
        type: 'line',
        smooth: true,
        data: data.year[1]
      }
    ]
  }

  myChart.setOption(option)
  // 点击事件
  var index = 0
  $('.sales .caption a').on('click', function () {
    $(this).addClass('active').siblings('a').removeClass('active')
    // 用来保证点击时变更角标，保证下一次自动播放播放下一个点击事件
    // $(this).index()的值是1-4，不是从0开始的
    // console.log($(this).index() + '---')
    index = $(this).index() - 1
    var dType = $(this).attr('data-type')
    // 这里不能用.调用，因为dType是字符串
    // option.series[0].data = data.dType[0]
    option.series[0].data = data[dType][0]
    option.series[1].data = data[dType][1]
    myChart.setOption(option)
  })
  // 自动播放 加定时器
  var timer = setInterval(function () {
    $('.sales .caption a').eq(index).trigger('click')
    index++
    if (index >= 4) {
      index = 0
    }
  }, 1000)
  // 鼠标经过sale盒子停止定时器
  $('.sales').hover(
    function () {
      clearInterval(timer)
    },
    function () {
      clearInterval(timer)
      timer = setInterval(function () {
        $('.sales .caption a').eq(index).trigger('click')
        index++
        if (index >= 4) {
          index = 0
        }
      }, 1000)
    }
  )
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()
// 雷达图
;(function () {
  var dataBJ = [[90, 19, 56, 11, 34]]
  var lineStyle = {
    normal: {
      width: 1,
      opacity: 0.5
    }
  }

  var myChart = echarts.init($('.radar')[0])
  var option = {
    // backgroundColor: '#161627',
    tooltip: {
      show: true,
      position: ['50%', '10%'],
      textStyle: {
        fontSize: 10
      }
    },
    radar: {
      indicator: [
        { name: '机场', max: 100 },
        { name: '商场', max: 100 },
        { name: '火车站', max: 100 },
        { name: '汽车站', max: 100 },
        { name: '地铁', max: 100 }
      ],
      // 居中
      center: ['50%', '50%'],
      // 外半径占据容器大小
      radius: '65%',
      // 原型
      shape: 'circle',
      // 指示器轴的分割段数
      splitNumber: 4,

      name: {
        // 修饰雷达图文本颜色
        textStyle: {
          color: '#4c9bfd'
        }
      },
      // 坐标轴在 grid 区域中的分隔线（圆圈）
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },
      // 坐标轴轴线相关设置(竖线)axisLine
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },
      splitArea: {
        show: false
      }
    },
    series: [
      {
        name: '北京',
        type: 'radar',
        data: dataBJ,
        // 修饰我们区域填充的背景颜色
        areaStyle: {
          color: 'rgba(238, 197, 102, 0.6)'
        },
        // 填充区域的线条颜色
        lineStyle: {
          normal: {
            color: '#fff',
            width: 1,
            opacity: 0.5
          }
        },
        // symbol 标记的样式(拐点），还可以取值'rect' 方块 ,'arrow' 三角等
        symbol: 'circle',
        // 拐点的大小
        symbolSize: 5,
        // 小圆点（拐点）设置为白色
        itemStyle: {
          color: '#fff'
        },
        // 在圆点上显示相关数据
        label: {
          show: true,
          color: '#fff',
          fontSize: 10
        }
      }
    ]
  }
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()
// 饼型半圆图
;(function () {
  var myChart = echarts.init($('.gauge')[0])
  var option = {
    series: [
      {
        type: 'pie',
        radius: ['130%', '150%'],
        center: ['48%', '80%'],
        //是否启用防止标签重叠策略
        // avoidLabelOverlap: false,
        // 去除折线
        label: {
          show: false,
          position: 'center'
        },
        // 鼠标经过不放大
        hoverOffset: 0,
        // 起始角度，支持范围[0, 360]
        // startAngle: 180,
        data: [
          { value: 100, itemStyle: { color: '#12274d' } },
          {
            value: 200,
            itemStyle: {
              color: 'transparent'
            }
          },
          {
            value: 100,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: '#00c9e0' }, // 0 起始颜色
                  { offset: 1, color: '#005fc1' } // 1 结束颜色
                ]
              )
            }
          }
        ]
      }
    ]
  }
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()
// 全国热榜
;(function () {
  var hotData = [
    {
      city: '北京', // 城市
      sales: '25,179', // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: '可爱多', num: '9,086', flag: true },
        { name: '娃哈哈', num: '8,341', flag: true },
        { name: '喜之郎', num: '7,407', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '6,724', flag: false },
        { name: '好多鱼', num: '2,170', flag: true }
      ]
    },
    {
      city: '河北',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '3,457', flag: false },
        { name: '娃哈哈', num: '2,124', flag: true },
        { name: '喜之郎', num: '8,907', flag: false },
        { name: '八喜', num: '6,080', flag: true },
        { name: '小洋人', num: '1,724', flag: false },
        { name: '好多鱼', num: '1,170', flag: false }
      ]
    },
    {
      city: '上海',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '2,345', flag: true },
        { name: '娃哈哈', num: '7,109', flag: true },
        { name: '喜之郎', num: '3,701', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '2,724', flag: false },
        { name: '好多鱼', num: '2,998', flag: true }
      ]
    },
    {
      city: '江苏',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '2,156', flag: false },
        { name: '娃哈哈', num: '2,456', flag: true },
        { name: '喜之郎', num: '9,737', flag: true },
        { name: '八喜', num: '2,080', flag: true },
        { name: '小洋人', num: '8,724', flag: true },
        { name: '好多鱼', num: '1,770', flag: false }
      ]
    },
    {
      city: '山东',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '9,567', flag: true },
        { name: '娃哈哈', num: '2,345', flag: false },
        { name: '喜之郎', num: '9,037', flag: false },
        { name: '八喜', num: '1,080', flag: true },
        { name: '小洋人', num: '4,724', flag: false },
        { name: '好多鱼', num: '9,999', flag: true }
      ]
    }
  ]
  // 根据数据渲染各省热销 sup 模块内容
  var str = ''
  $.each(hotData, function (index, item) {
    str += `
                  <li>
                    <span>${item['city']}</span>
                    <span>${item['sales']}<s class=${item['flag'] ? 'icon-up' : 'icon-down'}></s></span>
                  </li>
    `
  })
  $('.sup').html(str)
  // 第三步：当数据进入 tab 的时候
  // sub渲染
  function render(obj) {
    obj.addClass('active').siblings('li').removeClass('active')
    var subStr = ''
    $.each(hotData[obj.index()].brands, function (i, item) {
      subStr += `
      <li><span>${item['name']}</span><span>${item['num']}<s class=${item['flag'] ? 'icon-up' : 'icon-down'}></s></span></li>
      `
    })
    $('.sub').html(subStr)
  }
  $('.sup').on('mouseenter', 'li', function () {
    render($(this))
    index = $(this).index()
  })
  // 第四步：默认激活第一个tab
  var lis = $('.province .sup li')
  lis.eq(0).trigger('mouseenter')
  // 第五步：开启定时切换
  var index = 0
  var timer = setInterval(function () {
    if (index >= 5) index = 0
    // lis.eq(index).trigger('mouseenter')
    // 解决mouseenter冲突问题 clearInterval(timer)
    // 利用渲染实现循环页面功能
    render(lis.eq(index))
    index++
  }, 1000)
  // 解决mouseenter冲突问题
  $('.sup li').hover(
    function () {
      clearInterval(timer)
    },
    function () {
      timer = setInterval(function () {
        if (index >= 5) index = 0
        render(lis.eq(index))
        index++
      }, 1000)
    }
  )
})()
