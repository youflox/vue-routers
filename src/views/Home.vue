<template>
  <div class="container-fluid">
    <div class="wrapper">
      <div class="item" v-for="(list, index) in apiData" :key="index">
        <Tile
          class="tile"
          :title="list.title"
          :image="list.image"
          :description="list.description"
          :duration="list.duration + ' min'"
          :days="list.days[0]"
          :time="list.time"
        />
      </div>
    </div>
    <div class="wrapper">
      <div class="item" v-for="(list, index) in apiData" :key="index">
        <Tile
          class="tile"
          :title="list.title"
          :image="list.image"
          :description="list.description"
          :duration="list.duration + ' min'"
          :days="list.days[0]"
          :time="list.time"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tile from "../components/Tiles.vue";
import store from "../store/index.js";

export default {
  name: "Home",
  components: {
    Tile,
  },
  data() {
    return {
      test: "What",
      apiData: null,
    };
  },
  methods: {
    async getdata() {
      await store.dispatch("newMovies/get");
      this.apiData = store.state.newMovies.list;
      console.log(this.apiData);
    },
  },
  beforeCreate() {},
  mounted() {
    console.log("oi");
    this.getdata();
  },
};
</script>

<style scoped>
.wrapper {
  min-height: 110px;
  max-height: 820px;
  overflow-y: hidden;
  display: flex;
  margin: 2px;
}

.wrapper item {
  min-width: 110px;
  height: 110px;
  line-height: 110px;
  text-align: center;
  background-color: white;
}

.wrapper::-webkit-scrollbar {
  width: 0;
}
</style>
