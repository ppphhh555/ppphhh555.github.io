// import { reqSearchList } from "@/api";
// const state = {
//     getSearchList: {}
// };
// const mutations = {
//     GETSEARCHLIST(state, getSearchList) {
//         state.getSearchList = getSearchList
//     }
// }
// const actions = {
//     async getSearchList({ commit }, params = {}) {
//         let result = await reqSearchList(params);
//         console.log(result);
//         if (result.code ==200 ) {
//             commit("GETSEARCHLIST", result.data)

//         }
       
//     }
// }
// const getters = {
//     //这里的state是当前仓库中的state
//     goodsList(state) {
//         return state.getSearchList.goodsList || [];
//     },

//     trademarkList(state) {
//         return state.getSearchList.trademarkList || [];
//     },
//     attrsList(state){
//         return state.getSearchList.attrsList || []
//     }
// }
// export default {
//     state,
//     mutations,
//     actions,
//     getters
// }