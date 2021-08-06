<template lang="">
  <div class="navbar-dark bg-dark p-2">
    <div class="navbar navbar-expand-lg">
      <a class="navbar-brand p-2" href="#">Prime Videos</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav p-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
          <span class="sr-only">(current)</span>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/about">Tv shows</router-link>
          <span class="sr-only">(current)</span>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/">Movies</router-link>
          <span class="sr-only">(current)</span>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/">Kids</router-link>
          <span class="sr-only">(current)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<router-link to="/">Home</router-link>
|
<router-link to="/about">About</router-link>
