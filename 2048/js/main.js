export default () => {
  var data = {
    left() {
      console.log("左滑")
    },
    right() {
      console.log("右滑")
    },
    up() {
      console.log("向上")
    },
    down() {
      console.log("向下")
    }
  }

  return data
}