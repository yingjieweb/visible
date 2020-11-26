<template>
  <div id="app">
    <div class="content">
      <h1 style="text-align: center">实验报告</h1>

      <!--数据集概览-->
      <DatasetOverview></DatasetOverview>

      <!--数据集降维可视化-->
      <DimensionReduction></DimensionReduction>

      <!--实验结果-->
      <ExperimentalResults></ExperimentalResults>

      <!--混淆矩阵图-->
      <ConfusionMatrix></ConfusionMatrix>

      <!--结果热力图-->
      <ResultantThermal></ResultantThermal>
    </div>
  </div>
</template>

<script>
  import DatasetOverview from "./components/DatasetOverview"
  import DimensionReduction from "./components/DimensionReduction"
  import ExperimentalResults from "./components/ExperimentalResults"
  import ConfusionMatrix from "./components/ConfusionMatrix"
  import ResultantThermal from "./components/ResultantThermal"

  export default {
    name: 'App',
    components: {
      DatasetOverview,
      DimensionReduction,
      ExperimentalResults,
      ConfusionMatrix,
      ResultantThermal
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .content {
    width: 70vw;
  }

  .container {
    border: 1px solid #aaa9a9;
    padding: 2px;
    margin-top: -1px;
  }

  h1, h2 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
