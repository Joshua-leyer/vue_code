<template>
    <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
        <el-input v-model="article.tittle"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
        article: {

        }
      }
    },
    methods: {
      saveArticle() {
        console.log(this.article);
        this.$http.post('createArticle', this.article).then( res => {
            console.log('axios post back data is ', res.data)
            this.$message({
              message: '文章创建成功',
              type: 'success',
              duration: 1024
            });
            this.$router.push('/articles/index')
        })
      }
    }
  }
</script>