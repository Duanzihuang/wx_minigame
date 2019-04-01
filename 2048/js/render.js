export default ctx => {
  var data = {
    init: {
      margin: 20, //左右边距
      top: 200, //距离顶部的距离
      space: 13 //每个小格子的间距
    },
    // 绘制窗格
    drawPane(arr) {
      const paneWidth = (canvas.width - this.init.margin * 2 - this.init.space * 5) / 4

      // 遍历二维数组，进行绘制
      arr.forEach((hang, h) => { // 遍历每一行
        hang.forEach((num, l) => { // 遍历每一行中的每一列
          if (num == 2) {
            ctx.fillStyle = "#eee4da"
          } else if (num == 4) {
            ctx.fillStyle = "#f2b179"
          } else if (num == 8) {
            ctx.fillStyle = "#f59563"
          } else {
            ctx.fillStyle = "#cdc1b4"
          }

          // 绘制各自
          ctx.fillRect(
            this.init.margin + this.init.space + l * (this.init.space + paneWidth),
            this.init.top + this.init.space + h * (this.init.space + paneWidth),
            paneWidth,
            paneWidth
          )

          // 绘制窗格中的文字
          if (num) {
            ctx.font = "bold 33px Arial"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText(num, this.init.margin + this.init.space + l * (this.init.space + paneWidth) + 33,
              this.init.top + this.init.space + h * (this.init.space + paneWidth) + 45)
          }
        })
      })
    },
    drawBg() {
      // 绘制背景色
      ctx.fillStyle = '#faf8ef'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 绘制一个自适应正方形
      ctx.fillStyle = "#bbada0"
      ctx.fillRect(this.init.margin, this.init.top, canvas.width - this.init.margin * 2, canvas.width - this.init.margin * 2)

      // 绘制边框
      ctx.lineJoin = 'round'
      ctx.lineWidth = '10'
      ctx.strokeStyle = '#bbada0'
      ctx.strokeRect(this.init.margin, this.init.top, canvas.width - this.init.margin * 2, canvas.width - this.init.margin * 2)
    }
  }

  return data
}