<template>
  <div class="video-container">
    <Title :title="title" style="padding-bottom: 300px"></Title>
    <div class="video-box"><video controls :src="this.video"></video></div>
    <img :src="this.bgImg">
  </div>
</template>

<script>
import Title from './Title'
export default {
  name: 'MyVideo',
  data() {
    return {
      title:'幸福双翼家庭大学宣传片',
      video: require('@/assets/promo-video.mp4'),
      bgImg: require('@/assets/video_bg.png'),
    }
  },
  components:{
    Title
  }
}
</script>

<style lang="less" scoped>
.video-container {
  margin-top: 100px;
  position: relative;
  width: 100%;
  .video-box {
    width: 750px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ccc;
    video {
      width:100%;
    }
  }
}

</style>
