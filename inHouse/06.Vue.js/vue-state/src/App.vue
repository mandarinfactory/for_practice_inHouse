<script setup>
import Parent from "./components/Parent.vue";
</script>

<template>
  <main>
    <Parent />
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
