<script setup lang="ts">
let name = "DeAngelo";
let age = 38;
let gay = false;
let occupation: string;

age = 32;
occupation = "Software Developer";

const arrayOfNumbers: (string | number)[] = [];

interface Employee {
  name: string;
  age: number;
  gay: boolean;
  occupation?: string;
}

const employee: Employee = {
  name: "Brent",
  age: 29,
  gay: true,
};

employee.occupation = "Frontend Developer";
</script>

<template>
  <main></main>
</template>
