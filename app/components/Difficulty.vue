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
  // autoplay: 5000,
  breakpoints: {
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
        class="flex flex-col gap-4 h-full px-4"
      >
        <NuxtImg
          :src="recipe.image"
          class="h-[200px] w-full object-cover rounded-lg"
        />
        <h3 class="text-lg font-bold">{{ recipe.name }}</h3>

        <div class="flex flex-col gap-2 text-sm opacity-70">
          <span>Rating: {{ recipe.rating }}</span>
          <span>Preparation time: {{ recipe.prepTimeMinutes }} min.</span>
          <div class="flex gap-1">
            <div
              v-for="tag in recipe.tags.slice(0, 3)"
              :key="tag"
              class="font-bold p-1 border border-gray-300 rounded-md"
            >
              {{ tag }}
            </div>
            <span
              v-if="recipe.tags.length > 3"
              class="font-bold p-1 border border-gray-300 rounded-md"
              >...</span
            >
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>
