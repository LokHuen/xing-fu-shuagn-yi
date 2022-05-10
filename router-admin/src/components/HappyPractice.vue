<template>
  <div class="box" >
    <Title :title="title"></Title>
    <el-button icon="el-icon-arrow-left" class="back-btn" @click="back"></el-button>
    <el-button icon="el-icon-arrow-right" class="forward-btn" @click="forward"></el-button>
    <div class="swiper" id="swiper">
      <div :class="'swiper-time-' + (this.index)">
        <img :src="this.countList[0].src">
      </div>
      <div :class="'swiper-time-' + (this.index + 3)">
        <img :src="this.countList[3].src">
      </div>
      <div :class="'swiper-time-' + (this.index + 2)">
        <img :src="this.countList[2].src">
      </div>
      <div :class="'swiper-time-' + (this.index + 1)">
        <img :src="this.countList[1].src">
      </div>
    </div>
   <div class="active-box">
     <div class="dot-box">
       <span :class="this.countList[0].state"></span><span :class="this.countList[1].state"></span><span  :class="this.countList[2].state"></span><span :class="this.countList[3].state"></span>

     </div>
   </div>
  </div>
</template>

<script>
import Title from './Title'

export default {
  name: 'HappyPractice',
  data () {
    return {
      time: 3000,
      index: 0
    }
  },
  props: {
    title: {
      type: String,
      default:''
    },
    countList: {
      type: Array,
      default: () => []
    },
  },
  mounted () {
    this.countDown()
  },
  computed: {
    changeState() {

    }
  },
  methods:{
    addSetInterval(){},
    back(){
      this.index--
      if(this.index >= 0){

        this.countList[this.index].state = 'active'
        this.countList[this.index+1].state = 'off'

      }
      else{
        this.index = 3
        this.countList[this.index].state = 'active'
        this.countList[0].state = 'off'
      }
    },
    forward(){
      this.index++
      if(this.index < 4){

        this.countList[this.index].state = 'active'
        this.countList[this.index-1].state = 'off'
      }
      else{
        this.index = 0
        this.countList[this.index].state = 'active'
        this.countList[this.countList.length-1].state = 'off'

      }
    },
    clearSetInterval(){

    },
    countDown(){
      this.addSetInterval = setInterval(() =>{
          this.index++
        if(this.index > 3){
          this.index = 0
          this.countList[this.index].state = 'active'
          this.countList[this.countList.length-1].state = 'off'
         }
          this.countList[this.index-1].state = 'off'
          this.countList[this.index].state = 'active'
        }
        ,this.time)
    },

  },
  components:{
    Title
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 600px;
  width: 954px;
  margin: 0 auto 50px auto;
  button.back-btn{
    position: absolute;
    left:20%;
    margin-top:150px;
    background: #f7b267;
    height: 95px;
    width: 50px;
    color:#fff;
    border: none;
    opacity: 0.62;
  }
  button.forward-btn{
    position: absolute;
    right:20%;
    margin-top:150px;
    line-height: 20px;
    background: #f7b267;
    height: 95px;
    width: 50px;
    color:#fff;
    border: none;
    opacity: 0.62;
  }
  .active-box{
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    .dot-box {
      text-align: center;
      display: inline-block;
      margin-right: -10px;
    }
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 10px;
      border-radius: 10px;
      background: #f7b267;
    }
    .active {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: indianred;
      margin-right: 10px;
      border-radius: 10px;
    }
    .off {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #f7b267;
      margin-right: 10px;
      border-radius: 10px;
    }
  }

}

.swiper,
#swiper {
  height: 400px;
  position: relative;
  img {
    width: 100%;
  }
}

.swiper div {
  position: absolute;
  width: 624px;
  height: 368px;
  overflow: hidden;
  left: 165px;
  top: 0;
  transition: 0.5s;
  color: #333333;
  font-size: 50px;
  text-align: center;
  line-height: 200px;

}

.swiper-time-1, .swiper-time-5{
  opacity: 1;
  z-index: 23;
  -webkit-transform: translateX(255px) translateZ(-253px);
  -ms-transform: translateX(255px) translateZ(-253px);
  transform: perspective(500px) translateX(400px) translateZ(-253px);
  -webkit-box-reflect: below 10px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(30%, transparent), to(rgba(250, 250, 250, 0.3)));
}

.swiper-time-2, .swiper-time-6{
  opacity: 1;
  z-index: 33;
  -webkit-box-reflect: below 10px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(30%, transparent), to(rgba(250, 250, 250, 0.3)));
  transform: translateX(0) translateZ(0px) rotateY(0deg)
}

.swiper-time-3{
  opacity: 1;
  z-index: 23;
  -webkit-box-reflect: below 10px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(30%, transparent), to(rgba(250, 250, 250, 0.3)));
  -webkit-transform: translateX(255px) translateZ(-253px);
  -ms-transform: translateX(255px) translateZ(-253px);
  transform: perspective(500px) translateX(-400px) translateZ(-253px);
}

.swiper-time-0, .swiper-time-4{
  opacity: 0;
  z-index: -1;
  -webkit-transform: translateX(0) translateZ(-253px) rotateY(0);
  -ms-transform: translateX(0) translateZ(-253px) rotateY(0);
  transform: perspective(500px) translateX(0) translateZ(-253px) rotateY(0);

}
</style>
