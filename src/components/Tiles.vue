<template lang="">
  <div class="card m-5" style="width: 20rem">
    <img
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :src="image"
      class="card-img-top tile"
    />
    <div class="card-body" :class="{ disable: hover, info: !hover }">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <p class="card-text">
        {{ duration }} &nbsp; <span> {{ days }}</span> &nbsp;
        <span> {{ time }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    title: {
      type: String,
    },

    description: {
      type: String,
      default: "Movie",
    },

    time: {
      required: true,
      type: String,
    },

    days: {
      required: true,
      type: String,
    },

    duration: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  methods: {
    mouserOver() {
      this.mouseover = true;
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
.info {
  display: none;
}

img::after{
  content: " <- BORING";
  color: red;
}

.disable {
  position: absolute;
  top: 100px;
  z-index: 2;
}

</style>
