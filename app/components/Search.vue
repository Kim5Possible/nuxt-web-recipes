<script setup>
const { data } = useFetch("https://dummyjson.com/recipes") || [];
const emit = defineEmits(["update:isSearch"]);
const { searchAnimation } = useAnimation();
const search = ref("");
const recipes = ref([]);

const props = defineProps({
  isSearch: {
    type: Boolean,
  },
});

// Filter recipes by name, tag or meal type
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

//  Set the filtered recipes
const searchingRecipe = () => {
  recipes.value = filteredRecipes.value;
};

// Add a tag to the search input on click
const addToSearch = (event, tag) => {
  search.value = tag;
  searchingRecipe();
};

// Debounce the searchingRecipe function to prevent excessive API calls
const debouncedSearch = useDebounceFn(searchingRecipe, 300);

// Watch for changes in the search input and call the debouncedSearch function
watch(search, () => {
  debouncedSearch();
});

// Search animation setup
watch(
  () => props.isSearch,
  (newValue) => {
    searchAnimation(document.querySelector(".search"), newValue);
  },
  { immediate: false }
);
</script>

<template>
  <div
    class="search hidden container z-20 absolute left-0 right-0 top-3 w-full pb-2"
  >
    <div class="relative bg-grayLighter">
      <input
        v-model="search"
        type="text"
        class="w-full bg-transparent placeholder:text-grayDark/40 text-grayDark text-sm border border-grayLight/30 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-peachLight hover:border-peachLight shadow-sm focus:shadow-inner focus:shadow-peachlight/30"
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
