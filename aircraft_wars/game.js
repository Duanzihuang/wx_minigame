require('./js/libs/weapp-adapter.js')
//导入相关的模块
import _background from './js/module/background.js'
import _plane from './js/module/plane.js'
import _pool from './js/module/pool.js'

//1、获取content
const ctx = canvas.getContext('2d')

//2、创建background、plane
var background = _background(ctx)
var plane = _plane(ctx)
var pool = _pool(ctx, plane.init)
plane.listen()

//3、动画
// 定义top值
var top = 0
move()

function move() {
  // 清除画布
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  top++
  if (top > canvas.height) {
    top = 0
  }
  // 绘制背景
  background.draw(top)
  // 绘制飞机
  plane.draw()
  // 绘制N个敌机
  pool.drawEnemys(top)
  // 绘制N个子弹
  pool.drawBullets(top)
  requestAnimationFrame(move)
}