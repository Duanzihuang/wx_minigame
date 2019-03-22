//Adapter
require('./js/libs/weapp-adapter.js')

// get context
const ctx = canvas.getContext('2d')

// set fill style
ctx.fillStyle = "red"

// draw react
ctx.fillRect(0, 0, 100, 100)

ctx.fillStyle = "yellow"
ctx.font = "30px Arial"
// draw Text
ctx.fillText('Hello', 150, 150)

//draw Picture
const image = new Image()
image.src = "./images/panda.jpg"
image.onload = function () {
  ctx.drawImage(image, 50, 200, 200, 200)
}