<template>
      <el-table :data="articles">
        <el-table-column prop="tittle" label="标题" width="140">
        </el-table-column>
        <el-table-column prop="body" label="文章内容" width="120">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row._id)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope, scope.row._id)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
</template>
<script>
  export default {
    data() {
      return {
        articles: []
      }
    },
    methods: {
      fetch() {
        this.$http.get('articles').then( res => {
          this.articles = res.data
        })
      },
      handleEdit(index, id) {
        // 简写, 可以省略
        this.$router.push(`/articles/edit/${id}`) 
        // console.log('click get id is', id)
        // 在网上, 看到有这种传值的, 但是我这里不知道怎么用,那边跳转过去好像没用
        // this.$router.push({path: '/articles/edit/', params: {id: id}})
      },
      handleDelete(index, scope, scope_id) {
        // console.log('look element scope is ,', scope)
        let _that = this;
        console.log('scope_id is ,', scope_id)

        _that.$http.delete(`delete/${scope_id}`).then( (res) => {
            console.log('delete success back res is ', res)

            this.$message({
              message: 'delete success',
              type: 'success',
              duration: 1024
            });

            this.fetch()
        })
      }
    },
    created() {
      this.fetch()
    }
  };
</script>