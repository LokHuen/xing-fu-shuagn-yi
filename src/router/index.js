import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/views/MyHome'
import HappyPage from '@/views/HappyPage'
import SelfGrow from '@/views/SelfGrow'
import ParentingEducation from '@/views/ParentingEducation'
import FamilyPeace from '@/views/FamilyPeace'
import ChildSpeak from '@/views/ChildSpeak'
import CourseProject from '@/views/CourseProject'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path:'/', redirect:'/home' },
    { path: '/home', component: MyHome },
    { path: '/speak', component: ChildSpeak },
    { path: '/happy', component: HappyPage,
      children: [
        { path: 'grow', component: SelfGrow },
        { path: 'parenting', component: ParentingEducation },
        { path: 'family', component: FamilyPeace }
      ] },
    { path: '/course', component: CourseProject,
      children: [
        { path: 'items', component: SelfGrow },
        { path: 'group', component: ParentingEducation }
      ] },
    { path: '/practice', component: HappyPage,
      children: [
        { path: 'grow', component: SelfGrow },
        { path: 'parenting', component: ParentingEducation },
        { path: 'family', component: FamilyPeace }
      ] },
  ]
})
// 全局前置守卫
// router.beforeEach((to, from, next) => {
//     // if( pathArr.indexOf(to.path) !== -1) {
//   if( to.path === '/home' || to.path === '/home/users' || to.path === '/home/rights' ) {
//       const token = localStorage.getItem('token')
//       if(token){
//         next()
//       }
//       else{
//         alert('请先登录！')
//         next('/login')
//       }
//     }
//     else {
//       next()
//     }
//   })

export default router
