import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);
//引入小仓库
import Home from "./Home";
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";
import Detail from "./Detail";
import ShopCart from "./ShopCart"
import trade  from "./Trade/trade";


export default new Vuex.Store({
  modules: {
    Home,
    Search,
    Login,
    Register,
    Detail,
    ShopCart,
    trade

  }
})

