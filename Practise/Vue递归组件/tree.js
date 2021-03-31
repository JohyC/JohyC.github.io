let arry = [],
  ran = Math.random();

for (let i = 0; i < 100; i++) {
  arry[i] = { id: i + 1, pid: i, name: ran };
}

function arryToList(arry, start = 0) {
  if (start == arry.length) {
    return null;
  }
  let head = {
    id: start,
    pid: arryToList(arry, start + 1),
    name: ran,
  };
  return head;
}
let list = arryToList(arry);
console.log(list);



Vue.component("tree-menu",{
  props: ['value'],
  data() {
    return {
      collapse: false,
    }
  },
  template: "#tree-menu"
});

var vue = new Vue({
  el: "#tree",
  data:{
    list: list,
  }
})