<template>
  <div id="self-grow">
    <Banner
      :height="this.height"
      :bannerList="this.bannerList"
    ></Banner>
    <el-divider content-position="center">践行故事</el-divider>
    <Article
      v-for="(item, index) in newArticleList[page]"
      :imgSrc="item.imgSrc"
      :title="item.title"
      :author="item.author"
      :article="item.article"
    ></Article>
    <PageNumber :pageList = "this.articleList" :pages = "this.pages" @change="changePage"></PageNumber>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Article from '@/components/Article.vue'
import axios from 'axios'
import PageNumber from '@/components/PageNumber.vue'

export default {
  name: 'FamilyPeace',
  data() {
    return {
      height: '600px',
      pages:0,
      page: 0,
      limit: 4,
      articleList: [],
      bannerList:[
        {src:'static/happy-practice-img/grow/banner-peace.jpg'},
        {src:'static/happy-practice-img/grow/banner-peace.jpg'},
        {src:'static/happy-practice-img/grow/banner-peace.jpg'},
      ],
      newArticleList: []
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    async initArticleList() {
      const { data: res } = await axios.get("static/articles.json",{
        params:{
          _page: this.page,
          _limit: this.limit
        },
      })
      this.articleList = res.data.articleList
      console.log(this.articleList)
      this.pages = Math.ceil(this.articleList.length/4)
      for(let i = 0, j = this.articleList.length; i < j; i += this.limit) {
        this.newArticleList.push(this.articleList.slice(i,i + this.limit))
      }
      console.log(this.newArticleList)
    },
    changePage(val) {
      this.page = val
      console.log(val)
    }

  },
  components: {PageNumber, Article, Banner}
}
</script>

<style lang="less" scoped>
//el 分割线
.el-divider--horizontal {
  margin: 100px auto;
  width: 700px;
  height: 3px;
  background-color: #F7B267;
}
//el 分割线中文字
.el-divider__text {
  font-size: 28px;
  color: #F7B267;
  padding: 0 80px;
}
</style>
