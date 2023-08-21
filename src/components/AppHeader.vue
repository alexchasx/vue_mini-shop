<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col col-sm-12">
          <h1>Site</h1>
          <app-cart />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppCart from '@/components/AppCart.vue';

export default {
  components: {
    AppCart,
  },
};
</script>
