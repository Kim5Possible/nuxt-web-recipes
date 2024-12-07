<script setup>
const { recipe } = defineProps({
  recipe: Object,
});
</script>

<template>
  <div
    v-if="recipe"
    class="h-full text-center flex flex-col gap-4 justify-between border rounded-lg pb-3 shadow-md"
  >
    <div>
      <NuxtImg
        :src="recipe.image"
        :alt="recipe.name"
        class="w-[300px] md:w-full rounded-lg mb-4"
      />
      <h2 class="font-bold text-xl mb-2">{{ recipe.name }}</h2>
    </div>
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
    <button
      @click="navigateTo(`/recipes/${recipe.id}`)"
      class="self-center max-w-[150px] py-2 px-3 bg-peachDark hover:bg-blueDark transition-all duration-300 active:scale-95 text-white rounded-lg"
    >
      View recipe
    </button>
  </div>
</template>
