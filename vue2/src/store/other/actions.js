const actions = {
    getAddCount(context, num){
        context.commit('addCount', num)
    },
    getDelCount(context, num){
        context.commit('delCount', num)
    }
}
export default actions;