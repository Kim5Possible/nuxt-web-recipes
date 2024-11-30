<script setup>
const { data, error } = await useAsyncData("recipes", () =>
  $fetch("https://dummyjson.com/recipes/25")
);
</script>

<template>
  <section class="container mb-14">
    <div
      class="bg-blueLight lg:h-[500px] flex flex-col lg:flex-row justify-between rounded-lg"
    >
      <NuxtImg
        :src="data.image"
        class="basis-1/2 h-full w-full object-cover rounded-l-lg"
      />
      <div class="relative basis-1/2 flex flex-col justify-center p-10">
        <div class="opacity-70 text-sm mb-3">
          <span>Rating: {{ data.rating }}</span>
          <span>Preparation time: {{ data.prepTimeMinutes }} min.</span>
        </div>
        <h1
          class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 from-30% via-yellow-500 via-40% to-pink-400 to-90% bg-clip-text text-transparent"
        >
          {{ data.name }}
        </h1>
        <p class="text-lg leading-loose">
          Refreshing Blueberry Banana Smoothie is easy to make with frozen
          blueberries, banana, milk, and chia seeds, all blended until smooth
          and creamy. The perfect breakfast or snack for adults and kids. All
          you need is 6 ingredients and 10 minutes to make this smoothie recipe!
        </p>
        <Icon
          name="material-symbols:arrow-right-alt-rounded"
          size="25"
          class="absolute bottom-1 right-1"
        />
      </div>
    </div>
  </section>
</template>
