<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', { products: 'itemsDetailed' }),
  },
  methods: {
    ...mapActions('cart', ['setCnt']),
  },
};
</script>

<template>
  <div>
    <h1>Cart</h1>

    <hr />

    <div v-for="pr in products" :key="pr.id">
      <div>Title: {{ pr.title }}</div>
      <div>Price: {{ pr.price }}</div>
      <div>Cnt: {{ pr.cnt }}</div>
      <div>Total: {{ pr.price * pr.cnt }}</div>

      <button
        class="btn btn-warning me-2"
        @click="setCnt({ id: pr.id, cnt: pr.cnt - 1 })"
      >
        -1
      </button>
      <button
        class="btn btn-success"
        @click="setCnt({ id: pr.id, cnt: pr.cnt + 1 })"
      >
        +1
      </button>

      <hr />
    </div>

    <!-- <router-link class="btn btn-success" to="/checkout">Order now</router-link> -->
    <router-link class="btn btn-success" :to="{ name: 'checkout' }"
      >Order now</router-link
    >
  </div>
</template>
