// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAMap from 'vue-amap'
import VueAxios from 'vue-axios'
import axios from "axios";

Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAMap)
Vue.use(VueAxios)
Vue.use(router)

VueAMap.initAMapApiLoader({
  key: '961ac5cff4bf7c9f5159abc82d80c223',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '0.5.10'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
