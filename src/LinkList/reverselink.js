// 循环一个链表
let list1 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

 export function printReverseList( { list = list1 }) {

    if (list.next) {
      printReverseList({ list: list.next }); // 链表中其余部分同理
    }
    console.log(list.value); // 输出当前元素
  
  }