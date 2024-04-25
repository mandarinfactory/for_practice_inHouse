<script setup>
import { useNumbersStore } from "../stores/numbers";

const { numbers, doubleNumber, filterNumber } = useNumbersStore();
</script>

<template>
  <div>
    <h1>GreatGrandChild Component {{ filterNumber(40) }}</h1>
  </div>
</template>
