require('./js/weapp-adapter.js')

const ctx = canvas.getContext('2d')

var arr = [
  [2, 0, 2, 4],
  [2, 0, 8, 4],
  [0, 0, 16, 0],
  [0, 4, 0, 0],
]

// 导入render.js
import _render from './js/render.js'
// 导入event
import _event from './js/event.js'
var render = _render(ctx)
var event = _event(arr, render)

// 绘制背景
render.drawBg()
render.drawPane(arr)

// 事件监听
event.listen()