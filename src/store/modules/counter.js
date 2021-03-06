export default {
	namespaced: true,
	state: {
		count: 0,
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
	actions: {
		increment: ({ commit }) =>
			commit('increment'),
	},
};
