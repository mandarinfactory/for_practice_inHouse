<script setup lang="ts">
import { defineProps } from "vue";

enum GENDER {
  MALE,
  FEMALE,
}

defineProps<{
  invitee: {
    id: number;
    name: string;
    gender: GENDER;
  };
}>();
</script>

<template>
  <div
    :style="{
      backgroundColor:
        invitee.gender === GENDER.MALE ? 'rgb(8,111,111)' : 'rgb(111,18,8)',
    }"
  >
    {{ invitee.name }}
  </div>
</template>

<style scoped>
div {
  background-color: darkblue;
  padding: 5px;
  margin-top: 5px;
  border-radius: 7px;
  text-align: center;
  color: white;
}
</style>
Z
