<template>
  <div class="container">
    <div class="operation">
      <span>混淆矩阵图</span>
      <div class="number">
        图片总数量：
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="4" label="描述文字"></el-input-number>
        <img src="../assets/images/ong.png" alt="" style="width: 21px; margin-top: -2px; margin-right: 3px; cursor: pointer;">
        <i class="el-icon-menu" style="cursor: pointer;"></i>
        <i class="el-icon-s-grid" style="cursor: pointer;"></i>
      </div>
    </div>
    <div class="inner">
      <img class="double" src="../assets/plots/dimensionReduction.jpg" alt="">
      <img src="../assets/plots/dimensionReduction.jpg" alt="">
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "ConfusionMatrix",
    data() {
      return {
        num: 1,
        imgArr: []
      }
    },
    methods: {
      handleChange(value) {
        this.imgArr = [];
        for (let i = 1; i < value; i++) {
          this.imgArr.push({src: require(`../assets/plots/confusionMatrix${value}.jpg`)})
        }
        console.log(this.imgArr.length)
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

  .number {
    width: 390px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  i {
    font-size: 28px;
  }

  img { width: 48%;}
</style>
