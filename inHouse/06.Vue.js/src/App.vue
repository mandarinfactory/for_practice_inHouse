<template>
  <div>
    <h2>{{ products[0] }}</h2>
    <p>5,000만원</p>
  </div>
  <div>
    <h2>{{ products[1] }}</h2>
    <p>4,700만원</p>
  </div>
  <div>
    <h2>{{ products[2] }}</h2>
    <p>6,500만원</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  }, // vue.js는 여기다가 data를 보관한다. => react에서 useState역할을 한다.
  components: {},
};
</script>

<style></style>
