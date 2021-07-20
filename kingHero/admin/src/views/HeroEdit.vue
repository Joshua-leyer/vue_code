<template>
    <div >
        <h2>{{id ? '编辑': '新建'}}英雄</h2>

        <el-form label-width="124px" @submit.native.prevent="save">

            <el-tabs value="skills">
                <el-tab-pane label="基础信息">
                    <el-form-item label="名称">
                        <el-input v-model="model.name"></el-input>
                    </el-form-item>

                    <el-form-item label="称号">
                        <el-input v-model="model.tittle"></el-input>
                    </el-form-item>

            
                    <el-form-item label="类型">
                        <el-select v-model="model.categories" multiple>
                            <el-option v-for="item of categories" :label="item.name" :value="item._id" :key="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="难度">
                        <el-rate v-model="model.scores.difficult" :max="9" show-score style="margin-top: 0.6rem"></el-rate>
                    </el-form-item>

                    <el-form-item label="技能">
                        <el-rate v-model="model.scores.skills" :max="9" show-score style="margin-top: 0.6rem"></el-rate>
                    </el-form-item>
                    <el-form-item label="攻击">
                        <el-rate v-model="model.scores.attack" :max="9" show-score style="margin-top: 0.6rem"></el-rate>
                    </el-form-item>
                    <el-form-item label="生存">
                        <el-rate v-model="model.scores.survive" :max="9" show-score style="margin-top: 0.6rem"></el-rate>
                    </el-form-item>


                    <el-form-item label="顺风出装">
                        <!-- 这里不是很懂model.items1 ？  -->
                        <el-select v-model="model.items1" multiple>
                            <el-option v-for="item of items" :label="item.name" :value="item._id" :key="item._id">
                            </el-option> 
                        </el-select>
                    </el-form-item>

                    <el-form-item label="逆风出装">
                        <el-select v-model="model.items2" multiple>
                            <el-option v-for="item of items" :label="item.name" :value="item._id" :key="item._id">
                            </el-option> 
                        </el-select>
                    </el-form-item>

                    <el-form-item label="使用技巧">
                        <el-input type="textarea" :rows="4"  v-model="model.usageTips"></el-input>
                    </el-form-item>

                    <el-form-item label="对抗技巧">
                        <el-input type="textarea" :rows="4" v-model="model.battleTips"></el-input>
                    </el-form-item>

                    <el-form-item label="团战思路">
                        <el-input type="textarea" :rows="4" v-model="model.teamTips"></el-input>
                    </el-form-item>

                    <el-form-item label="头像">
                        <el-upload
                        class="avatar-uploader"

                        :action="$http.defaults.baseURL + '/upload' "
                        :show-file-list="false"
                        :on-success="afterUpload"
                        >
                        <img v-if="model.avatar" :src="model.avatar" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>


                </el-tab-pane>

                <el-tab-pane label="技能" name="skills">
                    <el-button type="text"> <i class="el-icon-plus"></i> 添加技能</el-button>
                    <el-row type="flex">
                        <el-col :md="12">
                            <el-form-item label="名称">
                                
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-tab-pane>


            </el-tabs>

            <el-form-item class="margin-top: 1rem;">
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
                categories: [],
                items: [],
                model: {
                    name: '',
                    avatar: '',
                    scores: {
                        // difficult: 0,
                    }
                },
                parents: []
            }
        },
        methods: {
            async save() {
                let res;
                console.log('111')
                if (this.id) {
                    console.log('put上去的hero内容是', this.model)
                    res = await this.$http.put(`/rest/heros/${this.id}`, this.model)
                } else {
                    res = await this.$http.post('/rest/heros', this.model)
                }

                this.$router.push('/heros/list')
 
                this.$message({
                    type: 'success',
                    message: 'Save Success!!!'
                })
            },
            async fetch() {
                const res = await this.$http.get(`/rest/heros/${this.id}`)
                console.log('get res,data is ', res.data)
                // this.model = res.data
                this.model = Object.assign({}, this.model, res.data)
            },
            async fetchItems() {
                const res = await this.$http.get('/rest/items')
                console.log('get items is ', res.data)
                this.items = res.data
            },
            async fetchCategories() {
                const res = await this.$http.get(`/rest/categories`)
                this.categories = res.data;

            },
            // 这里, 是怎么知道这个函数可以接受一个参数的?  A_ element官网有, 不过不够具体
            afterUpload(res) {
                console.log(res)
                
                // this.$set(this.model, 'avatar', res.url)

                this.model.avatar = res.url
            }
        },
        created() {
            //这个写法学习了.
            this.id && this.fetch()
            this.fetchCategories()
            this.fetchItems()
        }
    }
</script>

<style >

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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>