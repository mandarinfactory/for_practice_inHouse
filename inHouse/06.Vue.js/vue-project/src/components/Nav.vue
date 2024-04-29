<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

import Container from "./Container.vue";
import AuthModal from "./AuthModal.vue";

const router = useRouter();
const searchUsername = ref("");
const isAuthenticated = ref(false);

const onSearch = () => {
  if (searchUsername.value) {
    router.push(`/profile/${searchUsername.value}`);
    searchUsername.value = "";
  }
};
</script>

<template>
  <div class="header">
    <Container>
      <div class="navContainer">
        <div class="rightContent">
          <RouterLink to="/">Anstagram</RouterLink>
          <AInputSearch
            v-model:value="searchUsername"
            placeholder="name...."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="leftContent" v-if="!isAuthenticated">
          <AuthModal :isLogin="false" />
          <AuthModal :isLogin="true" />
        </div>
        <div class="leftContent" v-else>
          <AButton type="primary">Profile</AButton>
          <AButton type="primary">Logout</AButton>
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
.leftContent {
  display: flex;
  align-items: center;
}
.leftContent button {
  margin-left: 10px;
}
</style>
