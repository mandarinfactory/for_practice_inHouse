<script setup>
import { defineProps } from "vue";

import GrandChild from "./GrandChild.vue";

const { numbers } = defineProps(["numbers"]);
</script>

<template>
  <div>
    <h1>Child Component{{ numbers }}</h1>
    <div class="line"></div>
    <GrandChild :numbers="numbers" />
  </div>
</template>
