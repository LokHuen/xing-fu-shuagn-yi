<template>
  <div id="map">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMap',
  data() {
    return {
      mapId: 'mapId',//地图id，多次调用该地图组件时，id必须动态生成
      map:null
    }
  },
}
</script>

<style lang="less" scoped>
.amap-wrapper {
  width: 100%;
  height: 300px;
}
</style>
