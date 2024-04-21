<template>
  <Ncard title="Card with Cover">
    <template #cover>
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
    </template>
    Card Content
  </Ncard>
</template>

<style scoped>
.n-card {
  width: 200px;
  margin: 10px 20px;
}
.n-card img {
  height: 250px;
}

p {
  font-size: 10px;
}

.jobs {
  display: flex;
  flex-wrap: wrap;
}
</style>
