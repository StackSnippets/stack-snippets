<template>
  <section class="card-container">
    <h2 class="title">{{ title }}</h2>
    <div v-for="template in data" v-bind:key="template.name">
      <card :data="template"></card>
    </div>
  </section>
</template>

<script>
import Card from './Card';

export default {
  name: 'list',
  data () {
    return {
      title: 'Favorites'
    }
  },
  props: [
    'data'
  ],
  components: {
    'card': Card
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
</style>

