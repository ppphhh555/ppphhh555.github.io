import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store"
Vue.use(VueRouter);
import routes from "./routers"
import trade from "@/store/Trade/trade";

//重写Vuerouter圆形对象上的push方法
let newpush = VueRouter.prototype.push;
let newReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        newpush.call(this, location, resolve, reject)
    } else {
        newpush.call(this, location, () => { }, () => { })
    }
    VueRouter.prototype.replace = function (loction, resolve, reject) {
        if (resolve && reject) {
            newReplace.call(this, location, resolve, reject)
        } else {
            newReplace.call(this, location, () => { }, () => { })
        }
    }

}
let router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // 代表滚动条在最顶部
        return { y: 0 }
    }
})
//全局守卫
router.beforeEach( async(to, from, next) => {
    //to:获取到要跳转到哪个路由信息
    //from:可以获取到从哪个路由而来的信息
    //next:放行函数

    let token = store.state.Login.token
    let name = store.state.Login.userInfo.name
   

    if (token) {
        if (to.path == 'login') {
            next("/home");
        } else {
          if(name){
            next();
          }else{
            try {
                await  store.dispatch("userInfo");
                next()
            } catch (error) {
                store.dispatch("logout")
            }
          }
        }

    } else {
        let topath = to.path;
        if(topath.indexOf('/trade') !==-1 || topath.indexOf('/pay') !==-1 || topath.indexOf('/center') !==-1){
            next('/login?redirect='+topath)
        }else{
           next()
        }
    }
})
export default router

