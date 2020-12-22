// function makeList() {
//   let itemList = [];
//   return function (item) {
//     if (!item && itemList.length > 0) {
//       itemList.forEach((item) => console.log(item));
//     } else if (!item) {
//       console.log("The list is empty");
//     } else if (itemList.includes(item)) {
//       let itemIndex = itemList.indexOf(item);
//       itemList.splice(itemIndex, 1);
//     } else if (!itemList.includes(item)) {
//       itemList.push(item);
//     }
//   };
// }

function makeList() {
  let itemList = [];
  return {
    add(item) {
      itemList.push(item);
      console.log(`${item} added!`);
    },
    remove(item) {
      let itemIndex = itemList.indexOf(item);
      itemList.splice(itemIndex, 1);
      console.log(`${item} removed!`);
    },
    list() {
      itemList.forEach((item) => console.log(item));
    },
  };
}

let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.remove("peas");
list.list();
