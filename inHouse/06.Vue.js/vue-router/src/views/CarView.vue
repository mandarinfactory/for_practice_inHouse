<script setup>
import { useRoute, RouterView } from "vue-router";

import cars from "../data/cars.json";

const route = useRoute();
const car = cars.find((car) => car.id === parseInt(route.params.id));
</script>

<template>
  <div>
    <h1>CarView</h1>
    <p>{{ car.name }}</p>
    <p>{{ car.year }}</p>
    <p>{{ car.price }}</p>
    <RouterView />
  </div>
</template>
