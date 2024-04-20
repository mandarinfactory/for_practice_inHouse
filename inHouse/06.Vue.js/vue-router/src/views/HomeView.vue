<script setup>
import { RouterLink } from "vue-router";

import cars from "../data/cars.json";
</script>

<template>
  <div>
    <h1>Home View</h1>
    <div class="cars">
      <RouterLink class="carsAnchor" v-for="car in cars" :key="car.id" :to="`/cars/${car.id}`">
        {{ car.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cars {
  display: flex;
}
.carsAnchor {
  text-decoration: none;
  color: black;
  font-size: x-large;
  width: 100%;
  margin: 10px;
  box-shadow: 1px 1px 10px black;
}
</style>
