<script setup>
const props = defineProps(["title", "price", "image"]);
</script>
<template>
  <UCard class="card-product">
    <div class="container-img">
      <img
        :src="props.image"
        :alt="props.title"
        width="100%"
        style="filter: "
      />
    </div>
    <h4 class="text-slate-400 w-44 truncate">{{ props.title }}</h4>
    <div class="flex justify-between items-center mt-5 gap-5">
      <p>${{ props.price }}</p>
      <UButton variant="ghost">
        <Icon name="material-symbols:shopping-cart" size="20px"/>
      </UButton>
      <UButton>Checkout</UButton>
    </div>
  </UCard>
</template>

<style scoped>
.card-product {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
}

.container-img {
  width: 100%;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}

.container-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
