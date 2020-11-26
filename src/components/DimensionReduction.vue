<template>
  <div class="container">
    <div class="operation">
      <span>数据集降维可视化</span>
      <div class="buttons">
        <el-popover
                style="margin-top: -5px;"
                placement="top-start"
                trigger="hover"
                content="世界上就没有我宋徐坤解决不了的问题！😏">
          <span slot="reference">😏</span>
        </el-popover>
        <img src="../assets/single.png" class="single" @click="setSingle">
        <i class="el-icon-menu" style="cursor: pointer;" @click="setDouble"></i>
        <i class="el-icon-s-grid" style="cursor: pointer;" @click="setTriple"></i>
      </div>
    </div>
    <div class="inner" :class="classes">
      <div v-for="(item, index) in imagesArr" :key="index">
        <img :src="require(`../../public/plots_1th/${item}`)" alt="">
      </div>
    </div>
    <div class="addImage">
      <el-popover
              placement="top"
              trigger="hover"
              content="点击添加图片 老弟！🤔">
        <el-button type="text" slot="reference" ><i class="el-icon-plus"></i></el-button>
      </el-popover>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "DimensionReduction",
    data() {
      return {
        classes: '',
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
    border-bottom: 1px solid #aaa9a9;
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

  .singleLayout img {
    width: 100%;
    border: 1px solid #EEEEEE;
  }

  .doubleLayout img {
    width: 50%;
    border: 1px solid #EEEEEE;
  }

  .tripleLayout img {
    width: 33.333%;
    border: 1px solid #EEEEEE;
  }

  i {font-size: 28px;}

  img {
    width: 50%;
    border: 1px solid #EEEEEE;
  }

  .addImage {
    display: flex;
    justify-content: center;
    border-top: 1px solid #aaa9a9;
  }
</style>
