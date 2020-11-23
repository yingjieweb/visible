<template>
  <div class="container">
    <h2>结果热力图</h2>
    <div class="inner">
      <img src="../assets/plots/dimensionReduction.jpg" alt="">
      <img src="../assets/plots/dimensionReduction.jpg" alt="">
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "resultantThermal"
  }
</script>

<style scoped>
  .inner {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  img {
    width: 48%;
  }
</style>
