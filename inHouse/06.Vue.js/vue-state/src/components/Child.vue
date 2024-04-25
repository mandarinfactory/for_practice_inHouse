<script setup>
import { inject } from "vue";

import GrandChild from "./GrandChild.vue";

const numbers = inject("numbers");
</script>

<template>
  <div>
    <h1>Child Component {{ numbers }}</h1>
    <div class="line"></div>
    <GrandChild />
  </div>
</template>
