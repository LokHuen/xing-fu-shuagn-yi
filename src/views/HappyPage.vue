<template>
  <div id="happy-practice">
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '../components/menus/NavMenu'
import Banner from '../components/Banner'
import PageNumber from '../components/PageNumber'

export default {
  name: 'HappyPage',
  components: {PageNumber, Banner, NavMenu}
}
</script>

<style scoped>

</style>
