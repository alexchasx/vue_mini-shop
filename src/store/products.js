export default {
  namespaced: true,
  state: {
    items: [],
    // items: stub(),
  },

  getters: {
    all: (state) => state.items,
    one: (state) => (id) => state.items.find((item) => item.id == id),
  },

  mutations: {
    setItems(state, products) {
      state.items = products;
    },
  },

  actions: {
    async load({ commit }) {
      try {
        const response = await fetch(
          'http://faceprog.ru/reactcourseapi/products/all.php'
        );
        const products = await response.json();
        commit('setItems', products);
      } catch (e) {
        console.log('error', e);
      }
    },
  },
};

// function stub() {
//   return [
//     { id: 100, title: 'Ipnone 200', price: 12000, rest: 10 },
//     { id: 101, title: 'Samsung AAZ8', price: 22000, rest: 5 },
//     { id: 103, title: 'Nokia 3310', price: 5000, rest: 2 },
//     { id: 105, title: 'Huawei XZ', price: 15000, rest: 8 },
//     { id: 106, title: 'Ipnone XX', price: 14000, rest: 8 },
//     { id: 107, title: 'Samsung XZ', price: 22000, rest: 5 },
//     { id: 108, title: 'Nokia 111', price: 7000, rest: 2 },
//     { id: 110, title: 'Huawei XZ', price: 10000, rest: 5 },
//     { id: 120, title: 'NoPhone', price: 30000, rest: 2 },
//   ];
// }
