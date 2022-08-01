Vue.createApp({
  data() {
    return {
      inputFieldText: "",
      todos: [],
      filterMode: "all",
      buttonState: true,
    };
  },
  computed: {
    todoLength() {
      return this.inputFieldText.length;
    },
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
      if (this.todoLength >= 5) {
        this.todos.push({
          text: this.inputFieldText,
          done: false,
        });

        this.inputFieldText = "";
        console.log(this.todos);
      }
    },
    removeDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
  watch: {
    inputFieldText(current) {
      if (current.length >= 5) {
        if (this.buttonState !== false) {
          this.buttonState = false;
        }
      } else {
        if (this.buttonState !== true) {
          this.buttonState = true;
        }
      }
    },
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem("todos"))
      this.todos = JSON.parse(localStorage.getItem("todos"));
  },
}).mount("#app");
