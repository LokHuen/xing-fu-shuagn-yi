<template>
  <div class="item-container">
    <div class="project-box">
      <CourseTitle></CourseTitle>
      <CourseInfo></CourseInfo>
    </div>
  </div>
</template>

<script>
import CourseTitle from '../components/CourseTitle'
import CourseInfo from '../components/CourseInfo'
export default {
  name: 'CourseItems',
  components: {CourseInfo, CourseTitle}
}
</script>

<style lang="less" scoped>
.item-container {
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
