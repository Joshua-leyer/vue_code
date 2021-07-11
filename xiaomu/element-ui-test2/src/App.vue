<template>
  <el-form :inline="true" :model="formInline" :rules="rules" ref="form" class="demo-form-inline">
    <el-form-item label="审批人" prop="user">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      const userValidator = (rule, value, callback) => {
        if (value.length > 3) {
          callback()
        } else {
          callback(new Error('user length must > 3'))
        }
      }
      return {
        formInline: {
          user: '',
          region: ''
        },
        rules: {
          user: [
            { required: true, min: 3, max: 5, trigger: 'change', message: '用户输入...'},
            {
              validator: userValidator, trigger: 'change'
            }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
            // from.validate 是 element 的官网提供的api , 其验证规则就是上面自己写的rules对象中的内容.
            // 教程也不详细说, 官网更扯淡.
        this.$refs.form.validate((isValid, errors) => {
          console.log(isValid, errors)
        })
      }
    }
  }
</script>
