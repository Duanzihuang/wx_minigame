export default (ctx) => {
  // 加载飞机图片
  var img = new Image()
  img.src = "./images/hero.png"
  var data = {
    init: {
      x: canvas.width / 2 - 93 / 2,
      y: canvas.height - 65 - 20,
      w: 93,
      h: 65
    },
    isOver: false, //是否结束了
    status: true, //点击到了飞机
    isBoom(enemyPosition) { //检测是否爆炸，传入敌机对象
      //飞机的xy
      //敌机的xy，获取敌机的中心点
      var x = enemyPosition.x + enemyPosition.w / 2
      var y = enemyPosition.y + enemyPosition.h / 2

      if (x > this.init.x && x < this.init.x + this.init.w && y > this.init.y && y < this.init.y + this.init.h) {
        // console.log('game over')
        // 停止渲染 & 弹出游戏结束框
        this.isOver = true
      }
    },
    // 事件监听
    listen() {
      canvas.addEventListener('touchstart', (e) => {
        const clientX = e.touches[0].clientX
        const clientY = e.touches[0].clientY

        /** 
        const planeLeft = canvas.width / 2 - this.init.w / 2
        const planeRight = canvas.width / 2 + this.init.w / 2
        const planeTop = canvas.height - this.init.h - 20
        const planeBottom = canvas.height - 20

        if (clientX > planeLeft && clientX < planeRight && clientY > planeTop && clientY < planeBottom) {
          this.status = true
        } else {
          this.status = false
        }
        */
        if (clientX > this.init.x && clientX < this.init.x + this.init.w && clientY > this.init.y && clientY < this.init.y + this.init.h) {
          this.status = true
        } else {
          this.status = false
        }
      })
      canvas.addEventListener('touchmove', (e) => {
        if (this.status) {
          const clientX = e.touches[0].clientX
          const clientY = e.touches[0].clientY


          this.init.x = clientX - this.init.w / 2
          this.init.y = clientY - this.init.h / 2

          // 处理边界问题
          if (this.init.x < 0) {
            this.init.x = 0
          }

          if (this.init.x > canvas.width - this.init.w) {
            this.init.x = canvas.width - this.init.w
          }

          if (this.init.y < 0) {
            this.init.y = 0
          }

          if (this.init.y > canvas.height - this.init.h) {
            this.init.y = canvas.height - this.init.h
          }
        }
      })
      canvas.addEventListener('touchend', () => {
        this.status = false
      })
    },
    draw() {
      ctx.drawImage(img, this.init.x, this.init.y, this.init.w, this.init.h)
    }
  }

  return data
}