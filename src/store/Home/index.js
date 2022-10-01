import { reqCategoryList, reqBannerList, reqFloorList, reqSearchList} from "@/api";

const state = {
    categroyList: [],
    bannerList: [],
    FloorList: [],
    getSearchList: {}
};
const mutations = {
    CATEGROYLIST(state, categroyList) {
        state.categroyList = categroyList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state, FloorList) {
        state.FloorList = FloorList;
    },
    GETSEARCHLIST(state, getSearchList) {
        state.getSearchList = getSearchList
    }
};

    
const actions = {
    async categroyList({ commit }) {
        let result = await reqCategoryList();
        if (result.code >= 200 && result.code <300) {
            commit("CATEGROYLIST", result.data)
        }

    },
    async bannerList({ commit }) {
        let result = await reqBannerList();
        if (result.code == 200) {
            commit("BANNERLIST", result.data)
        }
    },
    async FloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit("FLOORLIST", result.data)
        }

    },
    async getSearchList({ commit }, params = {}) {
        let result = await reqSearchList(params);
       
        if (result.code ==200 ) {
            commit("GETSEARCHLIST", result.data)
        }
       
    },


};
const getters = {
    goodsList(state) {
        return state.getSearchList.goodsList || [];
    },

    trademarkList(state) {
        return state.getSearchList.trademarkList || [];
    },
    attrsList(state){
        return state.getSearchList.attrsList || []
    }
};
export default ({
    state,
    mutations,
    actions,
    getters

})