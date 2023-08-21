<script>
import { mapGetters, mapActions } from 'vuex';
import AppE404 from './AppE404.vue';

export default {
  components: {
    AppE404,
  },
  computed: {
    ...mapGetters('products', { productById: 'one' }),
    ...mapGetters('cart', ['inCart']),
    id() {
      return parseInt(this.$route.params.id);
    },
    validId() {
      return /^[1-9]+\d*$/.test();
    },
    product() {
      return this.productById(this.id);
    },
    hasProduct() {
      return this.product !== undefined;
    },
  },

  methods: {
    ...mapActions('cart', ['add', 'remove']),
  },
};
</script>

<template>
  <div v-if="hasProduct">
    <h1>{{ product.title }}</h1>

    <hr />

    <div>Price: {{ product.price }}</div>

    <hr />

    <button
      v-if="inCart($route.params.id)"
      @click="remove($route.params.id)"
      type="button"
      class="btn btn-danger"
    >
      Remove
    </button>

    <button
      v-else
      @click="add($route.params.id)"
      type="button"
      class="btn btn-success"
    >
      Add to cart
    </button>
  </div>

  <app-e-404 v-else />
</template>
