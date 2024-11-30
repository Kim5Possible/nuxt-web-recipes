<script setup>
import Foody from "../assets/icons/Foody.svg";

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="px-[4rem] flex justify-between items-center mb-14">
    <NuxtLink to="/"><img :src="Foody" alt="Foody" /></NuxtLink>
    <nav>
      <ul class="flex gap-20 items-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li
          class="relative flex items-center gap-1 cursor-pointer"
          @click="toggle"
        >
          <span>Categories</span>
          <Icon v-if="!isOpen" name="uil:angle-down" size="25" />
          <Icon v-else name="uil:angle-up" size="25" />
          <ul
            v-if="isOpen"
            class="absolute top-7 left-0 bg-white flex flex-col gap-2 text-sm border border-gray-300 rounded-md p-2"
          >
            <li>By meal type</li>
            <hr />
            <li>By tag</li>
          </ul>
        </li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      </ul>
    </nav>
    <Icon name="uil:search" size="25" />
  </header>
</template>
