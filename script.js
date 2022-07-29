Vue.createApp({
  data() {
    return {
      inputFieldText: "",
      todos: [],
      checked: false,
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.inputFieldText);
      this.inputFieldText = "";
      console.log(this.todos[0]);
    },
    removeDoneTodos() {},
  },
}).mount("#app");
