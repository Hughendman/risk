<template>
  <div class="d3">
    <el-row>
      <el-col :span="6">
        <div id="chart1"></div>
      </el-col>
      <el-col :span="6">
        <div id="chart2"></div>
      </el-col>
    </el-row>
  </div>


</template>

<script>
    export default {
        name: "d3-second",
        mounted(){
          d3.select('#chart1')
            .selectAll("div")
            .data([4, 8, 15, 16, 23, 42])
            .enter()
            .append("div")
            .style("height", (d)=> d + "px")
          var colorMap = d3.interpolateRgb(
            d3.rgb('#d6e685'),
            d3.rgb('#1e6823')
          );

          d3.select('#chart2')
            .selectAll("div")
            .data([.2, .4, 0, 0, .13, .92])
            .enter()
            .append("div")
            .style("background-color", (d)=> {
              return d == 0 ? '#eee' : colorMap(d);
            })
        }
    }
</script>

<style>
  .d3 {
    padding: 20px;
  }
  #chart1 div {
    display: inline-block;
    background: #4285F4;
    width: 20px;
    margin-right: 3px;
  }
  #chart2 div {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 3px;
  }
</style>
