<template>
  <div id="app">
    <div class="container">
      <todos/>
    </div>
  </div>
</template>

<script>
import Todos from "../components/todos.vue";

export default {
  name: "App",
  components: {
    Todos,
  },
  data() {
    return {
    };
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size :  20px;
  background: rgb(206, 198, 164);
}

</style>
