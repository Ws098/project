export default {
    //实时监听state变化
    getCount(state){//承载变化的count的值
        return state.count;
    },

    isShow(state){//承载变化的showNum的值
        return state.showNum;
    }
}