import { reqUserLogin,reqUserInfo,reqLogout} from "@/api";
import {setToken,removeToken,getToken} from "@/utils/token"
const state = {
token:localStorage.getItem("Token"),
userInfo:{}
};
const mutations = {
    USERLOGIN(state,token){
        state.token = token
    },
    USERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token = '',
        state.userInfo = {},
        removeToken()
    }

};
const actions = {
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
     
        if(result.code ==200){
            commit("USERLOGIN",result.data.token);
           setToken(result.data.token)
            return "OK"
        }else{
            return Promise.reject(new Error("faile"));
        }
    },
    async userInfo({commit}){
        let result = await reqUserInfo();
       
        if(result.code ==200){
            commit("USERINFO",result.data);
            return "OK"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async logout({commit}){
        let result = await reqLogout();
    
        if(result.code ==200){
            commit("CLEAR")
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    }
};
const getters = {};
export default ({
    state,
    mutations,
    actions,
    getters

})