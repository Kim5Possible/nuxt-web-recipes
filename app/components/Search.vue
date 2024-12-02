<script setup>
const { data } = useFetch("https://dummyjson.com/recipes");
const emit = defineEmits(["update:isSearch"]);

const search = ref("");
const recipes = ref([]);

const filteredRecipes = computed(() => {
  if (!search.value) return (recipes.value = []);

  const searchTerm = search.value.toLowerCase();
  return data.value.recipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      recipe.mealType.some((meal) => meal.toLowerCase().includes(searchTerm))
    );
  });
});

const searchingRecipe = () => {
  recipes.value = filteredRecipes.value;
};

const addToSearch = (event, tag) => {
  search.value = tag;
  searchingRecipe();
};
function useDebounceFn(fn, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
const debouncedSearch = useDebounceFn(searchingRecipe, 300);

watch(search, () => {
  debouncedSearch();
});
</script>

<template>
  <div
    class="container z-20 absolute left-0 right-0 top-3 bg-white w-full pb-2"
  >
    <div class="relative">
      <input
        v-model="search"
        @input="searchingRecipe"
        type="text"
        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Search recipes by name, tag or meal type"
      />
      <button
        class="absolute top-[50%] right-1 translate-y-[-50%] flex items-center"
        type="button"
        @click="emit('update:isSearch', false)"
      >
        <Icon name="mdi:close" size="25" />
      </button>
    </div>
    <div
      v-if="search"
      class="mt-4 bg-white border border-peachLight rounded-md px-4 py-2 shadow"
    >
      <div class="flex flex-col gap-3">
        <div v-if="recipes.length === 0 && search">
          <p class="text-slate-500 text-sm">No recipes found</p>
        </div>
        <div v-if="recipes.length" v-for="recipe in recipes" :key="recipe.id">
          <NuxtLink
            :to="`/recipes/${recipe.id}`"
            class="flex flex-col lg:flex-row items-start lg:items-center justify-between"
            @click="emit('update:isSearch', false)"
          >
            <div class="flex items-center gap-2 mb-2 lg:mb-0">
              <img
                :src="recipe.image"
                class="w-10 h-10 rounded-full object-cover"
              />
              <span class="text-slate-700 text-sm">{{ recipe.name }}</span>
            </div>
            <div class="flex flex-wrap gap-2 text-[10px] md:text-xs">
              <button
                @click.stop.prevent="addToSearch($event, tag)"
                v-for="tag in recipe.tags"
                :key="tag"
                class="font-bold py-1 px-1 md:px-2 text-white bg-blueDark rounded-md"
              >
                {{ tag }}
              </button>

              <button
                @click.stop.prevent="addToSearch($event, tag)"
                v-for="tag in recipe.mealType"
                :key="tag"
                class="h-fit font-bold py-1 px-1 md:px-2 bg-peachDark text-white rounded-md"
              >
                {{ tag }}
              </button>
            </div>
          </NuxtLink>
          <hr class="my-2" />
        </div>
      </div>
    </div>
  </div>
</template>
