<template>
  <div id="app">
    <div class="content">
      <h1 style="text-align: center">实验报告</h1>

      <!--数据集概览-->
      <DatasetOverview title="数据集概览" csvFileName="overview"></DatasetOverview>

      <!--数据集降维可视化-->
      <ThermalDiagram title="数据集降维可视化" imagePartName="dimension"></ThermalDiagram>

      <!--实验结果-->
      <DatasetOverview title="实验结果" csvFileName="train_log"></DatasetOverview>

      <!--混淆矩阵图-->
      <ThermalDiagram title="混淆矩阵图" imagePartName="confusion"></ThermalDiagram>

      <!--结果热力图-->
      <ThermalDiagram title="结果热力图" imagePartName="result"></ThermalDiagram>
    </div>
  </div>
</template>

<script>
  import DatasetOverview from "./components/DatasetOverview"
  import ThermalDiagram from "./components/ThermalDiagram"

  export default {
    name: 'App',
    components: {
      DatasetOverview,
      ThermalDiagram
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
