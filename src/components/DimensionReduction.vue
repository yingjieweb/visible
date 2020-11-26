<template>
  <div class="container">
    <h2>数据集降维可视化</h2>
    <div class="inner">
      <div v-for="(item, index) in imagesArr" :key="index">
        <img :src="require(`../../public/plots_1th/${item}`)" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "DimensionReduction",
    data(){
      return {
        imagesArr: []
      }
    },
    created() {
      let requireModule = require.context(
          "../../public/plots_1th",
          false,
          /\.jpg$|\.png$|\.jpeg$/
      )

      let imagesArr = []
      for (let i = 0; i < requireModule.keys().length; i++) {
        imagesArr.push(requireModule.keys()[i].substr(2, requireModule.keys()[i].length))
      }
      this.imagesArr = imagesArr
    },
  }
</script>

<style scoped>
  .inner {
    width: 100%;
  }
  img {
    width: 100%;
  }
</style>
