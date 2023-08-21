const BASEURL = 'http://faceprog.ru/reactcourseapi/cart/';

export default {
  namespaced: true,
  state: {
    items: [],
    token: null,
  },

  getters: {
    inCart: (state) => (id) => state.items.some((item) => item.id == id),
    length: (state) => state.items.length,
    itemsDetailed: (state, getter, rootState, rootGetters) => {
      return state.items.map((item) => {
        const product = rootGetters['products/one'](item.id);
        return { ...product, cnt: item.cnt };
      });
    },
    total: (state, getters) =>
      getters.itemsDetailed.reduce((t, i) => t + i.price * i.cnt, 0),
  },

  mutations: {
    load(state, { cart, token }) {
      state.items = cart;
      state.token = token;
    },
    add(state, id) {
      state.items.push({ id, cnt: 1 });
    },
    remove(state, id) {
      state.items = state.items.filter((item) => item.id != id);
    },
    setCnt(state, { id, cnt }) {
      const item = state.items.find((item) => item.id == id);
      item.cnt = cnt;
    },
  },

  actions: {
    async load({ commit }) {
      try {
        const oldToken = localStorage.getItem('CART__TOKEN');
        const response = await fetch(`${BASEURL}load.php?token=${oldToken}`);
        const { cart, token, needUpdate } = await response.json();

        if (needUpdate) {
          localStorage.setItem('CART__TOKEN', token);
        }

        commit('load', { cart, token });
      } catch (e) {
        console.log('error', e);
      }
    },
    async add({ commit, getters, state }, id) {
      if (!getters.inCart(id)) {
        try {
          const response = await fetch(
            `${BASEURL}add.php?token=${state.token}&id=${id}`
          );
          const res = await response.json();

          if (res) {
            commit('add', id);
          }
        } catch (e) {
          console.log('error', e);
        }
      }
    },
    async remove({ commit, getters, state }, id) {
      if (getters.inCart(id)) {
        try {
          const response = await fetch(
            `${BASEURL}remove.php?token=${state.token}&id=${id}`
          );
          const res = await response.json();

          if (res) {
            commit('remove', id);
          }
        } catch (e) {
          console.log('error', e);
        }
      }
    },
    // TODO: внедрить работу с API для этого метода
    setCnt({ commit, getters }, { id, cnt }) {
      if (getters.inCart(id)) {
        const item = getters.itemsDetailed.find((item) => item.id == id);
        const validCnt = Math.min(Math.max(cnt, 1), item.rest);
        commit('setCnt', { id, cnt: validCnt });
      }
    },
  },
};
