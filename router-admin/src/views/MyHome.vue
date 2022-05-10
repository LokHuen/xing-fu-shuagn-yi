<template>
  <div class="home-container">
    <div class="banner-container">
      <Banner
        :height = "this.height"
        :bannerList = "this.bannerList"
      ></Banner>
      <NewsCenter></NewsCenter>
      <HappyPractice :countList="this.countList" :title="this.title"></HappyPractice>
      <Courses></Courses>
      <Responsibility></Responsibility>
      <ContactUS></ContactUS>
      <MyVideo></MyVideo>
      <MyMap></MyMap>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import NavMenu from '../components/menus/NavMenu'
import Banner from '../components/Banner'
import NewsCenter from '../components/NewsCenter'
import HappyPractice from '../components/HappyPractice'
import Courses from '../components/Courses'
import Responsibility from '../components/Responsibility'
import ContactUS from '../components/ContactUS'
import MyMap from '../components/MyMap'
import MyVideo from '../components/MyVideo'
import Footer from '../components/Footer'
export default {
  name: 'MyHome',
  data() {
    return {
      title: '幸福践行记',
      height: '800px',
      countList: [
        {src: require('@/assets/happiness/jxj_1.jpg'), id: 1, state: 'active'},
        {src: require('@/assets/happiness/jxj_3.jpg'), id: 2, state: 'off'},
        {src: require('@/assets/happiness/jxj_5.jpg'), id: 3, state: 'off'},
        {src: require('@/assets/happiness/jxj_7.jpg'), id: 4, state: 'off'}
      ],
      bannerList:[
        {src:require('@/assets/banner.jpg')},
        {src:require('@/assets/banner.jpg')},
        {src:require('@/assets/banner.jpg')},
    ],
    }
  },
  // 注册组件
  components: {
    MyVideo,
    MyMap,
    ContactUS,
    Responsibility,
    Courses,
    HappyPractice,
    NewsCenter,
    NavMenu,
    Banner,
    Footer
  },

}
</script>

<style lang="less" scoped>

</style>
