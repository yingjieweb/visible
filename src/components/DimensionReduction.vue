<template>
  <div class="container">
    <h2>数据集降维可视化</h2>
    <div class="inner">
      <img src="../../public/plots_1th/dimensionReduction.jpg" alt="">
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "DimensionReduction",
    created() {
      let requireModule = require.context(
          "../../public/plots_1th",
          false,
          /\.jpg$|\.png$/
      )
      let arr = []

      for (let i = 0; i < requireModule.keys().length; i++) {
        arr.push(requireModule.keys()[i].substr(2, requireModule.keys()[i].length))
      }
      console.log(arr)
    },
  }
</script>

<style scoped>
  .inner {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  img {
    width: 100%;
  }
</style>
