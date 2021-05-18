import { createStore } from 'vuex'

export default createStore({
  state: {
    index:0,
    num: 5
  },
  getters: {
    returnColor: state => {
      if(state.index === 2) {
        return 'white'
      }else{
        return 'black'
      }
    }
  },
  mutations: {
    next(state){
      state.index = (state.index + 1) %  state.num
    },
    prev(state){
      state.index = (state.index - 1 + state.num) % state.num
    },
    move(state,i){
      state.index = i;
    },
    resetId(state) {
      state.intervalId = 0;
    }
  },
  actions: {
    slide(context) {
      context.state.intervalId=setInterval(() => {
        context.commit('next')
      },5000)
    },
    restart(context) {() => {
      clearInterval(context.state.intervalId);
      setInterval(context.state.intervalId);
    }
    }
  },
  modules: {
  }
})
