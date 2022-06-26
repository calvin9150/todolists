<template>
  <li>
    {{ text }}
    <button @click="itemDelete">삭제</button>
  </li>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    itemDelete() {
      this.$emit("delete", this.index);
    },
  },
};
</script>
<style lang=""></style>
