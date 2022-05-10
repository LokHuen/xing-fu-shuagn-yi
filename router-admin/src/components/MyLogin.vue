<template>
  <div class="login-container">

    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avatar-box">
        <img src = "@/assets/management.jpg"></img>
      </div>

      <!-- 表单区域 -->
      <el-form>

        <!-- 登录名称 -->
        <el-form-item>
          <label for="username">登录名称</label>
          <el-input
            type="text"
            class="form-control ml-2"
            id="username"
            placeholder="请输入登录名称"
            autocomplete="off"
            v-model.trim="username"
          />
        </el-form-item>

        <!-- 登录密码 -->
        <el-form-item class="form-group form-inline">
          <label for="password">登录密码</label>
          <el-input
            type="password"
            class="form-control ml-2"
            id="password"
            placeholder="请输入登录密码"
            v-model.trim="password"
          />
        </el-form-item>
        <!-- 登录和重置按钮 -->
        <div class="button-Box">
          <el-button type="plain" @click="reset">重置</el-button>
          <el-button type="primary" @click="login">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data() {
    return {
      username: '',
      password: '',
      src: '@/assets/management.jpg'
    }
  },
  methods: {
    reset() {
      this.username = ''
      this.password = ''
    },
    login() {
      if (this.username === 'admin' && this.password === '666666') {
        // 登录成功
        // 1. 存储 token
        localStorage.setItem('token', 'Bearer xxxx')
        // 2. 跳转到后台主页
        this.$router.push('/home')
      }else if(this.username === ''&& this.password === ''){
        localStorage.removeItem('token')
        alert('请输入用户名和密码')
      }
      else if(this.username === ''){
        localStorage.removeItem('token')
        alert('请输入用户名')
      }
      else if(this.password === ''){
        localStorage.removeItem('token')
        alert('请输入密码')
      }
        else {
        // 登录失败
        localStorage.removeItem('token')
        alert('用户名或密码错误')
      }
    }
  }
}
</script>

<style lang="less" scoped>

.button-Box {
  float: right;
}
.login-container {
  background-color: #35495e;
  height: 100%;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
}

.form-control {
  flex: 1;
}
.avatar-box {
  text-align: center;
  width: 100%;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>
