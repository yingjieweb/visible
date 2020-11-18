<template>
  <div class="datasetOverview">
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="type" label="类别"></el-table-column>
      <el-table-column prop="count" label="数据量"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="js">
  import axios from 'axios'

  export default {
    name: "DatasetOverview",
    created() {
      axios({
        url: '/dataset/overview.csv',
        method: 'get'
      }).then(res => {
        let dataArr = res.data.split('\n').slice(1, -1);

        let tableData = [];
        dataArr.map( item => {
          let obj = {};
          obj.type = item.split(',')[0]
          obj.count = item.split(',')[1]
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
