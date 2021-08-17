<template>

</template>



<script>
  export default {
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
  };
</script>


<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  /** 这里如果添加了 scoped 属性, 就会无效,。。。。??? > done */
  .el-collapse-item__header {
    font-size: 22px !important;
  }

  .collapse-title {
    flex: 1 0 50%;
    order: 1;
  }
  .el-collapse-item__arrow {
    order: -1;
  }

  /**这种方式添加了scoped属性也可以有作用  keyword深度作用选择器. */
  /* // .myStyle >>> .el-collapse-item__header {
  //   font-size: 22px;
  // } */
  
  /* .myStyle {
    /deep/ .el-collapse-item__header {
      font-size: 22px;
    }
  } */

</style>