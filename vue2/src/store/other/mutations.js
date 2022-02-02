const mutations = {
    addCount(state, num){
        state.count = state.count + num;
    },
    delCount(state, num){
        if(state.count > 0){//count到0就不能少
            state.count = state.count - num;
        }else{
            state.count = 0;
        }
        
    }
}
export default mutations;