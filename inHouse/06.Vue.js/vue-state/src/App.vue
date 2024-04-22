<script setup>
import { ref, reactive } from "vue";

/* const red = ref(0);
const blue = ref(0);
const green = ref(0); */

/* const color = ref({
  red: 0,
  blue: 0,
  green: 0,
}); */

const color = reactive({
  red: 0,
  blue: 0,
  green: 0,
});

const selectRandomColor = () => {
  color.red = 266;
  color.blue = 216;
  color.green = 170;
}
</script>

<template>
  <main
    :style="{
      backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
    }"
  >
    <div>
      <input type="number" v-model="color.red" placeholder="red" />
      <input type="number" v-model="color.blue" placeholder="blue" />
      <input type="number" v-model="color.green" placeholder="green" />
      <button @click="selectRandomColor">랜덤색상으로 선택하기!</button>
    </div>
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
