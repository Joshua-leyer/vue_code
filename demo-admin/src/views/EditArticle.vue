<template>
    <el-form @submit.native.prevent="updateArticle" ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
        <el-input v-model="article.tittle"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" native-type="submit">修改文章</el-button>
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
        fecth() {
            console.log(this.$route.params.id);

            this.$http.get(`articles/${this.$route.params.id}`).then( res => {
                // console.log(res)
                //这里res.data是axios方面的知识点
                this.article = res.data  
            })
        },
        updateArticle() {
            this.$http.put(`update/${this.$route.params.id}`, this.article).then(res => {
                this.$message({
                    message: '文章修改成功',
                    type: 'success',
                    duration: 1024
                });
                this.$router.push('/articles/index')
            })
        }
    },
    created() {
        console.log('start fetch function')
        this.fecth()
    }
}
</script>