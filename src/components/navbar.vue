<template>
  <header class="header">
    <div id="nav">
      <h2>Todo</h2>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/profile">profile</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
</style> 