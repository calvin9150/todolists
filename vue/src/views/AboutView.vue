<template>
  <div class="about">
    <h1>This is a page about {{ aboutName }}</h1>
    <h2>'name' query string : {{ $route.query.name }}</h2>
    <h2>'name2' query string : {{ $route.query.name2 }}</h2>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      aboutName: "",
    };
  },
  created() {
    this.aboutName = this.$route.params.id;
  },
};
</script>
