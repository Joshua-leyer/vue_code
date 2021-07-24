<template>
    <div >
        <h2>{{id ? '编辑': '新建'}}物品</h2>

        <el-form label-width="124px" @submit.native.prevent="save">


            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>

            <el-form-item label="图标">
                <el-upload
                class="avatar-uploader"
                
                :action="$http.defaults.baseURL + '/upload' "
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="afterUpload"
                >
                <img v-if="model.icon" :src="model.icon" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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

                },
                parents: []
            }
        },
        methods: {
            async save() {
                let res;
                console.log('111')
                if (this.id) {
                    res = await this.$http.put(`/rest/items/${this.id}`, this.model)
                } else {
                    res = await this.$http.post('/rest/items', this.model)
                }

                this.$router.push('/items/list')
 
                this.$message({
                    type: 'success',
                    message: 'Save Success!!!'
                })
            },
            async fetch() {
                const res = await this.$http.get(`/rest/items/${this.id}`)
                console.log('get res is ', res)
                this.model = res.data
            },
            // 这里, 是怎么知道这个函数可以接受一个参数的?  A_ element官网有, 不过不够具体
            afterUpload(res) {
                console.log(res)
                this.$set(this.model, 'icon', res.url)
                // this.model.icon = res.url  //一开始model 里面不存在icon属性, 现在这样直接赋值, 无法更新,
                
                // console.log(this.model)
            }
        },
        created() {
            //这个写法学习了.
            this.id && this.fetch()
        }
    }
</script>

<style scoped>


  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
  }
  .avatar {
    width: 5rem;
    height: 5rem;
    display: block;
  }

</style>