<template>
  <div class = "footer">
    <div class="main-footer">
      <div class = "logo-box">
        <img :src="require('@/assets/logo.png')"/>
      </div>
      <div class = "info-box">
        <p>公司名称：深圳市幸福双翼教育科技股份有限公司</p>
        <p>联系电话：0755-82995396</p>
        <p>公司地址：深圳市南山区粤兴一道8号香港城市大学产学研大楼802A</p>
        <p>Copyright © 2019 深圳市幸福双翼教育科技股份有限公司 保留所有权利 粤ICP备16090975号-1</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    background-color: #45494e;
    clear: both;
    padding: 50px;

    .main-footer {
      width: 1200px;
      margin:0 auto;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;

      .logo-box {
        width: 92px;
        height: 43px;
        display: inline-block;
        float: left;
        position: absolute;
        bottom: 0px;

        img {
          width: 100%;
        }
      }
      .info-box {
        width: 850px;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: #fff;
        float: right;
        padding: 30px 0 0 350px;

        p {
          margin: 0 0 15px 0;
        }
        p:nth-child(3) {
          margin: 0 0 40px 0;
        }
      }
    }
  }
</style>
