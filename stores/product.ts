export const useProductStore = defineStore('productStore', () => {
  const search = ref("");

  function handleSearch(keyword: string) {
    search.value = keyword
  }

  return { search, handleSearch }
})