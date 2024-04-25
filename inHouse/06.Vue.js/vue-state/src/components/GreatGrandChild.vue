<script setup>
import { defineProps } from "vue";

const { numbers } = defineProps(["numbers"]);
</script>

<template>
  <div>
    <h1>GreatGrandChild Component {{ numbers }}</h1>
  </div>
</template>
