<template>
  <div>
    <el-col :span="12">
      <h5>精选课程</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <span>如何培养阳光孩子</span>
          </template>
            <el-menu-item index="1-2">《教育升级2030》</el-menu-item>
            <el-menu-item index="1-3">《如何培养孩子的自信心》</el-menu-item>
            <el-menu-item index="1-4-1">《学习的身心基础》</el-menu-item>
          </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>如何培养阳光孩子</span>
          </template>
          <el-menu-item index="1-2">《教育升级2030》</el-menu-item>
          <el-menu-item index="1-3">《如何培养孩子的自信心》</el-menu-item>
          <el-menu-item index="1-4-1">《学习的身心基础》</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>如何培养阳光孩子</span>
          </template>
          <el-menu-item index="1-2">《教育升级2030》</el-menu-item>
          <el-menu-item index="1-3">《如何培养孩子的自信心》</el-menu-item>
          <el-menu-item index="1-4-1">《学习的身心基础》</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span>如何培养阳光孩子</span>
          </template>
          <el-menu-item index="1-2">《教育升级2030》</el-menu-item>
          <el-menu-item index="1-3">《如何培养孩子的自信心》</el-menu-item>
          <el-menu-item index="1-4-1">《学习的身心基础》</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <span>如何培养阳光孩子</span>
          </template>
          <el-menu-item index="1-2">《教育升级2030》</el-menu-item>
          <el-menu-item index="1-3">《如何培养孩子的自信心》</el-menu-item>
          <el-menu-item index="1-4-1">《学习的身心基础》</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <span>如何培养阳光孩子</span>
          </template>
          <el-menu-item index="1-2">《教育升级2030》</el-menu-item>
          <el-menu-item index="1-3">《如何培养孩子的自信心》</el-menu-item>
          <el-menu-item index="1-4-1">《学习的身心基础》</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'CourseTitle',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
//大标题
  h5 {
    height: 62px;
    line-height: 62px;
    font-size: 25px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #FF9080;
    text-shadow: 3px 3px 4px rgba(174, 96, 85, 0.48);
    border-bottom: 1px solid #E7E7E7;
    margin-top: 0px;
    margin-bottom: 60px;
    /* padding: 10px 0 10px 16px; */
  }
.el-menu {
  border: none;
}
//整体边框
  .el-col-12 {
    margin-right: 30px;
    width: 270px;
    box-sizing: border-box;
    border: 2px solid #FF9080;
    padding: 10px 10px 100px 10px;
  }
  //导航项目样式
  /deep/.el-submenu__title {
    background: url('../assets/course-banner/course_menu_bg.png') center center no-repeat;
    background-size: 100% 56px;
    color: #333333;
    font-size: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 2px 5px #333;
    border-radius: 20px;
  }
  //内置菜单样式
.el-submenu .el-menu-item {
  height: 34px;
  line-height: 34px;
  font-size: 18px;
  text-align: center;
  padding-left: 0 !important;
  padding: 0;
  overflow: hidden;
}
//内置菜单最后一项样式
.el-submenu .el-menu-item:last-child {
  margin-bottom: 20px;
}
//内置菜单最后一项 after 样式
.el-submenu .el-menu-item:last-child::after {
  content: none;
}
//内置菜单 after 样式
.el-submenu .el-menu-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 6%;
  width: 88%;
  height: 1px;
  background: #E6E6E6;
}

</style>
