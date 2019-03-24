// 导入敌机模块
import _enemy from './enemy.js'
// 导入子弹模块
import _bullet from './bullet.js'

export default (ctx, planePosition) => {
  var data = {
    enemys: [], //敌机数组
    bullets: [], //子弹数组
    // 绘制敌机
    drawEnemys(top) {
      if (top % 60 == 0) {
        this.enemys.push(_enemy(ctx))
      }

      this.enemys = this.enemys.filter(item => item.status === true)
      // console.log(this.enemys.length)
      this.enemys.forEach(item => {
        item.draw()
      })
    },
    drawBullets(top) {
      if (top % 30 == 0) {
        this.bullets.push(_bullet(ctx, planePosition))
      }

      this.bullets = this.bullets.filter(item => item.status === true)
      // console.log(this.bullets.length)
      this.bullets.forEach(item => {
        item.draw()
      })
    }
  }

  return data
}