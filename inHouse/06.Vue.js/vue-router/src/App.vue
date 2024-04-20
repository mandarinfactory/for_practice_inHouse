<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";

import Nav from "./components/Nav.vue";

const randomState = ref("");
</script>

<template>
  <div>
    {{ randomState }}
    <Nav />
    <RouterView />
  </div>
</template>