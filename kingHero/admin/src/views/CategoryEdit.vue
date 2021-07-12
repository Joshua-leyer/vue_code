<template>
    <div >
        <h2>{{id ? '编辑': '新建'}}分类</h2>

        <el-form label-width="124px" @submit.native.prevent="save">
            <el-form-item label="上级分类">
                <el-select v-model="model.parent">
                    <el-option v-for="item in parents" :key="item._id" 
                        :label="item.name" 
                        :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
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
                    res = await this.$http.put(`/categories/${this.id}`, this.model)
                } else {
                    res = await this.$http.post('/categories', this.model)
                }

                this.$router.push('/categories/list')
 
                this.$message({
                    type: 'success',
                    message: 'Save Success!!!'
                })
            },
            async fetch() {
                const res = await this.$http.get(`categories/${this.id}`)
                console.log('get res is ', res)
                this.model = res.data
            },
            async fetchParent() {
                const res = await this.$http.get('categories')
                this.parents = res.data
            }
        },
        created() {
            //这个写法学习了.
            this.id && this.fetch()
            this.fetchParent()
        }
    }
</script>

<style scoped>

</style>