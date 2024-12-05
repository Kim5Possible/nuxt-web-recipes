<script setup>
const { data, error } =
  (await useFetch("https://dummyjson.com/recipes/25")) || {};
</script>

<template>
  <section class="container mb-14">
    <div
      class="bg-blueLight lg:h-[500px] flex flex-col lg:flex-row justify-between rounded-lg"
    >
      <NuxtImg
        :src="data.image"
        class="basis-1/2 h-full w-full object-cover rounded-t-lg md:rounded-r-none md:rounded-l-lg"
      />
      <div class="relative basis-1/2 flex flex-col justify-center p-10">
        <div
          class="opacity-70 text-sm mb-3 flex justify-center lg:justify-start gap-5"
        >
          <span class="flex items-center gap-1"
            ><Icon name="mdi:star-outline" size="20" class="text-peachDark" />
            {{ data.rating }}</span
          >
          <span class="flex items-center gap-1"
            ><Icon name="mdi:clock-outline" size="20" class="text-peachDark" />
            {{ data.prepTimeMinutes }}</span
          >
        </div>
        <h1
          class="text-center lg:text-left text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 from-30% via-yellow-500 via-40% to-pink-400 to-90% bg-clip-text text-transparent"
        >
          {{ data.name }}
        </h1>
        <p class="text-sm sm:text-lg leading-loose">
          Refreshing Blueberry Banana Smoothie is easy to make with frozen
          blueberries, banana, milk, and chia seeds, all blended until smooth
          and creamy. The perfect breakfast or snack for adults and kids. All
          you need is 6 ingredients and 10 minutes to make this smoothie recipe!
        </p>
        <NuxtLink :to="`/recipes/${data.id}`">
          <Icon
            name="material-symbols:arrow-right-alt-rounded"
            size="25"
            class="absolute bottom-1 right-1"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
