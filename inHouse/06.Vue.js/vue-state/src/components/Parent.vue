<script setup>
import { defineProps } from "vue";

import Child from "./Child.vue";

const { numbers } = defineProps(["numbers"]);
</script>

<template>
  <div>
    <h1>Parent Component</h1>
    <div class="line"></div>
    <Child :numbers="numbers" />
  </div>
</template>
