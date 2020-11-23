<template>
  <div class="container">
    <div class="operation">
      <span>混淆矩阵图</span>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="4" label="描述文字"></el-input-number>
    </div>
    <div class="inner">
      <img src="../assets/plots/dimensionReduction.jpg" alt="">
      <img src="../assets/plots/dimensionReduction.jpg" alt="">
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "ConfusionMatrix",
    data() {
      return {
        num: 1
      }
    },
    methods: {
      handleChange() {

      }
    }
  }
</script>

<style scoped>
  span {
    font-size: 24px;
    font-weight: bold;
  }
  .operation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .inner {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  img {
    width: 48%;
  }
</style>
