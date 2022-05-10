<template>
  <div class="news-container" style=" margin-bottom: 100px;  margin-top: 120px;">
    <Title :title="title"></Title>
    <div class = "swiper-container">
      <!--      <el-button icon="el-icon-arrow-left" class="back-btn" @click="back()"></el-button>-->
      <!--      <el-button icon="el-icon-arrow-right" class="forward-btn" @click="forward()"></el-button>-->
      <el-carousel indicator-position="outside" height="412px" interval="10000" arrow="always" >
        <el-carousel-item v-for="(item, index) in newsList" key="item">
            <div class="swiper">

              <el-row>
                <el-col  :span="24">

                  <div class="img-box">
                    <img :src="item.src">
                  </div>

                  <div class="article-box">
                    <h2>{{ item.title }}</h2>
                    <p style="white-space: pre-wrap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.article}}</p>
                  </div>

                </el-col>
              </el-row>

            </div>
        </el-carousel-item>
      </el-carousel>


    </div>
  </div>
</template>

<script>
import Title from './Title'
export default {
  name: 'Responsibility',
  data() {
    return {
      index: 0,
      title: '社会责任',
      newsList:[
        {
          src:require('@/assets/responsibility-images/img_01.jpg'),
          title:'心教师工程',
          article:'百年大计，教育为本。\n      教育大计，教师为本。\n'+
            '      教师，是孩子一生中除了父母以外影响最大的人。没有教师的幸福，就没有教育的进步。\n'+
            '      2017年远见教育发起心教师工程，为来自全国各地的入选教师提供学生心理健康教育公益课程培训，至今累计为全国各地上千名在职教师赋能，提升教师心理健康教育能力，正面影响更多孩子成长得更加真实、自信、有温度。',
        },
        {
          src:require('@/assets/responsibility-images/img_02.jpg'),
          title:'为幸福中国而教',
          article:'2012年，幸福双翼教育体系创始人黄志猛教授发起并成立深圳市远见教育发展基金会，发起“为幸福中国而教”大型公益行动，通过联合学校、社区及社会企业，开展家庭教育公益活动，普及并推广科学、系统的家庭教育，唤起人们对家庭教育的重视。迄今，远见教育已培养23名课程导师、134名经培训认证的家庭教育讲师及170名助教，共300多名志愿者，举办超过2,100场家庭教育讲座，辐射延伸至全国，从中受益的家庭累计达180,000户。',
        },
        {
          src:require('@/assets/responsibility-images/img_03.jpg'),
          title:'春暖花开计划',
          article:'2020年初新冠肺炎疫情肆掠之际，幸福双翼联合全国各地2000多名志愿者，发起春暖花开公益计划，组织此大型的特别支持行动，支持疫区家庭身心建设；陪伴百万家庭，度疫情阴霾，迎春暖花开。',
        },
        {
          src:require('@/assets/responsibility-images/img_04.jpg'),
          title:'“共筑青少年生命教育防火墙”公益讲座',
          article:'近期，由于2020年疫情带给社会、家庭和孩子，都有很大的心理压力和冲击，在深圳市关爱办指导下，远见教育和幸福双翼联合举办了三场“共筑孩子的生命教育防火墙——青少年心理健康教育公益讲座”。讲座皆由黄志猛教授亲授，并同步进行线上直播。讲座切中家长关心的要点，得到家长自发广泛转发，首场播放量当晚即突破30000人次，目前三场讲座的回看人气仍在不断上涨，播放总量已达到65000+。',
        },
        {
          src:require('@/assets/responsibility-images/img_05.jpg'),
          title:'家园共育',
          article:'深圳宝安区家园共育公益指导项目项目由深圳市宝安区教育局主办，远见教育连续两期承办。该项目通过帮助幼儿家长学习实用有效的家庭教育知识方法，在孩子幼儿期及时升级家长的教育思想，提升家长的教育能力；同时提高家长家园共育意识，促进家校合作，营造良好的家园共育氛围。2018年及2019年的两期项目共开展线下活动277场，受益家长达70,000+人次，同时线上学习平台的浏览量超过1,000,000。实用的课程受到家长们的普遍好评，科学的家庭教育体系在宝安区各个幼儿园进行传播，在几十万家长心中生根开花。',
        },
        {
          src:require('@/assets/responsibility-images/img_06.jpg'),
          title:'现在，成为幸福中国合伙人',
          article:'在家庭教育领域经过9年的耕耘，对心教师工程公益项目5年的打磨，我们在2021年2月14日正式推动【现在，成为幸福中国合伙人】月捐计划。\n' +
            '                  月捐是以每月定额的方式进行捐赠。截止到2021年8月4日，一共有746位合伙人加入，和心教师一起，陪伴更多孩子踏上幸福成长的道路。',
        },
      ],

    }
  },
  components: {
    Title
  }

}
</script>

<style lang="less" scoped>

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
}
//右箭头
/deep/.el-carousel__arrow--right {
  right: 14%;
}

  .swiper {
    color: #333333;
    height: 100%;
    width: 1200px;
    border-top: 2px solid #EFEFEF;
    border-bottom: 2px solid #EFEFEF;
    box-sizing: border-box;
    padding: 29px 60px 29px 60px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  .img-box {
    width: 555px;
    height: 350px;
    overflow: hidden;
    float: left;
    display: block;
    box-sizing:border-box;
  }
  .article-box {
    width: 490px;
    text-align: left;
    display: block;
    float: right;
    box-sizing:border-box;
    h2 {
      margin: 20px 0;
      font-size: 25px;
      font-weight: 800;
      font-family: "PingFang SC";
    }
    p {
      margin-top: 30px;
      font-size: 16px;
      font-weight: 400;
    }
  }

  }
</style>
