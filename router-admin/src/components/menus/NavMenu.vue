<template>
  <div class="nav-menu" >
    <div class="nav-container">
      <div class="logo-box">
        <img
          style="width: 159px; height: 72px; margin-bottom: 15px; line-height: 100px"
          :src="require('@/assets/logo.png')"
          :fit="contain"/>
      </div>
      <el-menu
        :default-active="this.activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router="true"
        @select="handleSelect"
      >
        <!--导航1-->
        <el-menu-item index="/home" class="title">首页</el-menu-item>
        <!--导航2-->
        <el-submenu index="/happy">
          <template slot="title" >幸福践行记</template>
          <el-menu-item index="/happy/grow" ><img :src="require('@/assets/gerenchengzhang.png')" />个人成长</el-menu-item>
          <el-menu-item index="/happy/parenting" ><img :src="require('@/assets/icon/parenting.png')" />亲子教育</el-menu-item>
          <el-menu-item index="/happy/family" ><img :src="require('@/assets/icon/family.png')" />家庭和谐</el-menu-item>
        </el-submenu>
        <!--导航3-->
        <el-menu-item index="/speak" class="title">孩子有话说</el-menu-item>
        <!--导航4-->
        <el-submenu index="4">
          <template slot="title">课程项目</template>
          <el-menu-item index="4-1" ><img :src="require('@/assets/icon/course.png')" />课程项目</el-menu-item>
          <el-menu-item index="4-2" ><img :src="require('@/assets/icon/expert.png')" />专家团队</el-menu-item>
        </el-submenu>
        <!--导航5-->
        <el-submenu index="5">
          <template slot="title">社会责任</template>
          <el-menu-item index="5-1" ><img :src="require('@/assets/icon/project.png')" />项目一览</el-menu-item>
          <el-menu-item index="5-2" ><img :src="require('@/assets/icon/achievements.png')" />成果展示</el-menu-item>
          <el-menu-item index="5-3" ><img :src="require('@/assets/icon/heart.png')" />心教师说</el-menu-item>
        </el-submenu>
        <!--导航6-->
        <el-submenu index="6">
          <template slot="title">关于我们</template>
          <el-menu-item index="6-1" ><img :src="require('@/assets/icon/milepost.png')" />里程碑</el-menu-item>
          <el-menu-item index="6-2" ><img :src="require('@/assets/icon/founder.png')" />创始人寄语</el-menu-item>
          <el-menu-item index="6-3" ><img :src="require('@/assets/icon/company.png')" />公司简介</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
    data() {
      return {
        activeIndex: '/',
      };
    },
  watch: {
    $route() {
      this.setCurrentRoute()
    }
  },
  created () {
    this.setCurrentRoute()
  },
  methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    setCurrentRoute() {
      this.activeIndex = this.$route.path //关键 通过他可以监听到当前路由状态并激活当前菜单
      console.log(this.activeIndex)
    },
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
        },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="less">

.el-menu--popup{
  border-radius: 6px;
}
</style>

<style lang="less" scoped>

a {
  text-decoration: none;
  color: white;
}
  //多项导航栏子选项信息
  .el-menu--horizontal {
    .el-menu--popup-bottom-start{
      .el-menu-item:hover {
       border-left: 4px solid #f7b267;
      }
      .el-menu-item {
        width: 140px;
        height: 62px;
        line-height: 62px;
        font-size: 20px;
        border-left: 4px solid transparent;
      }
    }
  }

//icon图标
  .el-menu-item img {
    line-height: 62px;
    margin: 0 20px;
    left: 40px;
    height: 24px;
    width: 24px;
  }
  //导航栏
  .nav-container {
    height: 100px;
    width: 1920px;
  }
  //默认时图标
  .title::before {
    text-align: center;
    position: absolute;
    transform: translateY(60%) rotate(45deg);
    left: 45%;
    content: "";
    width: 0px;
    height: 0px;
    border: 8px solid transparent;
    bottom: 2px;
    background: #ffffff;
  }
  //选中时图标
  .nav-menu {
    text-align: center;
    .logo-box {
      display: inline-block;
      margin-right: 20px;
    }
    .el-menu-demo {
      display: inline-block;
      margin: 0 auto;
      line-height: 100px;
    }
    .el-menu-item {
      font-size: 20px;
      font-family: "Microsoft YaHei";
      color: #333333;

    }
    //导航栏
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
    //多项选择导航栏默认
    .el-menu--horizontal>.el-submenu /deep/.el-submenu__title {
      height: 100px;
      line-height: 100px;
      font-size: 20px;
      font-family: "Microsoft YaHei";
      color: #333333;
    }
    //单项导航栏
    .el-menu--horizontal>.el-menu-item {
      width: 160px;
      height: 100px;
      line-height: 100px;
      overflow: hidden;
      margin-right: 2px;
      border-bottom: 3px solid #ffffff;
    }
    //单项导航栏选中
    .el-menu--horizontal>.el-menu-item.is-active {
      background: #f7b267;
      border-bottom: 3px solid #ffffff;
      color: white;
    }
    //单项导航栏选中时划过
    .el-menu--horizontal>.el-menu-item.is-active:hover {
      //background: #f7b267;
      color: white !important;
      border-bottom: 3px solid #ffffff !important;
    }
    //多项导航栏选中时划过
    .el-submenu.is-active /deep/.el-submenu__title:hover {
      color: white;
    }
    .el-menu--horizontal>.el-menu-item:hover {
      //background: #f7b267;
      color: #f7b267;
      border-bottom: 3px solid #ffffff !important;
    }
    //导航栏选项
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
      border:2px solid #ffffff;
    }
    .el-menu--horizontal>.el-submenu.is-active /deep/.is-opened {
      border:2px solid #ffffff;
      width: 400px;
    }
    //多项导航栏选中时
    .el-submenu.is-active /deep/.el-submenu__title {
      background: #f7b267;
      border-bottom: 3px solid #ffffff;
      color: white;
      overflow: hidden;
    }
    //多项导航栏通用
    .el-submenu {
      border-bottom: 3px solid #ffffff;
      margin-right: 2px;
    }
    .el-submenu ::after{content: none;}
    .el-submenu /deep/.el-submenu__title:hover {
      //background: #f7b267;
      color: #f7b267;
      overflow: hidden;
      border-bottom: 3px solid #ffffff !important;
    }
    .el-submenu /deep/.el-submenu__title::before {
      text-align: center;
      position: absolute;
      transform: translateY(60%) rotate(45deg);
      left: 45%;
      content: "";
      width: 0px;
      height: 0px;
      border: 8px solid transparent;
      bottom: 2px;
      background: #ffffff;
    }
    //当前页面小箭头
    .el-submenu.is-active /deep/.el-submenu__title::before {
      text-align: center;
      position: absolute;
      transform: translateY(60%) rotate(45deg);
      left: 45%;
      content: "";
      width: 0px;
      height: 0px;
      border: 8px solid transparent;
      bottom: 2px;
      background: #ffffff;
    }
    //下拉菜单小箭头
    /deep/.el-icon-arrow-down:before {
      color:#ffffff;
    }

  }
</style>
