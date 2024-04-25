<script setup>
import { ref } from "vue";

import Parent from "./components/Parent.vue";

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);
</script>

<template>
  <main>
    <Parent :numbers="numbers" />
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
div {
  display: flex;
  flex-direction: column;
}
f input {
  margin-bottom: 10px;
}
</style>
