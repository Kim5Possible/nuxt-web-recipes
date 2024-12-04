<script setup>
const email = ref("");
const isValidEmail = computed(() => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email.value);
});
</script>

<template>
  <section class="mb-14 bg-peachLight mx-auto flex flex-col items-center py-24">
    <h1 class="text-4xl text-center sm:text-6xl font-bold mb-5">
      Want more recipes straight <br />
      to your inbox?
    </h1>
    <p class="max-w-[500px] text-center mb-6">
      Sign up to get the latest recipes and weekly recommendations delivered
      straight to your inbox
    </p>
    <label for="email" class="relative mb-2">
      <input
        class="w-full bg-white placeholder:text-opacity-50 text-sm rounded-md pl-3 pr-28 py-2 focus:outline-none focus:shadow-inner"
        type="email"
        v-model="email"
        required
        placeholder="Your email"
      />
      <span
        class="absolute top-[-20px] left-0 text-xs text-peachDark"
        v-if="!isValidEmail && email"
      >
        Your email is invalid</span
      >
      <button
        type="submit"
        :disabled="!isValidEmail"
        class="absolute top-1 right-1 rounded bg-blueDark py-1 px-3 text-center text-sm text-white transition-all shadow-sm hover:shadow focus:shadow-none active:bg-peachDark hover:bg-opacity-80"
      >
        Join
      </button>
    </label>
    <p class="text-xs opacity-70">
      By signing up, you agree to our
      <a href="#" class="underline">Terms</a> and
      <a href="#" class="underline">Privacy Policy</a>
    </p>
  </section>
</template>
