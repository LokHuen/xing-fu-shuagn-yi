<template>
  <div id="self-grow">
    <Banner
      :height="this.height"
      :bannerList="this.bannerList"
    ></Banner>
    <Title :title="this.title1"></Title>
    <Speak :article-list="this.articleList"></Speak>
    <HappyPractice :countList="this.countList" :title="this.title"></HappyPractice>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Article from '@/components/Article.vue'
import axios from 'axios'
import PageNumber from '@/components/PageNumber.vue'
import Title from '@/components/Title'
import HappyPractice from '../components/HappyPractice'
import Speak from '../components/Speak'
import Footer from '../components/Footer'


export default {
  name: 'ChildSpeak',
  data() {
    return {
      title: '孩子大爆料',
      title1: '孩子有话说',
      height: '600px',
      pages:0,
      page: 0,
      limit: 4,
      articleList: [
        {src: require('@/assets/speak-images/draw-img_01.jpg'), id: 1, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_02.jpg'), id: 2, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_03.jpg'), id: 3, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_04.jpg'), id: 4, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_05.jpg'), id: 5, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_06.jpg'), id: 6, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_07.jpg'), id: 7, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_08.jpg'), id: 8, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_09.jpg'), id: 9, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_10.jpg'), id: 10, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_11.jpg'), id: 11, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_12.jpg'), id: 12, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_13.jpg'), id: 13, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_14.jpg'), id: 14, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_15.jpg'), id: 15, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_16.jpg'), id: 16, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_17.jpg'), id: 17, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },
        {src: require('@/assets/speak-images/draw-img_18.jpg'), id: 18, article: '我妈妈的学习前后对比', author:'From 肖茶 8岁' },



      ],
      countList: [
        {src: require('@/assets/speak-images/speak-img_01.jpg'), id: 1, state: 'active'},
        {src: require('@/assets/speak-images/speak-img_02.jpg'), id: 2, state: 'off'},
        {src: require('@/assets/speak-images/speak-img_03.jpg'), id: 3, state: 'off'},
        {src: require('@/assets/speak-images/speak-img_04.jpg'), id: 4, state: 'off'}
      ],
      bannerList:[
        {src:'static/happy-practice-img/grow/banner-speak.jpg'},
        {src:'static/happy-practice-img/grow/banner-speak.jpg'},
        {src:'static/happy-practice-img/grow/banner-speak.jpg'},
      ],
    }
  },
  created () {
  },
  methods: {

    changePage(val) {
      this.page = val
      console.log(val)
    }

  },
  components: {Footer, Speak, HappyPractice, PageNumber, Article, Banner, Title}
}

</script>

<style lang="less" scoped>
//el 分割线
.el-divider--horizontal {
  margin: 100px auto;
  width: 700px;
  height: 3px;
  background-color: #F7B267;
}
//el 分割线中文字
.el-divider__text {
  font-size: 28px;
  color: #F7B267;
  padding: 0 80px;
}
.swiper,
#swiper {
  height: 400px;
  position: relative;
  img {
    width: 100%;
  }
}

/deep/.swiper div {
  position: absolute;
  width: 624px;
  height: 450px !important;
  overflow: hidden;
  left: 165px;
  top: 0;
  transition: 0.5s;
  color: #333333;
  font-size: 50px;
  text-align: center;
  line-height: 200px;

}
</style>
