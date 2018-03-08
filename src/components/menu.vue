<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        router
        text-color="#fff"
        :unique-opened="true"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>风控平台</span>
          </template>
          <el-menu-item index="/A">测试1</el-menu-item>
          <el-menu-item index="/B">测试2</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>d3使用</span>
          </template>
          <el-menu-item index="/d3_first">基础</el-menu-item>
          <el-menu-item index="/d3_second">应用1</el-menu-item>
          <el-menu-item index="/d3_three">应用2</el-menu-item>
          <el-menu-item index="/d3_four">应用3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-printer"></i>
            <span>d3深入</span>
          </template>
          <el-menu-item index="/d3_circles">circles</el-menu-item>
          <el-menu-item index="/d3_init">init</el-menu-item>
          <el-menu-item index="/d3_chord">chord</el-menu-item>
          <el-menu-item index="/d3_test">test</el-menu-item>
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
