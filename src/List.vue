<template>
  <section class="card-container">
    <h2 class="title">{{ title }}</h2>
    <div v-for="template in data" v-bind:key="template._id">
      <card :data="template" :faved="base" v-on:favorite="favorite"></card>
    </div>
    <div v-if="data.length===0" class="list-empty-error">
      No templates to display. Show some love.
    </div>
  </section>
</template>

<script>
import Card from './Card';

export default {
  name: 'list',
  data () {
    return {
      
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ''
    },
    base: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'card': Card
  },
  methods: {
    favorite(template, flag) {
      this.$emit('favorite', template, flag);
    }
  }
}
</script>

<style scoped>
.card-container {
  margin: 2rem 1rem;
}

.card-container .search-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 2rem;
}

.card-container h2.title {
  text-transform: uppercase;
  font-size: small;
  margin-left: 1rem;
  color: #BDBDBD;
}

.list-empty-error {
  color: #BDBDBD;
  text-align: center;
}
</style>

