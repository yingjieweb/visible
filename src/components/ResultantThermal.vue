<template>
  <div class="container">
    <div class="operation">
      <span>结果热力图</span>
      <div class="number">
        图片总数量：
        <el-input-number v-model="num" @change="handleChange" :min="1" label="描述文字"></el-input-number>
        <img src="../assets/images/ong.png" class="single" @click="setSingle">
        <i class="el-icon-menu" style="cursor: pointer;" @click="setDouble"></i>
        <i class="el-icon-s-grid" style="cursor: pointer;" @click="setTriple"></i>
      </div>
    </div>
    <div class="inner" :class="classes">
      <img src="../assets/plots/dimensionReduction.jpg" alt="">
      <img src="../assets/plots/dimensionReduction.jpg" alt="">
      <img src="../assets/plots/dimensionReduction.jpg" alt="">
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "resultantThermal",
    data() {
      return {
        num: 1,
        imgArr: [],
        classes: ''
      }
    },
    methods: {
      handleChange(value) {
        this.imgArr = []
        for (let i = 1; i <= value; i++) {
          this.imgArr.push({src: require(`../assets/plots/confusionMatrix${value}.jpg`)})
        }
        console.log(this.imgArr.length)
      },
      setSingle() {
        this.classes = 'singleLayout'
      },
      setDouble() {
        this.classes = 'doubleLayout'
      },
      setTriple() {
        this.classes = 'tripleLayout'
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
  }

  .number {
    width: 390px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .single {
    width: 21px;
    margin-top: -2px;
    margin-right: 3px;
    cursor: pointer;
  }

  .singleLayout > img { width: 100%}
  .doubleLayout > img { width: 50%}
  .tripleLayout > img { width: 33.333%}

  i {font-size: 28px;}

  img { width: 100%;}
</style>
