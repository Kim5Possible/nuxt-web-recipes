<script setup>
import Foody from "../assets/icons/Foody.svg";

const isOpenCategory = ref(false);
const isOpenMenu = ref(false);
const isMobile = ref(false);
const isSearch = ref(false);

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  onUnmounted(() => {
    window.removeEventListener("resize", checkMobile);
  });
});

const toggleCategory = () => {
  isOpenCategory.value = !isOpenCategory.value;
};

const toggle = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <header class="relative px-[4rem] flex justify-between items-center md:mb-8">
    <NuxtLink
      :class="`${isSearch ? 'opacity-0' : ''}`"
      to="/"
      class="pb-5 md:pb-0"
      ><img :src="Foody" alt="Foody"
    /></NuxtLink>
    <nav
      v-if="!isMobile || (isMobile && isOpenMenu)"
      :class="`${isSearch ? 'opacity-0' : ''}`"
      class="absolute top-14 right-2 md:w-auto p-5 md:static md:block bg-white md:bg-transparent border md:border-none border-gray-300 rounded-md"
    >
      <ul class="flex flex-col md:flex-row gap-5 md:gap-20 md:items-center">
        <li><NuxtLink @click="isOpenMenu = false" to="/">Home</NuxtLink></li>
        <li
          class="relative flex items-center gap-1 cursor-pointer"
          @click="toggleCategory"
        >
          <span>Categories</span>
          <Icon v-if="!isOpenCategory" name="mdi:chevron-down" size="25" />
          <Icon v-else name="mdi:chevron-up" size="25" />
          <ul
            v-if="isOpenCategory"
            class="absolute top-7 left-0 bg-white flex flex-col gap-2 text-sm border border-gray-300 rounded-md p-2"
          >
            <NuxtLink
              @click="isOpenMenu = false"
              :to="`/categories/${(categoryType = 'Meals')}`"
            >
              <li>By meal type</li>
            </NuxtLink>
            <hr />
            <NuxtLink
              @click="isOpenMenu = false"
              :to="`/categories/${(categoryType = 'Tags')}`"
            >
              <li>By tag</li>
            </NuxtLink>
          </ul>
        </li>
        <li>
          <NuxtLink @click="isOpenMenu = false" to="/blog">Blog</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex gap-5">
      <button @click="isSearch = true">
        <Icon v-if="!isSearch" name="mdi:search" size="25" />
      </button>
      <Search v-if="isSearch" v-model:isSearch="isSearch" />
      <button
        :class="`${isSearch ? 'opacity-0' : ''}`"
        class="md:hidden"
        @click="toggle"
      >
        <Icon name="mdi:menu" size="25" />
      </button>
    </div>
  </header>
</template>
