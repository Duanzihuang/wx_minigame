import _main from './main.js'

export default () => {
  var main = _main()

  var data = {
    pos: {

    },
    listen() {
      canvas.addEventListener('touchstart', e => {
        const touch = e.changedTouches[0]
        this.pos.startX = touch.clientX
        this.pos.startY = touch.clientY
      })

      canvas.addEventListener('touchmove', e => {
        const touch = e.changedTouches[0]
        this.pos.endX = touch.clientX
        this.pos.endY = touch.clientY
      })

      canvas.addEventListener('touchend', e => {
        var x = this.pos.endX - this.pos.startX
        var y = this.pos.endY - this.pos.startY

        // 要出去一段距离
        if (Math.abs(x) > 5 || Math.abs(y) > 5) {
          //当x的移动距离大于y的移动距离的时候 他左右移动
          if (Math.abs(x) > Math.abs(y)) {
            if (x > 0) {
              // 向右滑
              main.right()
            } else {
              // 向左滑
              main.left()
            }
          } else {
            if (y > 0) {
              // 往下滑
              main.down()
            } else {
              // 往上滑
              main.up()
            }
          }
        }
      })
    }
  }

  return data
}