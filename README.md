# wx_minigame
微信小游戏基础知识 + 实战案例

### Canvas

> 基本概念

```
Canvas是HTML5新增的标签，它就像一块画布，可以用JavaScript在上面绘制各种图表、动画等。
```

> 基本绘制（矩形、文字、图片）

```
// 获取到dom
var canvas = document.getElementById('myCanvas')

// 获取上下文
var ctx = canvas.getContext('2d')

1、绘制矩形
ctx.fillRect(0,0,50,50)

2、绘制文字
ctx.fillText('你好',150,150)

3、绘制图片
var img = new Image()
img.src = "imgs/panda.jpg"
img.onload = function(){
	ctx.drawImage(img,200,200,100,100)
}
```

> Canvas 动画

```
方式1：setInterval

方式2：setTimeout

方式3：requestAnimationFrame
```

> Canvas 其它应用场景

```
1、ECharts使用到了Canvas
	https://echarts.baidu.com/tutorial.html

2、图片裁剪插件，比如react-avatar-editor，使用到了Canvas
	https://github.com/mosch/react-avatar-editor

3、调起手机摄像头，并且拍照截图
	https://www.cnblogs.com/scarecrowlxb/p/6804747.html
```

### 小游戏中Canvas的使用

> 小程序原生API

```
1、创建canvas
const canvas = wx.createCanvas()

2、获取上下文
const context = canvas.getContext('2d')

3、设置绘制样式
ctx.fillStyle="red"

4、绘制矩形
ctx.fillRect(0,0,100,100)

5、绘制文字
ctx.fillStyle = "yellow"
ctx.font ="30px Arial"
ctx.fillText('Hello',150,150)

6、绘制图片【必须使用小程序提供的API，不能直接new Image() 会报错】
const image = wx.createImage()
image.src = "./images/panda.jpg"
image.onload = function(){
  ctx.drawImage(image,50,200,150,150)
}
```

> Adapter 

```
1、基本概念
这些使用 wx API 模拟 BOM 和 DOM 的代码组成的库称之为 Adapter。顾名思义，这是对基于浏览器环境的游戏引擎在小游戏运行环境下的一层适配层，使游戏引擎在调用 DOM API 和访问 DOM 属性时不会产生错误。Adapter 是一个抽象的代码层，并不特指某一个适配小游戏的第三方库，每位开发者都可以根据自己的项目需要实现相应的 Adapter。官方实现了一个 Adapter 名为 weapp-adapter， 并提供了完整的源码，供开发者使用和参考。

2、使用步骤
导入 weapp-adapter、其它用法跟WEB API一样的
比如创建图片，现在可以使用 const image = new Image() 了
```

### 飞机大战