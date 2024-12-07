<script setup>
const { id } = useRoute().params;
const { data } = await useFetch(`https://dummyjson.com/recipes/${id}`);
const { loading } = useLoading([data]);
const { textAppear } = useAnimation();
const spanStyle = "flex items-center gap-1 text-center";

onMounted(() => {
  nextTick(() => {
    const nameWrapper = document.querySelector(".wrapper .letters");
    if (nameWrapper) {
      nameWrapper.innerHTML = nameWrapper.textContent.replace(
        /\S/g,
        "<span class='letter origin-[50%_100%] inline-block'>$&</span>"
      );
      const letter = document.querySelectorAll(".wrapper .letter");
      console.log(letter.length);
      textAppear(letter, nameWrapper);
    }
  });
});
</script>
<template>
  <Loader v-if="loading" />
  <section
    v-else
    class="container border border-gray-300 rounded-lg py-10 mb-10 shadow-inner"
  >
    <NuxtLink to="/" :class="spanStyle"
      ><Icon name="mdi:arrow-left" size="20" />Back</NuxtLink
    >
    <div class="flex flex-col gap-5 items-center mb-10">
      <div class="name bg-peachDark">Recipe</div>
      <h1 class="relative wrapper text-center text-3xl md:text-6xl font-bold">
        <span class="text-wrapper relative inline-block overflow-hidden p-2"
          ><span class="letters">{{ data.name }}</span></span
        >
      </h1>
      <div class="flex gap-5">
        <span :class="spanStyle"
          ><Icon name="mdi:star-outline" size="20" class="text-peachDark" />
          {{ data.rating }} ({{ data.reviewCount }})</span
        >
        <span :class="spanStyle"
          ><Icon name="mdi:clock-outline" size="20" class="text-peachDark" />
          {{ data.prepTimeMinutes + data.cookTimeMinutes }}</span
        >
      </div>
      <div class="flex gap-5 text-xs sm:text-sm font-bold uppercase">
        <span :class="spanStyle"
          ><Icon name="mdi:water" size="20" />{{
            data.caloriesPerServing
          }}
          calories</span
        >
        <span :class="spanStyle"
          ><Icon name="mdi:checkbox-marked-circle" size="20" />{{
            data.difficulty
          }}
          level</span
        >
        <span :class="spanStyle"
          ><Icon name="mdi:room-service" size="20" />{{
            data.servings
          }}
          servings</span
        >
      </div>
      <NuxtImg
        :src="data.image"
        :alt="data.name"
        class="w-[70%] sm:max-w-[800px] rounded-lg"
      />
    </div>

    <div class="flex justify-between gap-2 mb-5">
      <div class="flex flex-wrap gap-1">
        <NuxtLink
          :to="`/categories/Tags/${tag}`"
          v-for="tag in data.tags"
          :key="tag"
          class="font-bold py-1 px-2 text-sm text-white bg-blueDark rounded-md"
        >
          {{ tag }}
        </NuxtLink>
      </div>
      <div class="flex flex-wrap gap-1">
        <NuxtLink
          :to="`/categories/Meals/${tag}`"
          v-for="tag in data.mealType"
          :key="tag"
          class="h-fit font-bold py-1 px-2 text-sm bg-peachDark text-white rounded-md"
        >
          {{ tag }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex md:flex-row flex-col justify-between gap-10">
      <div
        class="basis-2/6 bg-blueLighter rounded-lg p-10 shadow-inner shadow-blueLight"
      >
        <p class="text-2xl tracking-widest font-semibold uppercase mb-4">
          Ingredients
        </p>
        <ul class="list-disc">
          <li v-for="ingredient in data.ingredients" class="text-lg mb-1">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div
        class="basis-4/6 bg-peachLighter rounded-lg p-10 shadow-inner shadow-peachLight"
      >
        <p
          class="text-center text-2xl tracking-widest font-semibold uppercase mb-4"
        >
          Instructions
        </p>
        <ul class="list-decimal">
          <li
            v-for="instruction in data.instructions"
            class="leading-9 text-lg mb-2 tracking-wide"
          >
            {{ instruction }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
