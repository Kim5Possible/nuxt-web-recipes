<script setup>
const { data } = await useFetch("https://dummyjson.com/recipes");
const recipes = computed(() => data.value?.recipes || []);
</script>

<template>
  <main>
    <Hero />
    <Difficulty :recipes="recipes" />
    <Email />
    <AllRecipes :recipes="recipes" />
  </main>
</template>
