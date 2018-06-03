<template>
  <li class="card">
    <div class="text">
      <h3 class="title">{{ data.name }}</h3>
      <p class="subtitle">{{ data.description }}</p>
    </div>
    <div class="icon heart" v-if="!faved" v-on:click="toggleFavorite" v-bind:class="activeHeart">
      <svg viewBox="0 0 24 24">
        <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
      </svg>
    </div>
  </li>
</template>

<script>
export default {
  name: 'card',
  props: {
    data: {
      type: Object,
      required: true
    },
    faved: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: 'Card Title',
      subtitle: 'Subtitle'
    }
  },
  computed: {
    activeHeart: function() {
      return {
        red: this.data.favorite
      }
    }
  },
  methods: {
    toggleFavorite: function() {
      this.data.favorite = !this.data.favorite;
    }
  }
};
</script>


<style scoped>
.card {
  background-color: rgba(20,20,40,0.8);
  padding: 8px 12px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  background-color: rgba(20,20,50,0.9);
  transform: translateY(-2%);
}

.card .subtitle {
  font-weight: 300;
  font-size: small;
}

.card .heart {
  position: absolute;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  color: #ffffff;
}

.card .heart.red {
  color: red;
}

.card .heart svg {
  height: 20px;
  width: 20px;
  fill: currentColor;
}
</style>


