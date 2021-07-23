<template>
    <div >
        <h2>{{id ? '编辑': '新建'}}文章</h2>

        <el-form label-width="124px" @submit.native.prevent="save">
            <el-form-item label="所属分类">
                <el-select v-model="model.categories" multiple>
                    <el-option v-for="item in categories" :key="item._id" 
                        :label="item.name" 
                        :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
            </el-form-item>

            <el-form-item label="文章内容" >
                    <vue-editor id="editor" v-model="model.body" useCustomImageHandler @image-added="handleImageAdded">

                    </vue-editor>

            </el-form-item>


            <el-form-item>
                <el-button type="primary" native-type="submit">Save</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

import { VueEditor } from 'vue2-editor'


    export default {

        props: {
            id: {}
        },
        components: {
            VueEditor
        },
        data() {
            return {
                model: {},
                categories: [],
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
                    res = await this.$http.put(`/rest/article/${this.id}`, this.model)
                } else {
                    res = await this.$http.post('/rest/article', this.model)
                }

                this.$router.push('/articles/list')
 
                this.$message({
                    type: 'success',
                    message: 'Save Success!!!'
                })
            },
            async fetch() {
                const res = await this.$http.get(`/rest/article/${this.id}`)
                console.log('get res is ', res)
                this.model = res.data
            },
            async fetchCategories() {
                const res = await this.$http.get('/rest/categories')
                this.categories = res.data
            },
            async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
                    // An example of using FormData
                    // NOTE: Your key could be different such as:
                    // formData.append('file', file)
                
                    const formData = new FormData();
                    formData.append("file", file); //这里不是很懂参数

                    const res = await this.$http.post('upload', formData)
                    let url = res.data.url; // Get url from response
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();

            }
        },
        beforeCreate(){
            console.log('edit vue beforeCreate')
        },
        created() {
            // 这个写法学习了
            console.log('web enter CategoryEdit vue')
            this.id && this.fetch()
            this.fetchCategories()
        }
    }
</script>

<style scoped>

</style>