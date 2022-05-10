<template>
  <div class="article-container">
    <div class="contain-box">
      <div class="img-box">
        <img :src="imgSrc"/>
      </div>
      <div class="article-box">
        <div class="title">{{ title }}</div>
        <div class="author">{{ author }}</div>
        <div class="article">{{ article }}</div>
      </div>
    </div>
    <el-divider><i class="el-icon-sunny"></i></el-divider>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props:['title', 'author', 'article', 'imgSrc']
}
</script>

<style lang="less" scoped>

  //el 分割线
  .el-divider--horizontal {
    margin: 56px auto;
    width: 1200px;
  }
  .article-container {
    width: 100%;
    .contain-box {
      box-sizing: border-box;
      padding: 0 70px;
      margin: 0 auto;
      width: 1200px;
      .img-box {
        display: inline-block;
        width: 456px;
        height: 300px;
        overflow: hidden;
        img {
          width: 100%;
        }
     }
      .article-box {
        display: inline-block;
        width: 564px;
        float: right;
        .title {
          padding-top: 15px;
          font-size: 24px;
          font-family: "Microsoft YaHei";
          color: #333333;
        }
        .author {
          color: #333333;
          margin: 20px 0;
          font-size: 14px;
          font-family: "Microsoft YaHei";
        }
        .article {
          font-weight: 400;
          color: #373737;
          text-indent: 2em;
          margin-top: 10px;
          font-size: 18px;
          font-family: "Microsoft YaHei";
        }
      }
    }
  }
</style>
