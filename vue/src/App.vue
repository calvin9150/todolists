<template>
  <div id="app">
    <div class="count">일정 수 : {{ count }}</div>
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about', params: { id: 'null' } }"
        >About</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },

  computed: mapState({
    count: (state) => state.count,
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
