<template>
  <div class="courses-container">
  <Title :title="title"></Title>
  <div class="core-course">
    <div class="category">
      <div>
        <img :src="this.countList[0].src">
      </div>
      <div>
        <div class="course-title">《家学》专业课程，由幸福双翼家庭大学开设， 以幸福双翼教育体系为指导，是一门升级自我、幸福家庭和教育子女的学问。</div>
        <div class="course">

          <div class = "course-box" v-for = "(item, index) in articleList1" :key = "index">
            <div :class = "'course-name' + (item.before)"  @click = "switchState(index)">{{ item.title }}</div>
            <div class = "intro" v-if = " item.state === true ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.article }}</div>
          </div>

        </div>

      </div>
    </div>
    <div class="category">
      <div>
        <img :src="this.countList[1].src">
      </div>
      <div>
        <div class="course-title">
          围绕幸福双翼教育体系及PDP性格测评开发设计的一系列专业线下课程，帮助学员及家庭更好地进行专项课题的学习
        </div>
        <div class="course">
          <div class = "course-box" v-for = "(item, index) in articleList2" :key = "index">
            <div :class = "'course-name'+ (item.before)" @click = "switchState2(index)">{{ item.title }}</div>
            <div class = "intro" v-if = " item.state === true ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.article }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="category">
      <div>
        <img :src="this.countList[2].src">
      </div>
      <div>
        <div class="course-title">
          包含训练营、短期小课等丰富且落地的实用类精品课程
        </div>
        <div class="course">
          <div class = "course-box" v-for = "(item, index) in articleList3" :key = "index">
            <div :class = "'course-name' + (item.before)" @click = "switchState3(index)">{{ item.title }}</div>
            <div class = "intro" v-if = " item.state === true ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.article }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Title from './Title'

export default {
  name: 'Courses',
  data(){
    return {

      title:'核心课程',
      countList: [
        {src: require('@/assets/course-banner/banner_01.png'), id: 1},
        {src: require('@/assets/course-banner/banner_02.png'), id: 2},
        {src: require('@/assets/course-banner/banner_03.png'), id: 3}
      ],
      articleList1: [
        {
          id: 1,
          title: '亲情教育',
          article: '本模块包括《生命铁三角》《家庭模式与夫妻情感》2门课程，重点探讨如何夯实新生家庭的亲情联结、提升夫妻情感、以及升级家庭模式，让幸福代代相传的理念和方法。',
          state:false,
          before:'',

        },
        {
          id: 2,
          title: '人格成长',
          article: '本模块包括《如何培养孩子自信心》《性格与命运的内在规律》《平衡情绪》3门课程，重点探讨提升孩子自信心、发挥孩子性格资源及提升孩子情绪管理能力的理念和方法。',
          state:false,
          before:'',
        },
        {
          id: 3,
          title: '知识增长',
          article: '本模块包括《学习的身心基础》《教育升级2030》2门课程，重点探讨提升孩子学习的动力和兴趣、改善孩子面对学业的压力、提升孩子学习的生理基础的理念和方法。',
          state:false,
          before:'',
        },
        {
          id: 4,
          title: '自我成长',
          article: '本测评采用全球最权威动态量化、集行为科学与统计学为一体的专利技术——美国PDP测评工具进行，该工具被称为隐性才干的“X”光机；通过国内专业系统的人格特质发展的建议和指导，你将收获——性格优势与自我盲区、行为调整的有效性与解决方案、有效沟通方式与个性化的修炼指导。',
          state:false,
          before:'',
        }
      ],
      articleList2: [
        {
          id: 1,
          title: '亲幸福双翼PDP性格测评与咨询',
          article: '本模块包括《生命铁三角》《家庭模式与夫妻情感》2门课程，重点探讨如何夯实新生家庭的亲情联结、提升夫妻情感、以及升级家庭模式，让幸福代代相传的理念和方法。',
          state:false,
          before:'',
        },
        {
          id: 2,
          title: '家庭沟通共识营',
          article: '为了进一步帮助幸福双翼《家学》学员清晰认知自我，加强家庭共识与正向沟通，切实有效地提升自我、培养孩子自信心，幸福双翼特别推出《幸福双翼家庭沟通共识营》培训课程。该课程基于全球知人善用权威工具——美国PDP 性格测评，结合幸福双翼本土化研究成果（长期针对企业成功人士、幸福家庭大数据持续研究），帮助广大家长在自我成长、培养孩子的过程中提供科学、有效、动态且长期的支持。',
          state:false,
          before:'',

        },
        {
          id: 3,
          title: '幸福双翼轻松学习亲子营',
          article: '以学习的身心基础为核心，设计亲子共同参与的科学趣味活动，循序渐进提升孩子学习的生理发育基础、面对学业和压力的心理基础，并通过全程践行幸福双翼341肯定法、如实反馈法、启发式提问等方法，有效改善当今社会“一题作业鸡飞狗跳”的困境。',
          state:false,
          before:'',

        },
        {
          id: 4,
          title: '幸福双翼自信心夏令营',
          article: '丹尼逊®健脑操26式课程，是一门通过26个简单的游戏化的动作学习，全面激活和打开我们的视觉、听觉、触觉、运动觉，改善脑中心的协作状态，进而提升面对学习的正向态度，让全脑学习真正发生的课程。因为对学习的提升与改善上，具有科学显著的提升和贡献，丹尼逊®健脑操连续31年被美国国家学习基金会评为——“现代最领先的学习工具之一”。',
          state:false,
          before:'',
        },
        {
          id: 4,
          title: '丹尼逊®健脑操26式课程',
          article: '丹尼逊®健脑操26式课程，是一门通过26个简单的游戏化的动作学习，全面激活和打开我们的视觉、听觉、触觉、运动觉，改善脑中心的协作状态，进而提升面对学习的正向态度，让全脑学习真正发生的课程。因为对学习的提升与改善上，具有科学显著的提升和贡献，丹尼逊®健脑操连续31年被美国国家学习基金会评为——“现代最领先的学习工具之一”。',
          state:false,
          before:'',
        }
      ],
      articleList3: [
        {
          id: 1,
          title: '焦虑妈妈变形计',
          article: '通过14天在线集训式学习，掌握7个育儿锦囊，突破3大常见教育难题。适合刚刚接触家庭教育学习，想要体验学习效果的家长。',
          state:false,
          before:'',
        },
        {
          id: 2,
          title: '如何培养孩子的好习惯',
          article: '著名教育家叶圣陶说，教育就是培养习惯。我们都知道好的习惯让人受益终生。可是如何培养孩子的好习惯呢？培养好习惯并不需要有强意志力，而是需要有策略有方法的进行。本课程带你一起学习如何培养幼儿的好习惯。',
          state:false,
          before:'',
        },
        {
          id: 3,
          title: '多子女养育',
          article: '本课程围绕家有多子女经常遇到的3大困扰，提供6个多子女养育技巧，让家长面对多个孩子，都能给足充分的爱和接纳，让孩子之间真正的血浓于水、相亲相爱。适合家有多个孩子，希望给到每个孩子高品质爱、帮助孩子建立深厚感情的家长学习。',
          state:false,
          before:'',
        },
        {
          id: 4,
          title: '自然养育',
          article: '丹本课程围绕婴幼儿0-3岁的重要发育，解析每个阶段的发育——新生儿夜哭、啃手、抬头、翻身、爬行、站立、走路、幼儿园的入园准备等，共计12个具体养育技巧和注意事项。课程还结合每个阶段的发育重点，给出针对性的养育方案，帮助父母在养育孩子的过程中，科学养育、轻松从容。适合新婚夫妻、新手父母，以及想要给孩子自然科学养育的家长。',
          state:false,
          before:'',
        },
        {
          id: 4,
          title: '青春期父母行动营',
          article: '本课程将带领家长了解——父母必备的3个基础内容，掌握父母必备的3项核心技能，聚焦解决青春期孩子养育中常见的4大焦点问题，支持家长轻松陪伴孩子走过青春期，迎来全新的人生成长与蜕变。',
          state:false,
          before:'',
        }
      ]
    }
  },
  methods: {
    switchState(index) {
      this.articleList1[index].state = !this.articleList1[index].state

      if( this.articleList1[index].before === ''){
        this.articleList1[index].before = '-change'
      }
      else {
        this.articleList1[index].before = ''
      }
      console.log( this.articleList1[index])

      console.log(index)
      // if(this.articleList1[index].state === true) {
      //   this.articleList1[index].state = false
      // }
      // else{
      //   this.articleList1[index].state = true
      // }
    },
    switchState2(index) {
      this.articleList2[index].state = ! this.articleList2[index].state
      if( this.articleList2[index].before === ''){
        this.articleList2[index].before = '-change'
      }
      else {
        this.articleList2[index].before = ''
      }
      console.log(index)
    },
    switchState3(index) {
      this.articleList3[index].state = !this.articleList3[index].state
      if( this.articleList3[index].before === ''){
        this.articleList3[index].before = '-change'
      }
      else {
        this.articleList3[index].before = ''
      }
      console.log(index)
    },
  },
  components: {
    Title
  }
}
</script>

<style lang="less" scoped>
.course-name {
  cursor: pointer;
  line-height: 48px;
  margin: 0 auto;
  width:217px;
  background: #FFFFFF;
  box-shadow: 0px 14px 25px 0px rgba(123, 123, 123, 0.3);
  border-radius: 5px;
  padding-left:60px;
  padding-right:20px;
  height: 48px;
  font-size: 14px;
  transform: translateY(-40px);
  margin: 20px auto;
}
.course-name-change {
  cursor: pointer;
  line-height: 48px;
  margin: 0 auto;
  width:217px;
  background: #FFFFFF;
  box-shadow: 0px 14px 25px 0px rgba(123, 123, 123, 0.3);
  border-radius: 5px;
  padding-left:60px;
  padding-right:20px;
  height: 48px;
  font-size: 14px;
  transform: translateY(-40px);
  margin: 20px auto;
}
.course-name::before{
  margin: 0 auto;
  top: 17px;
  left: 40px;
  position: absolute;
  content: '';
  border-top:8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #fc4a1a;
}
.course-name-change::before {
  margin: 0 auto;
  top: 22px;
  left: 38px;
  position: absolute;
  content: '';
  border-top: 8px solid #fc4a1a;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
}
.intro {
  margin: 20px auto;
  width:267px;
  background: #FFFFFF;
  box-shadow: 0px 14px 25px 0px rgba(123, 123, 123, 0.3);
  border-radius: 5px;
  padding: 16px 14px;
  font-size: 14px;
  transform: translateY(-40px);
}
.intro::before {
  margin: 0 auto;
  left: 136px;
  top:-6px;
  position: absolute;
  content: '';
  border: 6px solid #fff;
  transform: rotate(45deg);
}
.core-course {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  .course-title{
    margin: 0 auto;
    width:267px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 14px 25px 0px rgba(123, 123, 123, 0.3);
    border-radius: 5px;
    padding: 16px 14px;
    font-size: 14px;
    transform: translateY(-40px);
  }
  .category{
    margin: 0px 68px 0px 0px ;
  }
}
.el-dropdown-link {
  display: inline-block;
  cursor: pointer;
  width: 267px;
  height: 48px;
  line-height: 48px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px 0px rgba(123, 123, 123, 0.2);
  border-radius: 5px;
  background-size: 8px 14px;
  cursor: pointer;
  margin: 0 auto;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
