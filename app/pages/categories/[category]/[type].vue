<script setup>
const { type, category } = useRoute().params;

const { data } =
  (await useFetch(
    category === "Meals"
      ? `https://dummyjson.com/recipes/meal-type/${type}`
      : `https://dummyjson.com/recipes/tag/${type}`
  )) || [];
</script>

<template>
  <section class="container mb-10">
    <h1 class="title">{{ type }} Recipes</h1>
    <div class="flex flex-col items-center md:grid md:grid-cols-3 gap-10">
      <div v-for="recipe in data.recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </div>
    </div>
  </section>
</template>
