<template>
  <div id="app">
    <div class="content">
      <h1 style="text-align: center">实验报告</h1>

      <h2>数据集概览</h2>
      <DatasetOverview></DatasetOverview>

      <h2>数据集降维可视化</h2>
      <DimensionReduction></DimensionReduction>

      <h2>实验结果</h2>
      <ExperimentalResults></ExperimentalResults>

      <h2>混淆矩阵图</h2>
      <ConfusionMatrix></ConfusionMatrix>

      <h2>结果热力图</h2>
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
  }

  .content {
    width: 70vw;
  }

  h1, h2 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
