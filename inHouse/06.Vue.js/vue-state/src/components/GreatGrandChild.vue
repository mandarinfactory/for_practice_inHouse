<script setup>
import { useNumbersStore } from "../stores/numbers";

const { numbers, doubleNumber } = useNumbersStore();
</script>

<template>
  <div>
    <h1>GreatGrandChild Component {{ doubleNumber }}</h1>
  </div>
</template>
