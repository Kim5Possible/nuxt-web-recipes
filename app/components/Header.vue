<script setup>
import Foody from "../assets/icons/Foody.svg";

const { textHover, categoriesMenu } = useAnimation();
const isOpenCategory = ref(false);
const isOpenMenu = ref(false);
const isMobile = ref(false);
const isSearch = ref(false);

// Set up event listeners on component mount
onMounted(() => {
  //  Function to check if the screen width indicates a mobile device. Updates the isMobile ref.
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };

  // Run checkMobile on mount and whenever the window is resized.
  checkMobile();
  window.addEventListener("resize", checkMobile);

  // Clean up event listener on component unmount.
  onUnmounted(() => {
    window.removeEventListener("resize", checkMobile);
  });
});

// Toggles the visibility of the categories dropdown menu.
const toggleCategory = () => {
  isOpenCategory.value = !isOpenCategory.value;

  // Animation for the categories menu
  nextTick(() => {
    categoriesMenu(
      document.querySelector(".categories-menu"),
      document.querySelectorAll(".category"),
      isOpenCategory.value
    );
  });
};

// Toggles the visibility of the main navigation menu on mobile devices.
const toggle = () => {
  isOpenMenu.value = !isOpenMenu.value;
};

// Handles mouse enter and leave event for nav elements, applying a hover effect.
const enterText = (element) => {
  textHover(element, 1.1, "#FF642F");
};
const leaveText = (element) => {
  textHover(element, 1, "#000");
};

// Add animations on hover to nav elements.
onMounted(() => {
  document.querySelectorAll(".text-hover").forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      enterText(e.target);
    });
    element.addEventListener("mouseleave", (e) => {
      leaveText(e.target);
    });
  });
});
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
      class="absolute z-10 top-14 right-2 md:w-auto p-5 md:static md:block bg-white md:bg-transparent border md:border-none border-gray-300 rounded-md"
    >
      <ul class="flex flex-col md:flex-row gap-5 md:gap-20 md:items-center">
        <li class="text-hover">
          <NuxtLink @click="isOpenMenu = false" to="/">Home</NuxtLink>
        </li>
        <li
          class="relative flex items-center gap-1 cursor-pointer"
          @click="toggleCategory"
        >
          <div class="text-hover flex items-center">
            Categories
            <Icon
              name="mdi:chevron-down"
              size="25"
              :class="{
                'transform transition-transform duration-300': true,
                'rotate-180': isOpenCategory,
              }"
            />
          </div>
          <ul
            class="categories-menu hidden opacity-0 absolute top-7 left-0 bg-grayLighter text-sm rounded-md"
          >
            <NuxtLink
              @click="isOpenMenu = false"
              :to="`/categories/${(categoryType = 'Meals')}`"
            >
              <li class="category hover:text-peachDark p-2">By meal type</li>
            </NuxtLink>
            <hr />
            <NuxtLink
              @click="isOpenMenu = false"
              :to="`/categories/${(categoryType = 'Tags')}`"
            >
              <li class="category hover:text-peachDark p-2">By tag</li>
            </NuxtLink>
          </ul>
        </li>
        <li class="text-hover">
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
