<template>
  <div id="app">
    <keep-alive>
      <NavMenu></NavMenu>
    </keep-alive>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from './components/menus/NavMenu'
export default {
  name: 'App',
  components: {NavMenu}
}
</script>

<style>
body {
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
