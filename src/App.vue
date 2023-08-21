<script>
// import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      menu: [
        { route: 'catalog', text: 'Products' },
        { route: 'cart', text: 'Cart' },
        { route: 'checkout', text: 'Order' },
      ],
    };
  },
};
</script>

<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>

          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart: {{ $store.getters['cart/length'] }}</div>
              <div>Total: {{ $store.getters['cart/total'] }}</div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </header>

    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="item in menu"
                :key="item.route"
              >
                <router-link
                  href="#"
                  :to="{ name: item.route }"
                  exact-active-class="text-danger"
                  >{{ item.text }}</router-link
                >
              </li>
            </ul>
          </div>

          <div class="col col-sm-9">
            <router-view />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
