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

 export function printList( { list = list1 }) {

    console.log(list.value); // 输出当前元素
    if (list.next) {
    debugger;

        console.log(list.next);
      printList({ list: list.next }); // 链表中其余部分同理
    }
  
  }