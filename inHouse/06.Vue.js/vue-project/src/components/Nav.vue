<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import Container from "./Container.vue";

const searchUsername = ref("");

const onSearch = () => {};
</script>

<template>
  <div class="header">
    <Container>
      <div class="navContainer">
        <div class="rightContent">
          <RouterLink to="/">Anstagram</RouterLink>
          <AInputSearch
            v-model:value="value"
            placeholder="name...."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="leftContent">
          <AButton type="primary">SignUp</AButton>
          <AButton type="primary">LogIn</AButton>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 5px;
  background-color: black;
}
.navContainer {
    display: flex;
    justify-content: space-between;
}
.rightContent {
    display: flex;
    align-items: center;
}
.rightContent a {
    margin-right: 10px;
    font-weight: 700;
    text-decoration: none;
    color: white;
}
.leftContent button {
    margin-left: 10px
}
</style>
