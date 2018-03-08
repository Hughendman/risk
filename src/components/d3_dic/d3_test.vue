<template>
  <div class="d3">
    <nav></nav>
  </div>
</template>

<script>
    export default {
        name: "d3_test",
        created(){
          this.forEachIVar();
        },
        methods:{
          forEachIVar(){
            for(var i =0;i<5;i++){
              setTimeout(function(){
                console.log(i);
              },5000)
              console.log(i);
            }
          },
          forEachILet(){
            for(var i =0;i<5;i++){
              setTimeout(function(){
                console.log(i);
              },5000)
              console.log(i);
            }
          },
          pie(){
            var width = 600;
            var height = 600;
            var dataset = [ 30 , 10 , 43 , 55 , 13 ];

            var svg = d3.select(".d3").append("svg")
              .attr("width",width)
              .attr("height",height);

            var pie = d3.layout.pie();

            var outerRadius = width / 2;
            var innerRadius = width / 4;
            var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius);

            var color = d3.scale.category10();

            var arcs = svg.selectAll("g")
              .data(pie(dataset))
              .enter()
              .append("g")
              .attr("transform","translate("+outerRadius+","+outerRadius+")");

            arcs.append("path")
              .attr("fill",function(d,i){
                return color(i);
              })
              .attr("d",function(d){
                return arc(d);
              });

            arcs.append("text")
              .attr("transform",function(d){
                return "translate(" + arc.centroid(d) + ")";
              })
              .attr("text-anchor","middle")
              .text(function(d){
                return d.value;
              });
          }
        },mounted(){
          this.pie();
      }
    }
</script>

<style scoped>
.d3{
  text-align: center;
  margin-top: 50px;
}
</style>
