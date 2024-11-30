<script setup>
const { data } = await useFetch("https://dummyjson.com/recipes");
</script>

<template>
  <main>
    <Hero />
    <Difficulty :recipes="data.recipes" />
    <Email />
    <AllRecipes :recipes="data.recipes" />
  </main>
</template>
