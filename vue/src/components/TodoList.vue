<template>
  <div>
    <div>
      TODO LIST
      <input type="text" v-model="inputValue" />
      <button @click="addItem">추가하기</button>
    </div>
    <ul>
      <ListItem
        v-for="(v, i) in listArray"
        :key="i"
        :text="v === '' ? `null` : v"
        :index="i"
        @delete="catchDeleteItem"
      />
    </ul>
  </div>
</template>
<script>
import ListItem from "./ListItem.vue";

export default {
  data() {
    return {
      inputValue: "",
      listArray: [],
    };
  },
  components: {
    ListItem,
  },
  methods: {
    addItem() {
      this.listArray.push(this.inputValue);
      this.inputValue = "";
      this.$store.commit("increase");
    },
    catchDeleteItem(i) {
      this.listArray.splice(i, 1);
      this.$store.commit("decrease");
    },
  },
};
</script>
<style></style>
