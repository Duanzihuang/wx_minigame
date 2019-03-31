require('./js/libs/weapp-adapter.js')
//导入相关的模块
import _background from './js/module/background.js'
import _plane from './js/module/plane.js'
import _pool from './js/module/pool.js'
import _other from './js/module/other.js'

//1、获取content
const ctx = canvas.getContext('2d')

//2、创建background、plane
var background = _background(ctx)
var plane = _plane(ctx)
var pool = _pool(ctx, plane)
plane.listen()
var other = _other(ctx)

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
  // 绘制爆炸效果
  pool.drawBooms()
  // 绘制分数
  other.drawScore(pool.score)
  if (!plane.isOver) { //飞机没挂
    // 反复执行动画
    requestAnimationFrame(move)
  } else { //飞机挂了
    other.gameOver()
  }
}