<script setup>
const { categoryType } = useRoute().params;
const { categoriesObserver } = useAnimation();
const { data } =
  (await useFetch(
    "https://dummyjson.com/recipes?select=mealType,tags,image"
  )) || [];

// Compute the unique meal types or tags from the recipes
const unique = computed(() => {
  const category = categoryType === "Meals" ? "mealType" : "tags";
  const all = data.value.recipes.flatMap((recipe) => recipe[category]);
  return [...new Set(all)];
});

//  Use the loading composable to track when the data is being loaded
const { loading } = useLoading([unique, data]);

//  A map of category to image, where each image is only used once
const typeToImage = ref(new Map());

//  Assign a unique image to each category
const assignUniqueImages = () => {
  typeToImage.value.clear();
  const imageCounts = new Map();
  const categoryToImages = new Map();

  data.value.recipes.forEach((recipe) => {
    imageCounts.set(recipe.image, (imageCounts.get(recipe.image) || 0) + 1);
    const categories = categoryType === "Meals" ? recipe.mealType : recipe.tags;

    categories.forEach((category) => {
      if (!categoryToImages.has(category)) {
        categoryToImages.set(category, new Set());
      }
      categoryToImages.get(category).add(recipe.image);
    });
  });

  // Iterate over the unique categories
  unique.value.forEach((category) => {
    const images = categoryToImages.get(category) || [];
    let selectedImage = null;
    let minCount = Infinity;

    // Iterate over the images for the category
    images.forEach((image) => {
      const count = imageCounts.get(image) || 0;
      if (!typeToImage.value.has(image) && count < minCount) {
        selectedImage = image;
        minCount = count;
      }
    });

    // If an image was selected, add it to the map and increment the count
    if (selectedImage !== null) {
      typeToImage.value.set(category, selectedImage);
      imageCounts.set(selectedImage, minCount + 1);
    }
  });
};

// Assign unique images when the component is mounted
onMounted(assignUniqueImages);

// Reassign unique images when the category type changes
watch(() => categoryType, assignUniqueImages);

// Animation setup for categories
onMounted(() => {
  document.querySelectorAll(".type").forEach((type) => {
    categoriesObserver.observe(type);
  });
});
</script>

<template>
  <section v-if="data" class="container mb-10">
    <h1 class="title">{{ categoryType }}</h1>
    <Loader v-if="loading" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div class="type opacity-0" v-for="type in unique" :key="type">
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
