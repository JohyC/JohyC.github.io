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
      if (this.message !== "") {
        this.todos.push({
          content: this.message,
          key: Date.now(),
        });
      }
      this.message = "";
    },
    onEnter: function () {
      this.add();
    },
    del: function (index) {
      this.todos.splice(index, 1);
    },
    clickActive: function (filter, index) {
      this.isActive = index;
      debugger;
      switch (filter.value) {
        case "done":
          return (this.visibility = "done");
        case "todo":
          return (this.visibility = "todo");
        default:
          return (this.visibility = "all");
      }
    },
  },
  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos);
    },
  },
});
