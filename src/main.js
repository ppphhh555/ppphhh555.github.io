import Vue from 'vue'
import App from './App.vue'
import router from "@/router"

	import ElementUI, { Button, Loading, MessageBox } from 'element-ui';
	import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
Vue.config.productionTip = false;
import TpyeNav from "@/components/TypeNav";
import Banner from "@/components/Banner";
import Pagination from "@/components/Pagination"
Vue.component(TpyeNav.name,TpyeNav)
import store from "./store";
import '@/mock/mockServer';
import "swiper/css/swiper.css";
Vue.component(Banner.name,Banner)
Vue.component(Pagination.name,Pagination)
// import {reqTrade} from "@/api/index"
// console.log(reqTrade());
// import {reqTrade} from "@/api/index"
// console.log(reqTrade());
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert =MessageBox.alert
import * as API from "@/api"
import atm from '@/assets/1.jpeg'
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload,{
  loading:atm
})

new Vue({
 
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
   
  },
  router,
  store,
 
}).$mount('#app')
