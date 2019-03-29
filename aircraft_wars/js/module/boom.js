export default (ctx, boomPosition) => {
  var img = new Image()
  img.src = `./images/explosion19.png`

  var data = {
    index: 0,
    init: {
      x: boomPosition.x,
      y: boomPosition.y,
      w: 32,
      h: 24
    },
    status: true, // 初始化，可用
    draw(boomImages) {
      this.index++
        // 如果一次走完了，那么爆炸效果销毁
        if (this.index > 18) {
          this.index = 18
          this.status = false
        }
      // 绘制图片
      ctx.drawImage(boomImages[this.index], this.init.x, this.init.y, this.init.w, this.init.h)
    }
  }

  return data
}