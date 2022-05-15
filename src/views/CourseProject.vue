<template>
  <div id = "course-project">
    <Banner
      :height="this.height"
      :bannerList="this.bannerList"
    ></Banner>
    <img src="@/assets/course-banner/course-icon02.png"/>
    <router-view/>
  </div>
</template>

<script>
import CourseTitle from '../components/CourseTitle'
import Banner from '../../router-admin/src/components/Banner'
import CourseInfo from '../components/CourseInfo'
export default {
  name: 'CourseProject',
  data() {
    return {
      height: '600px',
      bannerList: [
        { src: require('@/assets/course-banner/banner.jpg') },
        { src: require('@/assets/course-banner/banner.jpg') },
        { src: require('@/assets/course-banner/banner.jpg') }
      ]
    }
  },
  components: {CourseInfo, Banner, CourseTitle}
}
</script>

<style lang="less" scoped>
  #course-project {
    width: 100%;
    text-align: center;

    img {
      width: 534px;
      margin-top: 50px;
    }

    .project-box {
      width: 1200px;
      margin: 0 auto;
      display: flex;
    }
  }
</style>
