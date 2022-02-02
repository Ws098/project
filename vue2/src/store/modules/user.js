// 用户信息的全局数据源
const state = {
    isLogin: false,
    name: '',

    collect: []
}

// getters 计算属性，缓存数据
const getters = {
    getCollectNum: (state) => {
        return state.collect.length
    }
}

// actions 异步操作
const actions = {
    loginAction ({ commit }, userInfo) {
      commit('setLogin', true)
      commit('setName', userInfo.name)
    }
}

// mutations 同步改变数据源
const mutations = {
    setLogin (state, isLogin) {
        state.isLogin = isLogin
    },

    setCheckoutStatus (state, name) {
        state.name = name
    }
}
  
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}