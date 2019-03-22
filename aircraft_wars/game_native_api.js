// create canvas
const canvas = wx.createCanvas()

// get context
const ctx = canvas.getContext('2d')

// set fill style
ctx.fillStyle = "red"

// draw react
ctx.fillRect(0,0,100,100)

ctx.fillStyle = "yellow"
ctx.font ="30px Arial"
// draw Text
ctx.fillText('Hello',150,150)

//draw Picture
const image = wx.createImage()
image.src = "./images/panda.jpg"
image.onload = function(){
  ctx.drawImage(image,50,200,150,150)
}

