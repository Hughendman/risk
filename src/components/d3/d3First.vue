<template>
    <div id="canvas" ></div>
</template>

<script>
    export default {
        name: "d3-first",
        mounted(){
          d3.select('#canvas').text('Hello,yiifaa!')
        }
    }
</script>

<style scoped>

</style>
