const state = {
  count: 0
};

const getters = {
  getCount: state => state.count
};

const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement')
};

export default {
  state,
  getters,
  mutations,
  actions
};
