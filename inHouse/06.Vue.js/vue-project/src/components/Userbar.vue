<script setup>
import { defineProps } from "vue";

const props = defineProps(["userInfo"]);
</script>

<template>
  <div class="userbarContainer">
    <div class="bottomContent">
      <ATypographyTitle :level="5"> {{ props.userInfo.posts }} posts </ATypographyTitle>
      <ATypographyTitle :level="5"> {{ props.userInfo.followers }} followers </ATypographyTitle>
      <ATypographyTitle :level="5"> {{ props.userInfo.followings }} followings </ATypographyTitle>
    </div>
  </div>
</template>

<style scoped>
.userbarContainer {
  padding-bottom: 75px;
}
.bottomContent {
  display: flex;
  align-items: center;
}
.bottomContent h5 {
  margin: 0;
  padding: 0;
  margin-right: 30px;
}
</style>
