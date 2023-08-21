<template>
  <section>
    <div class="container">
      <div class="row">
        <app-product />
      </div>
    </div>
  </section>
</template>

<script>
import AppProduct from '@/components/AppProduct.vue';

export default {
  components: {
    AppProduct,
  },
};
</script>
