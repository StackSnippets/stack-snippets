<template>
  <main id="app">
    <list :data="base" :base="true" :title="'Base Templates'"></list>
    <list :data="favorites" :title="'Favorited Templates'"></list>
    <list :data="templates" :title="'Community Templates'" v-on:favorite="favorite"></list>
  </main>
</template>

<script>
import List from "./List.vue";
import axios from "./constants";

export default {
  name: "app",
  data() {
    return {
      base: [
        {
          _id: 1,
          name: "wierd1",
          code: "code1",
          description: "add something"
        },
        {
          _id: 2,
          name: "wierd2",
          code: "code2",
          description: "add something else"
        }
      ],
      favorites: [],
      templates: []
    };
  },
  created() {
    axios.get("templates").then(response => {
      const templates = response.data.result;
      this.templates = templates.map(template=> {
        template.favorite = false
        return template;
      });
    });
  },
  components: {
    list: List
  },
  methods: {
    favorite(template, flag) {
      const item = this.templates.find((templ)=>templ._id===template._id);
      this.favorites.unshift(item);
    }
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #000000;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  width: 100%;
}

.icon {
  cursor: pointer;
}

.icon svg {
  width: 24px;
  height: 24px;
  fill: rgba(255, 255, 255, 0.5);
  transition: transform 400ms ease-in-out;
}

.icon svg:hover {
  fill: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}
</style>
