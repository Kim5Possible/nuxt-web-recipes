<script setup>
const { recipes } = defineProps({
  recipes: {
    type: Array,
    default: () => [],
  },
});
const loading = ref(false);
const itemsPerRow = ref(4);
const initialRows = 2;
const displayCount = ref(8);

const getItemsPerRow = () => {
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 768) return 3;
  return 2;
};

onMounted(() => {
  itemsPerRow.value = getItemsPerRow();
  window.addEventListener("resize", () => {
    itemsPerRow.value = getItemsPerRow();
    displayCount.value = itemsPerRow.value * initialRows;
  });
});

const visibleRecipes = computed(() => {
  return recipes.slice(0, displayCount.value);
});

const hasMoreItems = computed(() => {
  return displayCount.value < recipes.length;
});

const loadMore = async () => {
  loading.value = true;
  await nextTick();
  displayCount.value += itemsPerRow.value * 2;
  if (displayCount.value > recipes.length) {
    displayCount.value = recipes.length;
  }
  loading.value = false;
};
</script>

<template>
  <section class="container mb-10">
    <h1 class="text-4xl font-bold mb-10">All recipes</h1>
    <div
      class="md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 flex flex-col items-center"
    >
      <div v-for="recipe in visibleRecipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </div>
    </div>

    <div v-if="hasMoreItems" class="text-center mt-8">
      <button
        @click="loadMore"
        class="bg-blueDark hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded"
        :disabled="loading"
      >
        <span v-if="!loading">Show More</span>
        <span v-else>Loading...</span>
      </button>
    </div>
  </section>
</template>
