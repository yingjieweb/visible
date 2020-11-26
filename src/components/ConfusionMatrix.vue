<template>
  <div class="container">
    <div class="operation">
      <span>混淆矩阵图</span>
      <div class="buttons">
        <el-popover
                style="margin-top: -5px;"
                placement="top-start"
                trigger="hover"
                content="世界上就没有我宋徐坤解决不了的问题！😏">
          <span slot="reference">😏</span>
        </el-popover>
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
    name: "ConfusionMatrix",
    data() {
      return {
        classes: ''
      }
    },
    created() {
      let requireModule = require.context(
          "../assets/plots",
          false,
          /\.jpg$/
      )
      let arr = []

      for (let i = 0; i < requireModule.keys().length; i++) {
        arr.push(requireModule.keys()[i].substr(2, requireModule.keys()[i].length))
      }
      console.log(arr)
    },
    methods: {
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

  .buttons {
    width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .single {
    width: 21px;
    margin-top: -2px;
    margin-right: 2px;
    cursor: pointer;
  }

  .singleLayout > img {
    width: 100%;
    border: 1px solid #EEEEEE;
  }

  .doubleLayout > img {
    width: 50%;
    border: 1px solid #EEEEEE;
  }

  .tripleLayout > img {
    width: 33.333%;
    border: 1px solid #EEEEEE;
  }

  i {font-size: 28px;}

  img {
    width: 100%;
    border: 1px solid #EEEEEE;
  }
</style>
