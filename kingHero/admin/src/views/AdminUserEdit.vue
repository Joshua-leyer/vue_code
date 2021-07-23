<template>
    <div >
        <h2>{{id ? '编辑': '新建'}}管理员</h2>

        <el-form label-width="124px" @submit.native.prevent="save" >

            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="text" v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">Save</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        props: {
            id: {}
        },
        data() {
            return {
                model: {
                }
            }
        },
        beforeRouteEnter(to, from, next) {
          console.log('enter edit ')
          next()
        },
        methods: {
            async save() {
                let res;
                console.log('111')
                if (this.id) {
                    res = await this.$http.put(`/rest/admin_users/${this.id}`, this.model)
                } else {
                    res = await this.$http.post('/rest/admin_users', this.model)
                }

                this.$router.push('/admin_users/list')
 
                this.$message({
                    type: 'success',
                    message: 'Save Success!!!'
                })
            },
            async fetch() {
                const res = await this.$http.get(`/rest/admin_users/${this.id}`)
                console.log('get res is ', res)
                this.model = res.data
            }
        },
        beforeCreate(){
            console.log('edit vue beforeCreate')
        },
        created() {
            //这个写法学习了.
            console.log('web enter CategoryEdit vue')
            this.id && this.fetch()
        }
    }
</script>

<style scoped>
.el-form {
    max-width: 24rem;
}
</style>