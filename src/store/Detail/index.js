import { reqGoodsInfo, reqAddOrUpdateCart } from "@/api"
import { getUUID } from '@/utils/uuid_token';
const state = {
    GoodsInfo: {},
    uuid_token: getUUID()
}
const mutations = {
    GOODSINFO(state, GoodsInfo) {
        state.GoodsInfo = GoodsInfo

    }
}
const actions = {
    async GoodsInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)

        if (result.code == 200) {
            commit("GOODSINFO", result.data)
        }
    },
    async addOrUpdateCart({ commit, }, { skuId, skuNum }) {
        //底下即为：加入购物车(修改商品个数)的请求,参数顺序不能瞎写
        let result = await reqAddOrUpdateCart(skuId, skuNum);
        if (result.code == 200) {
            return "OK"
        } else {
            return Promise.reject(new Error("faile"))
        }

        //思考问题:目的是前端把商品的ID、商品个数传递给服务器【人家服务器，兄弟我收到了,没有额外的给你传递其余的数据】
        //想的问题:豪哥不对，咱们以前经常commit条件mutation存储数据【没有返回数据，没有数据可存储】,没有需要提交mutation让仓库
        //存储数据
        //第一种解决方案code,完全可以！！！！

    }
}
const getters = {
    categoryView(state) {
        return state.GoodsInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.GoodsInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.GoodsInfo.spuSaleAttrList || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}
