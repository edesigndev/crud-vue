<template>
  <div id="app">
    <div class="container">
      <h3 class="text-center">Servicios</h3>
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <todo class="form-group" v-for="(todo, index) in todos" :todo="todo" :key="index"></todo>
          </div>
        </div>
        <add-todo></add-todo>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Todo from "./components/Todo.vue";
import AddTodo from "./components/AddTodo.vue";

export default {
  name: "app",
  components: { Todo, AddTodo },

  computed: {
    ...mapState(["todos"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
