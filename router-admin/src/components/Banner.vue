<template>
  <div class="banner">
    <div class="block">
<!--      Click 指示器触发-->
      <el-carousel :height="this.height" width="1920px" trigger="click">
        <el-carousel-item v-for="item in this.bannerList" :key="item">
          <img :src="item.src" >
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    height:{
      type: String,
      default:''
    },
    bannerList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .banner {
    width: 1920px;
  }
</style>
