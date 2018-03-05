<template>
  <div id="hotel">
    <el-card class="box-card">
      <div id="hotelCheck">
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content">酒店名称</div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple"><el-input v-model="name"></el-input></div></el-col>
          <el-col :span="4"><el-button type="primary">查询</el-button></el-col>
        </el-row>
      </div>
      <div id="timeArea">
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content">时间范围</div></el-col>
          <el-col :span="16">
            <el-slider
              v-model="value"
              range
              show-stops
              :max="12">
            </el-slider>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
    export default {
        name: "hotel",
        data() {
          return {
            name:"yinxs",
            value:[4,8]
          }
        },
        created() {

        },
        mounted(){
        }
    }
</script>

<style scoped>
  #hotel {
    width: 60%;
    padding: 5%;
    margin: 0 auto;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 40px;
    text-align: right;
    line-height: 40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
