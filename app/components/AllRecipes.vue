<script setup>
const { observer } = useAnimation();
const { recipes } = defineProps({
  recipes: {
    type: Array,
  },
});

const loading = ref(false);
const itemsPerRow = ref(4);
const initialRows = 2;
const displayCount = ref(8);

// Function to determine the number of items per row based on window width
const getItemsPerRow = () => {
  if (window.innerWidth >= 1024) return 4; // 4 items for large screens
  if (window.innerWidth >= 768) return 3; // 3 items for medium screens
  return 2; // 2 items for small screens
};

// Change items per row on window resize when the component is mounted
onMounted(() => {
  itemsPerRow.value = getItemsPerRow();
  window.addEventListener("resize", () => {
    itemsPerRow.value = getItemsPerRow();
    displayCount.value = itemsPerRow.value * initialRows;
  });
});

// Computed property to get the visible recipes based on the display count
const visibleRecipes = computed(() => {
  return recipes.slice(0, displayCount.value);
});

// Computed property to check if there are more items to load
const hasMoreItems = computed(() => {
  return displayCount.value < recipes.length;
});

// Initial animation setup for all cards on component mount
onMounted(() => {
  document.querySelectorAll(".card").forEach((card) => {
    observer.observe(card);
  });
});

// Function to load more recipes and observe new cards for animation
const loadMore = async () => {
  loading.value = true;
  await nextTick(); // Wait for the DOM to update
  displayCount.value += itemsPerRow.value * 2; // Increase the number of recipes to display
  if (displayCount.value > recipes.length) {
    displayCount.value = recipes.length; // Ensure display count doesn't exceed total recipes
  }
  await nextTick(); // Wait for the DOM to update

  // Observe new cards for animation
  const newCards = document.querySelectorAll(".card:not([data-animated])");
  newCards.forEach((card) => {
    observer.observe(card);
  });

  loading.value = false;
};
</script>

<template>
  <section v-if="recipes" class="container mb-10">
    <h1 class="title">All recipes</h1>
    <div
      class="md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 flex flex-col items-center"
    >
      <div
        v-for="recipe in visibleRecipes"
        :key="recipe.id"
        class="card h-full opacity-0"
      >
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
