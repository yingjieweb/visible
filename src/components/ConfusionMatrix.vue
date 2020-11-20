<template>
  <div class="confusionMatrix">
    <img src="../assets/plots/picture.jpg" alt="">
    <img src="../assets/plots/picture.jpg" alt="">
  </div>
</template>

<script lang="js">
  export default {
    name: "ConfusionMatrix"
  }
</script>

<style scoped>
  .confusionMatrix {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  img {
    width: 48%;
  }
</style>
