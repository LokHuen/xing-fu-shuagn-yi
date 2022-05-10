<template>
  <div class="title">
    <h1 >· {{ title }} ·</h1>
  </div>

</template>

<script>
export default {
  name: 'Title',
  props:['title']
}
</script>

<style scoped>
  .title h1{
    text-align: center;
    font-family: 'Microsoft YaHei';
    margin-bottom: 50px;
    margin-top: 80px
  }
</style>
