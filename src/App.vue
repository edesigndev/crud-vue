<template>
  <div id="app">
    <div class="container-fluid">
      <h3 class="text-center">Servicios</h3>
      <div class="form-group row">
        <div class="col">
          <input class="form-control" v-model="query" type="text" placeholder="Search..">
        </div>
      </div>
      <div class="row">
        <div class="col-12 order-2 col-md-8 order-md-1">
          <div class="row">
            <todo
              class="form-group"
              v-for="(todo, index) in displayedItems"
              :todo="todo"
              :key="index"
            ></todo>
          </div>
        </div>
        <add-todo></add-todo>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Todo from "./components/Todo.vue";
import AddTodo from "./components/AddTodo.vue";

export default {
  name: "app",
  data(){
    return{
      query:""
    }
  },
  components: { Todo, AddTodo },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(['filterServicios']),
    displayedItems(){
      if(this.query){
        return this.filterServicios(this.query)
      }
      return this.todos
    }
  }
};
</script>

