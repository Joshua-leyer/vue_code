<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">

          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/stm32">STM32</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/about">about</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/list">list</router-link>
              </el-menu-item>
            </el-menu-item-group>

          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Joshua</span>
        </el-header>
        
        <el-main>
              <router-view> 

              </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  
  name: 'App',
  data() {
    return {
      activeNames: ["1"]
    }
  },
  methods: {
    handleChange(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
  .el-header {
    background-color: #93dfff;
    color: #333;
    line-height: 60px;
    font-size: 1.5rem !important;
  }
  


  .el-aside {
    background-color: #93dfff !important;

    color: #333;
  }


</style>
