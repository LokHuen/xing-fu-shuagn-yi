<template>
  <div class="contact-container">

    <div class="slot-box">
      <ContactCard
        v-for = "(item, index) in contactList"
        :qr = "item.qr"
        :title="item.title"
        :article = "item.article"
        :key="item.id"
        :class="'bg-'+ (index+1)"
      ></ContactCard>
    </div>

  </div>
</template>

<script>
import ContactCard from './ContactCard'
export default {
  name: 'ContactUS',
  data() {
    return {
      contactList: [
        {qr:require('@/assets/contact-images/qr-01.jpg'), src: require('@/assets/contact-images/img_01.png'), id: 1, title: '幸福双翼家长学堂', article:'来幸福双翼，让我们陪你：成就优雅从容的自我，培养阳光自信的孩子，构建幸福温暖的家庭。'},
        {qr: require('@/assets/contact-images/qr-02.jpg'), src: require('@/assets/contact-images/img_02.png'), id: 2, title: '幸福双翼训练营', article: '专业的家庭教育学习+14天陪伴式学习，幸福双翼训练营带你告别焦虑 ，迎来轻松育儿新时代！'},
        {qr: require('@/assets/contact-images/qr-03.jpg'), src: require('@/assets/contact-images/img_03.jpg'), id: 3,title: '远见教育', article: '我们致力于推动中国家庭教育的发展与进步。关注我们，一起来“为幸福中国而教”！'},
      ],
    }
  },
  components: {ContactCard}
}
</script>

<style lang="less" scoped>
  .contact-container {
    .slot-box {
      display: flex;
      width: 1200px;
      margin: 0 auto;
      height: 400px;
    }
  }
  .bg-1 {
    background-image: url(../assets/contact-images/img_01.png);
    background-repeat:no-repeat;
  }
  .bg-2 {
    background-image: url(../assets/contact-images/img_02.png);
    background-repeat:no-repeat;
  }
  .bg-3 {
    background-image: url(../assets/contact-images/img_03.jpg);
    background-repeat:no-repeat;
  }
</style>
