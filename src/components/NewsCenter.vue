<template>

  <div class="news-container" style=" margin-bottom: 100px;  margin-top: 120px;">
    <Title :title="title"></Title>
    <div class = "swiper-container">
<!--      <el-button icon="el-icon-arrow-left" class="back-btn" @click="back()"></el-button>-->
<!--      <el-button icon="el-icon-arrow-right" class="forward-btn" @click="forward()"></el-button>-->
      <el-carousel indicator-position="outside" height="600px" interval="10000" arrow="always">
        <el-carousel-item v-for="(item, index) in newsList" key="item.index">
          <div class = "swiper-box" >
            <div class="swiper">
              <el-row  style="width: 1200px">

                <el-col  :span="24">

                  <div class="img-box">

                      <img :src="imgItem" v-for="(imgItem, imgIndex) in item.src">

                  </div>
                  <div class="article-box">
                    <h3 v-for="(titleItem, titleIndex) in item.title" :class="{'article-box-end': titleIndex === 1}">{{ titleItem }}</h3>
                    <p v-for="(articleItem, articleIndex) in item.article" :class="{'article-box-end': articleIndex === 1}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ articleItem}}</p>
                  </div>

                </el-col>


              </el-row>
            </div>

          </div>
        </el-carousel-item>
      </el-carousel>


      </div>
    </div>
</template>

<script>
import Title from './Title'
export default {
  name: 'NewsCenter',
  data() {
    return {
      index: 0,
      title: '新闻中心',
      newsList:[
        {
          title:['中国教育发展战略学会家校协同专业委员会常务理事单位', '中国教育发展战略学会教师发展专委会家庭教育研究部支持单位'],
          article:['2020年12月12日，中国教育发展战略学会，在北京国家教育行政学院召开家校协同专业委员会成立大会。深圳市幸福双翼教育科技股份有限公司被授予常务理事单位。大会经投票选举基金会理事长、幸福双翼教育体系创始人——黄志猛教授，为“家校协同专业委员会”常务理事。', '2021年5月12日，中国教育发展战略学会教师发展专业委员会成立家庭教育研究部。幸福双翼为合作支持单位。'],
          src:[require('@/assets/news-images/news-img_01.jpg'), require('@/assets/news-images/news-img_02.jpg')],
          state: [true, true]
        },
        {
          title:['深圳市家庭教育协会常务副会长单位', '中国教育发展战略学会家校协同专业委员会常务理事单位'],
          article:['2020年12月12日，中国教育发展战略学会，在北京国家教育行政学院召开家校协同专业委员会成立大会。深圳市幸福双翼教育科技股份有限公司被授予常务理事单位。大会经投票选举基金会理事长、幸福双翼教育体系创始人——黄志猛教授，为“家校协同专业委员会”常务理事。', '2021年3月，为进一步推动深圳市家庭教育事业的发展，深圳市家庭教育协会特授予深圳市幸福双翼教育科技股份有限公司常务副会长单位。'],
          src:[require('@/assets/news-images/news-img_03.jpg'), require('@/assets/news-images/news-img_04.jpg')],
          state: [false, false]
        },
      ],

    }
  },
  methods: {
    back() {
      console.log()
      index -= 2
      if (index < 0) {
        index = 6
      }
      console.log(index)
      console.log(this.newsList.length-2)
    },
    forward(index){
      index += 2
    },
  },
  components:{
    Title
  }
}
</script>

<style lang="less" scoped>

.swiper-box {
  position: relative;
  .swiper {
    width: 1200px;
    height: 575px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    position: relative;
  }
}
//切换箭头
/deep/.el-carousel__arrow {
  background: #f7b267;
  height: 95px;
  width: 50px;
  color:#fff;
  border: none;
  opacity: 0.62;
  border-radius: 5px;
}
//左箭头
/deep/.el-carousel__arrow--left {
  left: 14%;
  top: 33%
}
//右箭头
/deep/.el-carousel__arrow--right {
  right: 14%;
  top: 33%
}
.article-box-end{
  margin-right: 0px !important;
}
.article-box {
  display: inline-block;
  width: 1200px;
  margin-right: -50px;
  h3 {
    width: 575px;
    display: inline-block;
    margin-right: 50px;
    top: 0;
  }
  p {
    width: 575px;
    display: inline-block;
    margin-right: 50px;
    float: left;
  }
}
.img-box {
  width: 1200px;
  display: flex;
  margin-right: -50px;
  img {
    width: 575px;
    height: 400px;
    margin-right: 50px;
  }
}
.swiper div {
  overflow: hidden;
  transition: 0.5s;
}
button.back-btn{
  position: absolute;
  left:14%;
  margin-top:150px;
  background: #f7b267;
  height: 95px;
  width: 50px;
  color:#fff;
  border: none;
  opacity: 0.62;
}
button.forward-btn{
  position: absolute;
  right:14%;
  margin-top:150px;
  line-height: 20px;
  background: #f7b267;
  height: 95px;
  width: 50px;
  color:#fff;
  border: none;
  opacity: 0.62;
}




</style>
