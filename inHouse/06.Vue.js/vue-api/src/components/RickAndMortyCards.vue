<script setup>
import axios from "axios";
import { ref, watch } from "vue";

const characters = ref(null);
const page = ref(0);
const response = await axios.get("https://rickandmortyapi.com/api/character");
characters.value = response.data;

watch(page, async () => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character?limit=8&offset=${page.value * 8}`
  );
});
</script>

<template>
  <div>
    <n-button type="primary">
      Primary
    </n-button>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(27, 26, 26);
  padding: 30px;
}
.cards {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.cards h3 {
  font-weight: bold;
}
.cards p {
  font-size: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.button-container button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 0 5px;
  cursor: pointer;
}
</style>
