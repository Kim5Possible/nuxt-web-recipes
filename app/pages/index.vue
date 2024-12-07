<script setup>
const { data: recipesData, error: recipesError } = await useFetch(
  "https://dummyjson.com/recipes"
);
const { data: heroData, error: heroError } = await useFetch(
  "https://dummyjson.com/recipes/25"
);

const { loading, isDataReady } = useLoading([recipesData, heroData]);
</script>

<template>
  <Loader v-if="loading" />
  <main v-else-if="isDataReady">
    <Hero :data="heroData" />
    <Difficulty :recipes="recipesData.recipes" />
    <Email />
    <AllRecipes :recipes="recipesData.recipes" />
  </main>
  <div v-else-if="recipesError || heroError" class="text-center p-8">
    <p>Error loading data. Please try again.</p>
  </div>
</template>
