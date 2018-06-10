<template>
  <main id="app">
    <list :data="base" :base="true" :title="'Base Templates'"></list>
    <list :data="favorites" :title="'Favorited Templates'" v-on:favorite="favorite"></list>
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
          name: "React Base Template",
          code: "Base Template for React",
          description: "Basic Template for ReactJS Questions"
        },
        {
          _id: 2,
          name: "Vue Base Template",
          code: "Basic Template for Vue",
          description: "Basic Template for VueJS Questions"
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
      if(flag) {
        const item = this.templates.find((templ)=>templ._id===template._id);
        this.favorites.unshift(item);
      } else {
        const index = this.favorites.findIndex((templ)=>template._id===templ._id);
        this.favorites.splice(index, 1);
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #000000;
  min-width: 400px;
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
