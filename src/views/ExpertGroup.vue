<template>
  <div id = "course-project">
    <Banner></Banner>
    <TeacherList></TeacherList>
  </div>
</template>

<script>
import Banner from '../../router-admin/src/components/Banner'
import TeacherList from '../components/TeacherList'
export default {
  name: 'ExpertGroup',
  components: {TeacherList, Banner}
}
</script>

<style scoped>

</style>
