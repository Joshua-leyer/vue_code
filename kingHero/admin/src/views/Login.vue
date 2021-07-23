<template>
    <div class="login-container">
        <el-card header="登录" class="login-card">
            <el-form @submit.native.prevent="login">
                <el-form-item label="用户名">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="model.password"></el-input>
                </el-form-item>
                <el-form-item class="login-btn">
                    <el-button type="primary" native-type="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                model: {}
            }
        },
        methods: {
            async login() {
                // console.log(this.model)
                const res = await this.$http.post('login', this.model)
                console.log(res)
                // localStorage.token = res.data.token
                localStorage.setItem('token', res.data.token)
                this.$router.push('/')
                
                this.$message({
                    type: 'success',
                    message: 'login success!'
                })

            }
        }
    }
</script>

<style scoped>

.login-card {
    height:  30rem;
    width: 30rem;
    margin: 10rem auto;
}

.login-btn {
    text-align: center;
}
 
</style>