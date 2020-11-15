<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="isLoadingData">
      <h2 style="color: green;">Loading data...</h2>
    </div>
    <div v-if="!isLoadingData"><h2>Welcome to Home Page</h2></div>
  </div>
</template>
<script src="./js/home.js"></script>
<style lang="scss" scoped>
@import "@/scss/index.scss";
.home {
  border: 1px solid $color-grey-dark1;
}
</style>
