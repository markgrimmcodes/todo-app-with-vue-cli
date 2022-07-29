Vue.createApp({
  data() {
    return {
      inputFieldText: "",
      todos: [],
      filterMode: "all",
    };
  },
  computed: {
    filteredTodoList() {
      let filteredTodos = [];
      if (this.filterMode === "all") {
        filteredTodos = this.todos;
      } else if (this.filterMode === "done") {
        filteredTodos = this.todos.filter((todo) => todo.done);
      } else if (this.filterMode === "open") {
        filteredTodos = this.todos.filter((todo) => !todo.done);
      }
      return filteredTodos;
    },
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.inputFieldText,
        done: false,
      });

      this.inputFieldText = "";
      console.log(this.filterMode);
    },
    removeDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
}).mount("#app");
