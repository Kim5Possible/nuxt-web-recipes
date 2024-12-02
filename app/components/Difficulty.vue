<script setup>
const { recipes } = defineProps({
  recipes: Array,
});

const difficulty = computed(() => {
  if (!recipes) return [];

  return [
    {
      name: "Easy",
      recipes: recipes.filter((recipe) => {
        return recipe.difficulty === "Easy";
      }),
    },
    {
      name: "Medium",
      recipes: recipes.filter((recipe) => {
        return recipe.difficulty === "Medium";
      }),
    },
  ];
});

const config = {
  itemsToShow: 4,
  snapAlign: "start",
  wrapAround: true,
  autoplay: 5000,
  breakpoints: {
    320: {
      itemsToShow: 1,
    },
    480: {
      itemsToShow: 2,
    },
    768: {
      itemsToShow: 3,
    },
    1024: {
      itemsToShow: 4,
    },
  },
};
</script>

<template>
  <section
    v-for="difficulty in difficulty"
    :key="difficulty.name"
    class="container mb-10"
  >
    <h2 class="text-2xl font-bold mb-10">{{ difficulty.name }} recipes</h2>
    <Carousel v-bind="config">
      <Slide
        v-for="recipe in difficulty.recipes"
        :key="recipe.id"
        class="flex flex-col justify-between gap-2 px-4"
      >
        <NuxtImg
          :src="recipe.image"
          class="h-[200px] w-full object-cover rounded-lg"
        />
        <NuxtLink :to="`/recipes/${recipe.id}`"
          ><h3 class="text-sm sm:text-lg font-bold">{{ recipe.name }}</h3>
        </NuxtLink>
        <div class="flex gap-5 justify-center">
          <span class="flex items-center gap-1"
            ><Icon name="mdi:star-outline" size="20" class="text-peachDark" />
            {{ recipe.rating }}</span
          >
          <span class="flex items-center gap-1"
            ><Icon name="mdi:clock-outline" size="20" class="text-peachDark" />
            {{ recipe.prepTimeMinutes + recipe.cookTimeMinutes }}</span
          >
        </div>

        <div class="flex gap-1">
          <div
            v-for="tag in recipe.tags.slice(0, 3)"
            :key="tag"
            class="text-xs sm:text-sm font-bold p-1 border border-gray-300 rounded-md"
          >
            {{ tag }}
          </div>
          <span
            v-if="recipe.tags.length > 3"
            class="font-bold p-1 border border-gray-300 rounded-md"
            >...</span
          >
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>
