Vue.createApp({
  data() {
    return {
      inputFieldText: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.inputFieldText,
        done: false,
      });
      this.inputFieldText = "";
      console.log(this.todos);
    },
    removeDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
}).mount("#app");
