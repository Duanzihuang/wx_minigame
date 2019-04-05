export default (arr, render) => {
  var data = {
    arr: arr,
    init() {
      render.drawPane(this.arr)
    },
    left() {
      console.log("左滑")
      this.arr.forEach((item, hang) => { //遍历每一行
        //合并 & 最后一个不需要遍历
        for (var ge = 0; ge < 3; ge++) {
          //遍历后面的每一个
          // 当第一ge的时候 ge == 0 hou 后面循环三个
          // 当第二ge的时候 ge == 1 hou 后面循环两个
          // 当第三ge的时候 ge == 2 hou 后面循环一个
          for (var hou = 1; hou < 4 - ge; hou++) {
            if (item[ge] != 0 && item[ge + hou] != 0) {
              //当前元素不为0 && item[ge + hou] 就是当前元素的后面的第N个     
              if (item[ge] == item[ge + hou]) { //可以合并
                item[ge] = item[ge] * 2 //当前项 等于自己的2倍
                item[ge + hou] = 0 //可以被合并的项 设为0
              }

              break
            }
          }
        }

        // 往前走 寻找每一个当前元素
        for (var ge = 0; ge < 3; ge++) {
          if (item[ge] == 0) { //判断条件 ，如果当前元素为0才会往前走
            for (var hou = 1; hou < 4 - ge; hou++) { //找到当前元素后面的 n个元素
              if (item[ge + hou] != 0) { // 如果后面的这个某个元素 不为0
                item[ge] = item[ge + hou] // 把后面的元素放到当前元素上来
                item[ge + hou] = 0 // 把后面的元素 =0
                // 一步到位，移动到最前
                // break
              }
              // 一行一行的移动
              break
            }
          }
        }
      })

      // 重新渲染
      this.init()
    },
    right() {
      console.log("右滑")
      this.arr.forEach((item, hang) => {
        // 遍历行的每一个数，从后往前数
        for (var ge = 3; ge > 0; ge--) {
          // 遍历每一个数，后面还要循环多少次
          for (var hou = 1; hou <= ge; hou++) {
            // ge===3 321
            // ge===2 21
            // ge===1 1
            if (item[ge] != 0 && item[ge - hou] != 0) {
              if (item[ge] === item[ge - hou]) {
                item[ge] = item[ge] * 2
                item[ge - hou] = 0
              }
              break
            }
          }
        }

        // 往右移动
        for (var ge = 3; ge > 0; ge--) {
          if (item[ge] === 0) { // 当前元素=0 才需要合并
            // 遍历每一个数，后面还要循环多少次
            for (var hou = 1; hou <= ge; hou++) {
              if (item[ge - hou] !== 0) {
                item[ge] = item[ge - hou] //当前的设置为具体数字
                item[ge - hou] = 0 // 后面的置为0
                // 一步到位移动到最后
                // break
              }
              // 一行一行往右边移动
              break
            }
          }
        }
      })

      // 重新渲染
      this.init()
    },
    up() {
      console.log("向上")
      //遍历每一列
      for (var lie = 0; lie < 4; lie++) {
        // 遍历每一列中的每一行，进行合并操作
        for (var hang = 0; hang < 3; hang++) {
          // 先拿行，再拿列
          for (var hou = 1; hou < 4 - hang; hou++) {
            // 拿到当前元素后面的每一个元素，原理同向左一样
            if (this.arr[hang][lie] != 0 && this.arr[hang + hou][lie] != 0) {
              // 拿到当前元素和后面的每一个元素比较，如果这两个元素都不为0，而且这两个元素相等的时候，则合并
              if (this.arr[hang][lie] === this.arr[hang + hou][lie]) {
                this.arr[hang][lie] = this.arr[hang][lie] * 2
                this.arr[hang + hou][lie] = 0
              }
              break
            }
          }
        }

        // 遍历每一列中的每一行，进行上移操作
        for (var hang = 0; hang < 3; hang++) {
          // 遍历后面的每一元素
          for (var hou = 1; hou < 4 - hang; hou++) {
            // 如果第一个元素为0
            if (this.arr[hang][lie] === 0) {
              // 后面的不等于0，则后面的移动到前面覆盖它
              if (this.arr[hang + hou][lie] !== 0) {
                this.arr[hang][lie] = this.arr[hang + hou][lie]
                this.arr[hang + hou][lie] = 0
                //break 一次性移动多行
              }
              // 一次只移动一行
              break
            }
          }
        }
      }
      // 重新渲染
      this.init()
    },
    down() {
      console.log("向下")
      // 循环每一列
      for (var lie = 0; lie < 4; lie++) {
        // 循环每一行 合并操作
        for (var hang = 3; hang > 0; hang--) {
          // 循环元素后面的每一个元素，其实就是循环多少次
          for (var hou = 1; hou <= hang; hou++) {
            // 遍历到该元素不等于0
            if (this.arr[hang][lie] !== 0 && this.arr[hang - hou][lie] !== 0) {
              if (this.arr[hang][lie] == this.arr[hang - hou][lie]) {
                console.log("1111")
                this.arr[hang][lie] = this.arr[hang][lie] * 2
                this.arr[hang - hou][lie] = 0
              }

              break
            }
          }
        }

        // 循环每一行，进行下移操作
        for (var hang = 3; hang > 0; hang--) {
          // 如果最后一行等于0，则继续看后面是否有不为0的
          if (this.arr[hang][lie] === 0) {
            // 继续向后遍历
            for (var hou = 1; hou <= hang; hou++) {
              // 遍历到的后面元素不为0
              if (this.arr[hang - hou][lie] !== 0) {
                // 交换
                this.arr[hang][lie] = this.arr[hang - hou][lie]
                this.arr[hang - hou][lie] = 0
              }
              break
            }
          }
        }
      }

      // 重新渲染
      this.init()
    }
  }

  return data
}