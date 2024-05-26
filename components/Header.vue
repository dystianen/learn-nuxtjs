<script setup lang="ts">
const store = useProductStore();
const { handleSearch } = store;

const doSearch = useDebounce((keyword: string) => {
  handleSearch(keyword);
}, 300);
</script>

<template>
  <header>
    <h1 class="text-2xl font-bold">Tian Store</h1>

    <div class="flex items-center gap-3">
      <UInput
        placeholder="Search..."
        icon="i-heroicons-magnifying-glass-20-solid"
        @input="(event: Event) => doSearch(event.target.value)"
      />
      <UChip text="3" size="2xl">
        <UButton color="gray">
          <Icon name="material-symbols:shopping-cart-outline" size="1rem" />
        </UButton>
      </UChip>

      <UPopover>
        <UButton variant="ghost">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
          />
        </UButton>
        <template #panel>
          <div class="flex flex-col gap-5 py-4 px-8">
            <ULink>Profile</ULink>
            <ULink>Logout</ULink>
          </div>
        </template>
      </UPopover>
    </div>
  </header>
</template>
