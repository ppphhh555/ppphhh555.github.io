import { reqAddressInfo,reqTrade } from "@/api";
const state = {
    addressInfo:[],
    tradeInfo:{}
};
const mutations = {
    ADDRESSINFO(state,addressInfo){
        state.addressInfo = addressInfo;
    },
    GETTRADE(state,tradeInfo){
        state.tradeInfo = tradeInfo;
    }
};
const actions = {
    async getAddressInfo({commit}){
        let result = await reqAddressInfo()
       
       if(result.code ==200){
        commit("ADDRESSINFO",result.data)
        return "ok"
       }else{
        return Promise.reject(new Error("faile"))
       }
    },
    async getTrade({commit}){
        let result  = await reqTrade()
            console.log(result);
        if(result.code === 200){
            commit("GETTRADE",result.data)
        }
       

    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}
