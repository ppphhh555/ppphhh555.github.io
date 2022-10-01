import { reqCartList,reqDeleteCart,reqUpdataCart } from "@/api"
const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
};
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    async getDeleteCart({commit},skuId){
        let result = await reqDeleteCart(skuId);
        if(result.code == 200){
            return "OK"
        }else{
            return Promise.reject(new Error("fiale"))
        }

    },
    async updataCart({commit},{skuId,isChecked}){
        let result = await reqUpdataCart(skuId,isChecked);
        if(result.code ==200){
            return "OK"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
    let promise =  item.isChecked ==1?dispatch('getDeleteCart',item.skuId):'';
    PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    updateAllChecked({dispatch,state},isChecked){
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach((item)=>{
          let promise = dispatch('updataCart',{skuId:item.skuId,isChecked});
          PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
};
const getters = {
    cartList(state){
    return state.cartList[0] || {}
},

};
export default {
    state,
    mutations,
    actions,
    getters
}