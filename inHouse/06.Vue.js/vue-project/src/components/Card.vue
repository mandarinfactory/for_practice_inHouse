<script setup>
import { defineProps } from "vue";

const props = defineProps(["post"]);
</script>

<template>
  <ACard hoverable style="width: '240px'" class="card">
    <template #cover>
      <img :src="props.post?.url" alt="example" />
    </template>
    <ACardMeta :title="props.post?.username">
      <template #description> {{ props.post?.caption }} </template>
    </ACardMeta>
  </ACard>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
