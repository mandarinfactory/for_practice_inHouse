<script setup>
import Userbar from "./Userbar.vue";
import Container from "./Container.vue";
import ImageGallery from "./ImageGallery.vue";
</script>

<template>
  <Container>
    <div class="profileContainer">
      <Userbar
        :userInfo="{
          posts: 5,
          followers: 130,
          followings: 1450,
        }"
      />
      <ImageGallery
        :posts="[
          {
            id: 1,
            image: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww`,
          },
          {
            id: 2,
            image: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww`,
          },
        ]"
      />
    </div>
  </Container>
</template>

<style scoped>
.profileContainer {
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
