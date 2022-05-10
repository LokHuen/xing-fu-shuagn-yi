<template>
  <div id = "course-project">
    <Banner
      :height="this.height"
      :bannerList="this.bannerList"
    ></Banner>
      <div class="project-box">
        <CourseTitle></CourseTitle>
    </div>
  </div>
</template>

<script>
import CourseTitle from '../components/CourseTitle'
import Banner from '../../router-admin/src/components/Banner'
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
  components: {Banner, CourseTitle}
}
</script>

<style lang="less" scoped>
  #course-project {
    width: 100%;

    .project-box {
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>
