<script setup>
import { defineProps } from "vue";

import GreatGrandChild from "./GreatGrandChild.vue";

const { numbers } = defineProps(["numbers"]);
</script>

<template>
  <div>
    <h1>GrandChild Component</h1>
    <div class="line"></div>
    <GreatGrandChild :numbers="numbers" />
  </div>
</template>
