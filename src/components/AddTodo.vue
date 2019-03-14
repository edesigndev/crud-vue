<template>
  <div class="col-12 order-1 col-md-4 order-md-2 form-group">
    <div class="card text-left">
      <form @submit.prevent="doneAdd">
        <div class="card-header">
          <strong>Servicio</strong>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" v-model="title" class="form-control">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción</label>
            <input type="text" v-model="description" class="form-control">
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-outline-success btn-sm">Grabar</button>
          <button type="button" class="btn btn-outline-danger btn-sm">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "add-todo",

  data() {
    return {
      title: "",
      description: ""
    };
  },

  methods: {
    ...mapMutations(["addTodo"]),

    doneAdd() {
      this.addTodo({
        title: this.title,
        description: this.description
      });
      this.title = this.description = "";
    }
  }
};
</script>

