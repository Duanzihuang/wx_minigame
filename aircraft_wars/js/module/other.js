export default ctx => {
  var img = new Image()
  img.src = './images/Common.png'
  var data = {
    drawScore(score) {
      ctx.font = "20px Arial"
      ctx.fillStyle = "white"
      ctx.fillText(`得分：${score}`, 30, 50)
    },
    gameOver() {
      // ctx.fillRect(0,0,500,400)

      // 九个参数时候 
      // ctx.drawImage(img,截取图片开始的x,截取图片开始的y,截取图片的宽度,截取图片的高度,放在屏幕的开始x,放在屏幕的开始y,宽度,高度)
      ctx.drawImage(img, 0, 0, 118, 106, 40, 100, 300, 300)
      ctx.fillText('游戏结束', 150, 280)
    }
  }

  return data
}