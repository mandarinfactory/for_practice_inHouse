<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";

import cars from "../data/cars.json";

const route = useRoute();
const router = useRouter();
const carID = parseInt(route.params.id);

const car = cars.find((car) => car.id === carID);

const showContact = () => {
  if (carID === 4) return;
  return router.push(`/cars/${carID}/contact`)
};
</script>

<template>
  <div v-if="car">
    <h1>CarView</h1>
    <p>{{ car.name }}</p>
    <p>{{ car.year }}</p>
    <p>{{ car.price }}</p>
    <button @click="showContact">
      Click for Contact
    </button>
    <RouterView />
  </div>
  <div v-else>
    <h1>Car is not Found</h1>
  </div>
</template>
