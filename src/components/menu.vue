<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        router
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>风控平台</span>
          </template>
          <el-menu-item-group>
            <template slot="title">风控测试</template>
            <el-menu-item index="/A">测试1</el-menu-item>
            <el-menu-item index="/B">测试2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="d3测试">
            <el-menu-item index="/d3_first">基础</el-menu-item>
            <el-menu-item index="/d3_second">应用</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20" class="right">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "menu"
    }
</script>

<style>
  .tac {
    height: 100%;
  }
  .el-col,.el-col ul{
    height: 100%;
  }
  .right {
    height: 100%;
    overflow-y:auto;
  }
</style>
