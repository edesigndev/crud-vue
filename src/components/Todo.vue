<template>
  <div class="col-md-4">
    <div class="card card-fijo text-left" :class="{ completed: todo.done }">
      <div class="card-body">
        <h5 @dblclick="editing = true" v-show="!editing">{{ todo.title }}</h5>
        <p @dblclick="editing = true" v-show="!editing">{{ todo.description }}</p>

      <form v-show="editing" @submit.prevent="doneEdit">
        <input v-show="editing" type="text" v-model="todo.title" class="form-control">
        <textarea v-show="editing" type="text" v-model="todo.description" class="form-control noresize"></textarea>
        <br>
        <button class="btn btn-outline-success btn-sm">Grabar</button>
      </form>
      </div>
      <div class="card-footer" v-show="!editing">
        <button
          type="button"
          :class="{ completed: todo.done }"
          @click="editing = true"
          class="btn btn-link"
        >Editar</button>
        <button
          type="button"
          :class="{ completed: todo.done }"
          @click="deleteTodo({ id: todo.id })"
          class="btn btn-link"
        >Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Todo",
  props: ["todo"],

  data() {
    return {
      editing: false
    };
  },

  methods: {
    ...mapMutations(["deleteTodo", "toggleTodo"]),

    doneEdit(e) {
      this.editing = false;
    }
  }
};
</script>

<style scoped>
.card-fijo{
    width: 223.33px;
    height: 249px;
}
.noresize {
  resize: none !important;
}
</style>
