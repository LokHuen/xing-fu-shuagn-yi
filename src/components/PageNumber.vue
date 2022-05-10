<template>
  <div class="page-container">
    <div class="page-box">
      <el-button class="firstPage" @click="firstPage">首页</el-button>
      <el-button class="previous" @click="previousPage" :disabled="this.disPre">上一页</el-button>
      <el-button :class="{'page-active': item === state}" v-for="(item, index) in pages" key="item" @click="switchState(item, index)">{{ item }}</el-button>
      <el-button class="next" @click="nextPage" :disabled="this.disNxt">下一页</el-button>
      <el-button class="finalPage" @click="finalPage">尾页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNumber',
  data() {
    return {
      state: 1,
      page: 0,
      disPre: false,
      disNxt: false,
    }
  },
  props: {
    pageList: {
      type: Array,
      default: () => []
    },
    pages:{
      type: Number,
      default: () => 0
    }
  },
  methods: {
    firstPage() {
      this.page = 0
      this.state = 1
    },
    finalPage() {
      this.page = this.pages - 1
      this.state = this.pages
    },
    switchState(item, index) {
      //点击页码时动态切换选中状态
      this.state = item
      //点击页码时动态变换页码值
      this.page = index
      //向父组件穿页码值
      this.$emit('change', this.page)
      console.log(index)
    },
    nextPage() {
      this.page++
      this.state++
      //向父组件传页码值
      this.$emit('change', this.page)
      console.log(this.page)
    },
    previousPage() {
      this.page--
      this.state--
      //向父组件传页码值
      this.$emit('change', this.page)
      console.log(this.page)
    }
  },
  watch:{
    page: {
      handler(newVal) {
        this.disPre = newVal === 0 ? 1 : 0
        this.disNxt = newVal === (this.pages-1) ? 1 : 0
        console.log(newVal)
      },
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
  .page-container {
    width: 100%;

    .page-box {
      text-align: center;
      width: 1200px;
      margin: 0 auto;
      .page-active {
        background: #F7B267;
        color: #FFFFFF;
        border: 1px solid yellow;
      }
    }
  }
</style>
