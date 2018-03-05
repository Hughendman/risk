<template>
  <div class="d3"></div>
</template>

<script>
    export default {
        name: "d3-four",
        data(){
          return {
            data: {
              "name":"中国",
              "children":
                [
                  {
                    "name":"浙江" ,
                    "children":
                      [
                        {"name":"杭州" },
                        {"name":"宁波" },
                        {"name":"温州" },
                        {"name":"绍兴" }
                      ]
                  },

                  {
                    "name":"广西" ,
                    "children":
                      [
                        {
                          "name":"桂林",
                          "children":
                            [
                              {"name":"秀峰区"},
                              {"name":"叠彩区"},
                              {"name":"象山区"},
                              {"name":"七星区"}
                            ]
                        },
                        {"name":"南宁"},
                        {"name":"柳州"},
                        {"name":"防城港"}
                      ]
                  },

                  {
                    "name":"黑龙江",
                    "children":
                      [
                        {"name":"哈尔滨"},
                        {"name":"齐齐哈尔"},
                        {"name":"牡丹江"},
                        {"name":"大庆"}
                      ]
                  },

                  {
                    "name":"新疆" ,
                    "children":
                      [
                        {"name":"乌鲁木齐"},
                        {"name":"克拉玛依"},
                        {"name":"吐鲁番"},
                        {"name":"哈密"}
                      ]
                  }
                ]
            }
          }
        },
        mounted(){
          var width = 500,
            height = 500;

//定义数据转换函数
          var tree = d3.layout.tree()
            .size([width,height-200])
//定义对角线生成器diagonal
          var diagonal = d3.svg.diagonal()
            .projection(function(d){return [d.y, d.x]})

//定义svg
          var svg = d3.select(".d3").append("svg")
            .attr("width",width)
            .attr("height",height)
            .append("g")
            .attr("transform","translate(40,0)")

//读取json文件，进行绘图
            var root = this.data;
            var nodes = tree.nodes(root);
            var links = tree.links(nodes);

            //画点
            var node = svg.selectAll(".node")
              .data(nodes)
              .enter()
              .append("g")
              .attr("class", "node")
              .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")"
              })
            //加圈圈
            node.append("circle")
              .attr("r", 4.5)
            //加文字
            node.append("text")
              .attr("dx", function (d) {
                return d.children ? -8 : 8;
              })
              .attr("dy", 3)
              .style("text-anchor", function (d) {
                return d.children ? "end" : "start"
              })
              .text(function (d) {
                return d.name
              })

            //画线
            var line = svg.selectAll("link")
              .data(links)
              .enter()
              .append("path")
              .attr("class", "link")
              .attr("d", diagonal)

        }
    }
</script>

<style scoped>
  .d3 {
    background: #fff;
    margin: auto;
    width: 80%;
    height: 80%;
  }
  .node circle{
    fill:#fff;
    stroke:steelblue;
    stroke-width: 1.5px;
  }
  .node{
    font: 12px sans-serif;
  }
  .link{
    fill:none;
    stroke:#ccc;
    stroke-width: 1.5px;
  }
</style>
