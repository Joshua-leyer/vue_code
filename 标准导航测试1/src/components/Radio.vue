<template>
  <el-radio-group v-model="radio" @change="changeRadio">
    <el-radio :label="1">烧录过程中减次数</el-radio>
    <el-radio :label="2">触发烧录后减次数</el-radio>
    <el-radio :label="3">烧录中断或失败后减次数</el-radio>
    <el-radio :label="4">检测到芯片后减次数</el-radio>
    <el-radio :label="5">确认烧录全部完成后减次数</el-radio>
  </el-radio-group>

</template>

<script>

/**镜像次数限定及减次数模式 */

  export default {
    name: 'Radio',
    data () {
        return {
            radio: 3
        };
    },
    methods: {
        changeRadio(e) {
            console.log(e)
        }
    }
  }
</script>

<style scoped>

</style>
