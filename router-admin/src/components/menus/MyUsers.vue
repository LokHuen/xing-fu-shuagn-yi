<template>
  <div>
    <h4 >用户管理</h4>
    <el-table :data = "userList" >
      <el-table-column type = "index" label = "编号"></el-table-column>
      <el-table-column label = "姓名" prop = "name"></el-table-column>
      <el-table-column label = "加入时间" prop = "name"></el-table-column>
      <el-table-column label = "地址" prop = "address"></el-table-column>
      <el-table-column label = "年龄" prop = "age"></el-table-column>
      <el-table-column label = "职位" prop = "position"></el-table-column>
      <el-table-column align = "right" >
        <template slot="header" slot-scope="scope">
          <el-input placeholder="搜索相关信息"> <el-button slot="append" icon="el-icon-search">
          </el-button></el-input>
        </template>
        <template slot-scope="scope">
          <el-button type="primary">详情</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MyUser',
  data() {
    return {
      // 用户列表数据
      userList: [
        { id: 1, name: '嬴政', age: 18, position: '始皇帝' },
        { id: 2, name: '李斯', age: 35, position: '丞相' },
        { id: 3, name: '吕不韦', age: 50, position: '商人' },
        { id: 4, name: '赵姬', age: 48, position: '王太后' }
      ]
    }
  },
}
</script>
