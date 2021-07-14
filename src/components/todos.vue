<template>
  <div class="input-group">
    <input
      @keyup.enter="addTodo"
      type="text"
      class="form-control"
      placeholder="eg: Shop for clothes at Amazon."
      aria-label="Recipient's username with two button addons"
      aria-describedby="button-addon4"
      v-model="todoInput"
    />
    <div class="input-group-append" id="button-addon4">
      <button @click="addTodo" class="btn btn-success todo-inp" type="button">
        Add to list
      </button>
    </div>
  </div>

  <div v-if="apiData">
    <div
      v-for="(data, index) in apiData.slice().reverse()"
      track-by="index"
      :key="index"
    >
      <div
        class="input-group"
        v-bind:class="{ completed: data.completed }"
        v-if="index < 10"
      >
        <label
          type="text"
          class="form-control todo-list"
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
          aria-describedby="button-addon4"
          >{{ data.title }}</label
        >
        <div class="input-group-append" id="button-addon4">
          <button
            @click="changeStatus(data.id)"
            class="btn btn-info"
            v-bind:class="{ completed: data.completed }"
            type="button"
          >
            waiting
          </button>
          <button
            @click="delTodo(data.id)"
            class="btn btn-danger"
            type="button"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Todos",

  data() {
    return {
      apiData: null,
      completed: false,
      todoInput: null,
    };
  },

  methods: {
    changeStatus(id) {
      console.log(id);
      console.log((this.apiData[id-1].completed = !this.apiData[id-1].completed));
    },

    delTodo(id) {
      console.log(id);
      this.apiData = this.apiData.filter((todo) => todo.id != id);
    },
    addTodo() {
      const id = this.apiData.length + 1;
      let todo = this.todoInput;
      let data = {
        userId: 11,
        id: id,
        title: todo,
        completed: false,
      };
      this.apiData.push(data);

      this.todoInput = "";
    },
  },
  beforeCreate() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10/").then(
      (response) => {
        console.log(response.data);
        this.apiData = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>
<style>
* {
  margin: 5px;
  padding: 2px;
}
.todos-list {
  margin: 20px;
}

.completed {
  text-decoration: line-through;
}

.checkbox-inp {
  z-index: 1;
  position: absolute;
  height: 45px;
}

.todo-inp {
  margin: 10px;
  height: 80%;
}
</style>
