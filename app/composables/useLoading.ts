import type { Recipe } from "~/types/types";

export const useLoading = (dataRefs: Ref<Recipe>[]) => {
  const loading = ref(true);
  const isDataReady = computed(() => {
    return dataRefs.every((ref) => ref.value);
  });

  onMounted(() => {
    if (isDataReady.value) {
      loading.value = false;
    }
  });

  watch(dataRefs, () => {
    if (isDataReady.value) {
      loading.value = false;
    }
  });

  return { loading, isDataReady };
};
