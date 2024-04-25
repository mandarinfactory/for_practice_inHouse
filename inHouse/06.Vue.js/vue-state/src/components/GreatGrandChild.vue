<script setup>
import { inject } from "vue";

const numbers = inject("numbers");
</script>

<template>
  <div>
    <h1>GreatGrandChild Component {{ numbers }}</h1>
  </div>
</template>
