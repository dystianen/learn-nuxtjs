<script setup lang="ts">
const store = useProductStore();
const search = computed(() => store.search);
const { data: products } = useFetch(`https://freetestapi.com/api/v1/products`, {
  query: { search },
  lazy: true,
  server: false,
  watch: [search],
});
</script>

<template>
  <h1 style="margin-bottom: 20px">Products</h1>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    <CardProduct
      v-for="product of products"
      :title="product.name"
      :price="product.price"
      :image="product.image"
    />
  </div>
</template>

<style scoped></style>
