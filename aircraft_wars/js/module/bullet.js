export default (ctx, planePosition) => {
  const img = new Image()
  img.src = "./images/bullet.png"
  return {
    init: {
      x: planePosition.x + planePosition.w / 2 - 20 / 2,
      y: planePosition.y,
      w: 20,
      h: 30
    },
    status: true, //子弹是否可用，判断是否出界了
    draw() {
      if (this.init.y < -30) {
        this.status = false // 子弹出界了
      }
      this.init.y -= 3
      ctx.drawImage(img, this.init.x, this.init.y, this.init.w, this.init.h)
    }
  }
}