import homeData from '../../datas/home';

const state = {
  homeData: null
};

const getters = {
  getHomeData(state) {
    return state.homeData;
  }
};

const actions = {
  getHomeData({ commit }) {
    setTimeout(() => {
      commit('getHDSuccess', homeData);
    }, 300);
  }
};

const mutations = {
  getHDSuccess(state, data) {
    state.homeData = data.homeData
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
