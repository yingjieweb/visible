<template>
  <div class="experimentalResults">
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="algorithm" label="algorithm"></el-table-column>
      <el-table-column prop="accuracy" label="accuracy"></el-table-column>
      <el-table-column prop="recall" label="recall"></el-table-column>
      <el-table-column prop="precision" label="precision"></el-table-column>
      <el-table-column prop="f1_score" label="f1_score"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="js">
  import axios from 'axios'

  export default {
    name: "ExperimentalResults",
    mounted() {
      axios({
        url: '/dataset/train_log.csv',
        method: 'get'
      }).then(res => {
        let dataArr = res.data.split('\n').slice(1, -1);

        let tableData = [];
        dataArr.map( item => {
          let obj = {};
          obj.algorithm = item.split(',')[0]
          obj.accuracy = item.split(',')[1]
          obj.recall = item.split(',')[2]
          obj.precision = item.split(',')[3]
          obj.f1_score = item.split(',')[4]
          tableData.push(obj)
        })
        this.tableData = tableData
      })
    },
    data() {
      return {
        tableData: []
      }
    }
  }
</script>

<style scoped>

</style>
