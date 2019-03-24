export default (ctx) => {
  // 加载图片
  var img = new Image()
  img.src = "./images/bg.jpg"
  var data = {
    draw(top) {
      ctx.drawImage(img, 0, -canvas.height + top, canvas.width, canvas.height)
      ctx.drawImage(img, 0, top, canvas.width, canvas.height)
    }
  }

  return data
}