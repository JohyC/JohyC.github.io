/**
 * 过滤todos
 */
var filters = {
  all: function (todos) {
    return todos;
  },
  done: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed;
    });
  },
  todo: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed;
    });
  },
};
// @ts-ignore
var vue = new Vue({
  el: ".container",
  data: {
    message: "",
    todos: [
      {
        content: "test",
        completed: false,
        key: 0,
      },
    ],
    filters: [
      { text: "全部", value: "all" },
      { text: "已完成", value: "done" },
      { text: "未完成", value: "todo" },
    ],
    visibility: "all",
    isActive: 0,
  },
  methods: {
    add: function () {
      if (this.$data.message !== "") {
        this.$data.todos.push({
          content: this.$data.message,
          key: Date.now()
        });
      }
      this.$data.message = "";
    },
    onEnter: function () {
      this.add();
    },
    del: function (index) {
      this.$data.todos.splice(index, 1);
    },
    clickActive: function (filter, index) {
      this.isActive = index;
      debugger
      switch (filter.value) {
        case "done":
          // @ts-ignore
          return this.$data.visibility = "done" 
        case "todo":
          // @ts-ignore
          return this.$data.visibility = "todo"
        default:
          // @ts-ignore
          return this.$data.visibility = "all"
      }
    },
  },
  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos);
    },
  },
});
