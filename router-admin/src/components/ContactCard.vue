<template>
  <div :class="'contact-box' + this.move" @mouseover="moveUp" @mouseout="moveDown">
    <div :class="this.mask"></div>

    <div :class="'qr-code'+ this.cover" @mouseover="coverShow" @mouseout="coverOff" >
      <img :src="qr" >
    </div>

    <div class="article-box">
      <h1>{{ title }}</h1>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ article }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props:['src', 'title', 'article','qr'],
  data() {
    return {
      mask:'',
      move:'',
      cover:'',
    }
  },
  methods: {
    showMask() {

    },
    offMask() {

    },
    moveUp() {
      this.move = '-up'
    },
    moveDown() {
      this.move = ''
    },
    coverShow() {
        this.cover = '-on'
      this.mask = 'mask'
    },
    coverOff() {
      this.cover = ''
      this.mask = ''
    },
  }

}
</script>

<style lang="less" scoped>
.contact-box-up {
  margin-top: -20px;
  width: 362px ;
  margin-right: 38px;
  box-shadow: 0px 21px 24px 0px rgb(123 123 123 / 30%);
  position: relative;
  height: 365px;
  display: block;
  box-sizing: border-box;
  padding-top: 133px;
  border-radius: 10px;
}
  .contact-box {
    width: 362px ;
    margin-right: 38px;
    box-shadow: 0px 21px 24px 0px rgb(123 123 123 / 30%);
    position: relative;
    height: 365px;
    box-sizing: border-box;
    padding-top: 133px;
    border-radius: 10px;
  }
.qr-code {
  width: 117px;
  position: absolute;
  top: 75px;
  z-index: 99;
  img {
    width: 100%;
  }
}
.qr-code-on {
  position: absolute;
  top: 60px;
  z-index: 99;
  left: 55px;
  text-align: center;
  width: 250px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.article-box {
  h1 {
    font-size: 27px;
    font-weight: 800;
    font-family: "PingFang SC";
    margin-left: 117px;
    color: #262F48;
  }
  p::before {
    content: '';
    width: 80%;
    height: 1px;
    background: #D9D9D9;
    position: absolute;
    top: 200px;
  }
  p {
    width:276px;
    margin: 28px auto;
    color: #333333;
    font-size: 14px;
  }
}
.mask {
  background: #000000;
  top: 0px;
  position: absolute;
  opacity: 62%;
  width: 362px ;
  height: 365px;
  box-sizing: border-box;
  padding-top: 133px;
  border-radius: 10px;
}
</style>
