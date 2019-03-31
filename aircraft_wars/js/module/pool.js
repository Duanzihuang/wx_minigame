// 导入敌机模块
import _enemy from './enemy.js'
// 导入子弹模块
import _bullet from './bullet.js'
// 导入爆炸模块
import _boom from './boom.js'

export default (ctx, plane) => {
  var data = {
    enemys: [], //敌机数组
    bullets: [], //子弹数组
    booms: [], //爆炸效果数组
    boomImages: [], //爆炸效果的图片数组
    score: 0, //分数
    // 绘制敌机
    drawEnemys(top) {
      if (top % 60 == 0) {
        this.enemys.push(_enemy(ctx))
      }

      this.enemys = this.enemys.filter(item => item.status === true)
      this.enemys.forEach(enemy => {
        enemy.draw()

        // 判断敌机是否和飞机碰撞到了
        plane.isBoom(enemy.init)

        // 循环每个飞机的同时，遍历每个子弹，检测子弹和飞机是否碰到了
        this.bullets.forEach(bullet => {
          // 检测是否爆炸
          var isBoom = enemy.boom(bullet.init)
          if (isBoom) {
            // 分数++
            this.score++
              // 子弹销毁
              bullet.status = false
            // 添加爆炸效果
            this.booms.push(_boom(ctx, bullet.init))
          }
        })
      })
    },
    // 绘制子弹
    drawBullets(top) {
      if (top % 30 == 0) {
        this.bullets.push(_bullet(ctx, plane.init))
      }

      this.bullets = this.bullets.filter(item => item.status === true)
      this.bullets.forEach(item => {
        item.draw()
      })
    },
    // 绘制爆炸
    drawBooms() {
      this.booms = this.booms.filter(boom => boom.status === true)
      this.booms.forEach(boom => {
        // 绘制爆炸效果
        boom.draw(this.boomImages)
      })
    }
  }

  // 添加一组爆炸效果的图片
  for (var i = 1; i < 20; i++) {
    var img = new Image()
    img.src = `./images/explosion${i}.png`

    data.boomImages.push(img)
  }

  return data
}