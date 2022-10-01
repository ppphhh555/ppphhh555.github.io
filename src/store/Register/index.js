import {reqGetCode,regUserRegister} from "@/api/index"
const state = {
    code:""
};
const mutations = {
    GETCODE(state,code){
       state.code = code;
    }
};
const actions = {
  async  getCode({commit},phone){
        let result =await reqGetCode(phone)
        
 if(result.code==200){
    commit("GETCODE",result.data);
    return "OK"
 }else{
    return Promise.reject(new Error("faile"))
 }
    },
    async userRegister({commit},user){
        let result = await regUserRegister(user);
       
        if(result.code==200){
            return "OK"
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