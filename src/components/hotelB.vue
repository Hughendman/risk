<template>
  <div>
    <button @click="show()">打开</button>
    <dialog id="dialog">
      <h1>这是dialog标题</h1>
      <div>这是dialog的内容</div>
      <button @click="show()">关闭</button>
    </dialog>
  </div>
</template>

<script>
    export default {
        name: "hotel-b",
      methods: {
          show(){
            $("#dialog").open();
          },
          close(){
            $("#dialog").close();
          }
      }
    }
</script>

<style scoped>

</style>
