<script setup>
import Logo from "../assets/icons/Foody.svg";
</script>

<template>
  <footer class="bg-grayDark text-white">
    <div
      class="container pt-3 flex justify-between items-center border-b border-b-grayLight"
    >
      <NuxtLink to="/" class="pb-5"><img :src="Logo" alt="Foody" /></NuxtLink>
      <ul class="flex flex-col md:flex-row gap-3 md:gap-10">
        <li class="mb-2"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="mb-2"><NuxtLink to="/">About</NuxtLink></li>
        <li class="mb-2"><NuxtLink to="/">Contact</NuxtLink></li>
        <li class="mb-2"><NuxtLink to="/blog">Blog</NuxtLink></li>
      </ul>
      <div class="flex gap-5">
        <NuxtLink to="/"><Icon name="mdi:instagram" size="25" /></NuxtLink>
        <NuxtLink to="/"><Icon name="mdi:twitter" size="25" /></NuxtLink>
      </div>
    </div>
    <div
      class="container flex justify-center items-center py-3 text-sm opacity-75"
    >
      <p>&copy; Foody 2024</p>
    </div>
  </footer>
</template>
