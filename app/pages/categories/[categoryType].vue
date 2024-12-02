<script setup>
const { categoryType } = useRoute().params;
const { data } = await useFetch(
  "https://dummyjson.com/recipes?select=mealType,tags,image"
);

const unique = computed(() => {
  const category = categoryType === "Meals" ? "mealType" : "tags";
  const all = data.value.recipes.flatMap((recipe) => recipe[category]);
  return [...new Set(all)];
});

const typeToImage = ref(new Map());

const assignUniqueImages = () => {
  typeToImage.value.clear();

  const imageCounts = new Map();
  data.value.recipes.forEach((recipe) => {
    imageCounts.set(recipe.image, (imageCounts.get(recipe.image) || 0) + 1);
  });

  unique.value.forEach((category) => {
    const matchingRecipes = data.value.recipes.filter((recipe) =>
      categoryType === "Meals"
        ? recipe.mealType.includes(category)
        : recipe.tags.includes(category)
    );

    const images = new Set(matchingRecipes.map((recipe) => recipe.image));
    let selectedImage = null;
    let minCount = Infinity;

    for (const image of images) {
      const count = imageCounts.get(image);
      if (count < minCount && !typeToImage.value.has(image)) {
        minCount = count;
        selectedImage = image;
      }
    }

    if (selectedImage) {
      typeToImage.value.set(category, selectedImage);
      imageCounts.set(selectedImage, imageCounts.get(selectedImage) + 1);
    } else {
      typeToImage.value.set(category, images.values().next().value);
    }
  });
};

onMounted(assignUniqueImages);

watch(() => categoryType, assignUniqueImages);
</script>

<template>
  <section class="container mb-10">
    <h1 class="text-4xl font-bold mb-5">{{ categoryType }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div v-for="type in unique" :key="type">
        <NuxtLink :to="`/categories/${categoryType}/${type}`">
          <NuxtImg
            v-if="typeToImage.get(type)"
            :src="typeToImage.get(type)"
            :alt="type"
            class="w-[70%] mx-auto rounded-full mb-4"
          />
          <h2 class="text-center font-bold text-xl mb-2">
            {{ type }}
          </h2>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
