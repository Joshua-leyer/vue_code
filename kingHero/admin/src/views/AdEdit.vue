<template>
    <div >
        <h2>{{id ? '编辑': '新建'}}广告位</h2>

        <el-form label-width="84px" @submit.native.prevent="save">


            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>

            <el-form-item label="广告">
                <el-button class="add-ads-btn" type="success" @click="model.items.push({})"> <i class="el-icon-plus"></i> 添加广告 </el-button>
                <el-row type="flex" style="flex-wrap: wrap;">
                    <el-col :md="12" v-for="(item, index) in model.items" :key="index">

                        <el-form-item label="图片">
                            <el-upload
                            class="avatar-uploader"

                            :action="$http.defaults.baseURL + '/upload' "
                            :show-file-list="false"
                            :on-success="res => $set(item, 'image', res.url)"
                            >
                            <img v-if="item.image" :src="item.image" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        
                        <el-form-item label="跳转链接">
                            <el-input v-model="item.url"></el-input>
                        </el-form-item>

                        <el-form-item class="delete-btn">
                            <el-button size="small" type="danger"
                            @click="model.items.splice(index, 1)"> Delete </el-button>
                        </el-form-item>
                    </el-col>
                </el-row>

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
                    items: []
                },
            }
        },
        beforeRouteEnter(to, from, next) {
          console.log('enter edit ')
          next()
        },
        methods: {
            async save() {
                let res;
                if (this.id) {
                    res = await this.$http.put(`/rest/ads/${this.id}`, this.model)
                } else {
                    res = await this.$http.post('/rest/ads', this.model)
                }

                this.$router.push('/ads/list')
 
                this.$message({
                    type: 'success',
                    message: 'Save Success!!!'
                })
            },
            async fetch() {
                const res = await this.$http.get(`/rest/ads/${this.id}`)
                console.log('get res is ', res)

                this.model = Object.assign({}, this.model, res.data);
                console.log(this.model)
                // 这里用这样的写法, 会覆盖掉 model 的内容, 后端最开始是空的话 , 就没有items属性 , 会导致渲染报错 .this.model = res.data
            },

        },
        created() {
            // 这个写法学习了.
            this.id && this.fetch()
        }
    }
</script>

<style scoped>
    .add-ads-btn {
        margin: .7rem;
    }
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
    min-width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
  }
  .avatar {
    min-width: 5rem;
    height: 5rem;
    display: block;
  }


.el-form-item {
    margin: 5px 0;
}

/**css复合选择器, 都忘记了... */
.delete-btn.el-form-item {
    text-align: center;
}


</style>