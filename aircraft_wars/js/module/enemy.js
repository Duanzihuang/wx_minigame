export default (ctx) => {
  // 加载敌机图片
  var img = new Image()
  img.src = "./images/enemy.png"
  var data = {
    init: {
      x: Math.random() * (canvas.width - 60),
      y: 0,
      w: 60,
      h: 40
    },
    status: true, //是否还可用，没有跑出屏幕
    draw() {
      this.init.y += 3
      if (this.init.y < canvas.height) {
        ctx.drawImage(img, this.init.x, this.init.y, this.init.w, this.init.h)
      } else {
        this.status = false
      }
    }
  }

  return data
}