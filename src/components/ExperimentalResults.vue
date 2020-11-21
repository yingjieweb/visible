<template>
  <div class="experimentalResults">
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column v-for="item in propsArr" :key="item" :prop="item" :label="item"></el-table-column>
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
        let nameArr = res.data.split('\n').slice(0, 1)[0].split(',') // ["kind", "count", "number"]
        let dataArr = res.data.split('\n').slice(1, -1) // ["A,111,222", "B,111,222"]

        this.propsArr = nameArr

        let obj = {}
        nameArr.map((item) => {
          obj[item] = ''
        })
        dataArr.map(item => {
          item.split(',').map( (i, index) => {
            obj[nameArr[index]] = i;
          })
          this.tableData.push((JSON).parse(JSON.stringify(obj)))
        })
      })
    },
    data() {
      return {
        propsArr: [],
        tableData: []
      }
    }
  }
</script>

<style scoped>

</style>
