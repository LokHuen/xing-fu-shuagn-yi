<template>
  <div class="speak-container" >
    <el-carousel :interval="5000" arrow="always" indicator-position="none"	 height="410px">
      <el-carousel-item v-for="item in articleList" :key="item.id">
          <div class = "speak">
            <div class = "img-box">
              <img :src="item.src"/>
            </div>
            <div class = "article-box">
              {{ item.article }}
              <br/>
              {{ item.author }}
            </div>
          </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Speak',
  props: {
    articleList: {
      type: Array,
      default: () => []
    }
  },

}
</script>

<style lang="less" scoped>

.speak-container {
  width: 1200px;
  margin: 0 auto;
  .speak {
    .img-box {
      float: left;
      width: 700px;
      img {
        width: 100%;
      }
    }
    .article-box {
      float: right;
      font-size: 20px;
      font-family: "Microsoft YaHei";
      font-weight: bold;
      color: #000000;
      text-align: left;
      box-sizing: border-box;
      width:500px;
      padding: 71px 84px;
      -webkit-text-size-adjust: 100%;
    }
  }
  //切换箭头
  /deep/.el-carousel__arrow {
    font-size: 20px;
    font-weight: 700;
    background: white;
    height: 55px;
    width: 55px;
    color:#fff;
    border: none;
    opacity: 0.62;
    border-radius: 5px;
    box-shadow: 0px 10px 10px 0px rgba(123, 123, 123, 0.3);
  }
  //左箭头
  /deep/.el-carousel__arrow--left {
    left: 784px;
    top: 83%;
    color:#f7b267;
  }
  //右箭头
  /deep/.el-carousel__arrow--right {
    right: 20%;
    top: 83%;
    color:#f7b267;
  }
}
</style>
