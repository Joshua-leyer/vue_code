<template>
    <div>
        <h2>广告列表</h2>
        <el-table :data="items">
            <el-table-column prop="_id" label="id"></el-table-column>

            <el-table-column prop="name" label="名称"></el-table-column>

            <el-table-column label="操作" width="180">
            <template slot-scope="scope">
                <el-button type="primary" round size="mini"
                @click="jump(scope.row._id)">编辑</el-button>
                <el-button type="primary" round size="mini"
                @click="remove(scope.row)">删除</el-button>
            </template> 


            </el-table-column>

        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: []
            }
        },
        methods: {
            jump(_id) {
                console.log('enter jump')
                this.$router.push(`/ads/edit/${_id}`)
                console.log(`push了, /ads/edit/${_id}` )
            },
            async fetch() {
                const res = await this.$http.get('/rest/ads')
                console.log('web get ads data is ', res)
                this.items = res.data
            },
            async remove(row) {
                this.$confirm(`是否要删除 "${row.name}" `, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(async () => {
                        const res = await this.$http.delete(`/rest/ads/${row._id}`)
                        // joshua一直想不明白,上面的是异步函数, 按照几乎我能找到的所有
                        // 教程文章来讲, 异步函数是为了解决阻塞问题, 
                        // 那请问,上面的 delete请求, 我发送过去, 这个下面的内容是执行还是不执行? 
                        // 在没有给我反馈的情况, 我怎么就能随便的执行呢?

                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.fetch()
                    })
                }
        },
        created() {
            this.fetch()

        }
    }
</script>

<style scoped>

</style>