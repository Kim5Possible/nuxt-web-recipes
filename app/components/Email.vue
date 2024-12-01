<script setup></script>

<template>
  <section class="mb-14 bg-peachLight mx-auto flex flex-col items-center py-24">
    <h1 class="text-6xl font-bold mb-5">
      Deliciousness <br />
      in your inbox
    </h1>
    <p class="max-w-[500px] text-center mb-4">
      Sign up to get the latest recipes and weekly recommendations delivered
      straight to your inbox
    </p>
    <label for="email" class="relative mb-2">
      <input
        class="w-full bg-white placeholder:text-opacity-50 text-sm rounded-md pl-3 pr-28 py-2 focus:outline-none focus:shadow-inner"
        type="email"
        name="email"
        id="email"
        placeholder="Your email"
      />
      <button
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
