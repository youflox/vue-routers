import { createLogger, createStore } from "vuex";
import axios from "axios";

const newMovies = {
  namespaced: true,
  state: {
    counter: 20,
    testing: "James",
    list: [],
    loading: false,
  },
  mutations: {
    add(state, newMovies) {
      state.list.unshift(newMovies);
    },
    set(state, newMovies) {
      newMovies.forEach((element) => {
        var src;
        if (element.show.image != null) {
          src = element.show.image.original;
        } else {
          src =
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2bbdbfa-310a-4e82-a422-3b76f36b6a9a/de5d2au-b3b38716-6346-43c8-be56-11678162fec6.png/v1/fill/w_600,h_600,q_80,strp/amazon_prime_video_logo_by_greentoonsinthe2020s_de5d2au-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvZTJiYmRiZmEtMzEwYS00ZTgyLWE0MjItM2I3NmYzNmI2YTlhXC9kZTVkMmF1LWIzYjM4NzE2LTYzNDYtNDNjOC1iZTU2LTExNjc4MTYyZmVjNi5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.VYghFEIYJRXGBfc-DZxD5ZRF72PEybBNA20Z_xzM7GI";
        }

        if (typeof(element.show.days) != "string"){
          console.log(typeof(element.show.days))
        }

        state.list.unshift({
          title: element.show.name,
          image: src,
          description: element.show.summary,
          duration: element.show.runtime + " min",
          time: element.show.schedule.time,
          days: element.show.schedule.days,
        });
      });
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async get({ commit }) {
      commit("setLoading", true);
      await axios
        .get("https://api.tvmaze.com/search/shows?q=girls")
        .then((result) => {
          commit("set", result.data);
        });
      commit("setLoading", false);
      // console.log(newMovies.state.list[0].show.image);
    },
  },
};

export default createStore({
  plugins: [createLogger()],
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { newMovies },
});
