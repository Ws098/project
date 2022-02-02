import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import createLogger from "vuex/dist/logger";

Vue.use(Vuex)

// 是否正式环境
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})