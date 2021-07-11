<template>
    <el-collapse v-model="activeNames" @change="handleChange">

        <el-collapse-item name="1"  class="my-collapse-item">
        <span class="collapse-title" slot="title">section one</span>
          <radio></radio>
        </el-collapse-item>

        <el-collapse-item  name="2" >
        <span class="collapse-title" slot="title">section two</span>
          <delay></delay>
        </el-collapse-item>

        <el-collapse-item  name="3" >
        <span class="collapse-title" slot="title">section three</span>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        </el-collapse-item>

        <el-collapse-item  name="4" >
        <span class="collapse-title" slot="title">section four</span>
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        </el-collapse-item>

    </el-collapse>
</template>

<script>

import Radio from '../components/Radio'
import Delay from '../components/delay'


  export default {
    name: 'STM32',
    data() {
      return {
        activeNames: ["1"]
      }
    },
    components: {
      Radio,
      Delay
    },
    methods: {
      handleChange(e) {
        console.log(e)
      }
    }
  };
</script>







<style  scoped>

  .el-header {
    background-color: #66b1ff;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #66b1ff;
  }

  /** 这里如果添加了 scoped 属性, 就会无效,。。。。??? > done */
  .el-collapse-item__header {
    font-size: 33px !important;
  }



  .collapse-title {
    flex: 1 0 50%;
    order: 1;
  }
  .el-collapse-item__arrow {
    order: -1;
  }



  /** 这种方式添加了scoped属性也可以有作用  keyword 深度作用选择器. */
  .el-collapse-item >>> .el-collapse-item__header {
    font-size: 22px;
  }


  /**展开后区域的大小设定 */
  .el-collapse-item >>> .el-collapse-item__wrap {
    padding-left: 24px;
  }

  /* .el-collapse:hover >>> .myStyle {
    background: violet !important;
  } */



  .el-collapse-item:hover {
    background: red;
    color: red;
  }

  .collapse-title:hover {
    color: orange;
  }


</style>


