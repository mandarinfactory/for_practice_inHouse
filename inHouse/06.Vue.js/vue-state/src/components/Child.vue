<script setup>
import GrandChild from "./GrandChild.vue";
import {useNumbersStore} from "../stores/numbers"

const { numbers, addNumber } = useNumbersStore();
</script>

<template>
  <div>
    <h1>Child Component {{ numbers }}</h1>
    <button @click="addNumber(42)">Add</button>
    <div class="line"></div>
    <GrandChild />
  </div>
</template>
