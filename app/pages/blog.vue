<script setup>
const paragraph = "text-justify leading-loose tracking-wide";
const span = "font-bold block pt-3 mb-2";
</script>

<template>
  <div class="container mb-10">
    <div
      class="flex flex-col gap-5 items-center border-b border-b-grayLight pb-6"
    >
      <div class="name bg-blueDark">Blog</div>
      <h1
        class="text-center text-2xl md:text-5xl font-extrabold bg-gradient-to-t from-grayDark to-grayLight bg-clip-text text-transparent"
      >
        My best advice for never skipping breakfast.
      </h1>
    </div>
    <div class="flex justify-between text-sm opacity-75">
      <span>Sharon Daniels</span>
      <span> Jan 24, 2024</span>
    </div>
    <NuxtImg
      src="/blog-1.png"
      alt="blog"
      class="rounded-lg my-5 mx-auto md:w-[700px]"
    />
    <div :class="paragraph" class="relative">
      <div
        class="absolute z-[-1] top-0 left-[40%] w-full h-[18%] xs:h-[30%] md:h-[60%] bg-rose-50"
      ></div>
      In the hustle and bustle of our daily lives, it's easy to overlook
      breakfast, dismissing it as a non-essential part of our routine. However,
      as someone who has experienced the transformative power of a hearty
      morning meal, here's my best advice for never skipping breakfast.
      <span :class="span">Prioritize Planning‍</span>
      The key to a consistent breakfast habit lies in planning. Take a few
      minutes each evening to decide what you'll have the next morning. Prep
      ingredients, set out bowls, or even have grab-and-go options ready,
      ensuring a seamless start to your day.
      <span :class="span">Variety is the Spice of Breakfast‍</span>
      Boredom is a common culprit for breakfast skipping. Keep your morning
      meals exciting by diversifying your options. Rotate between wholesome
      options like yogurt parfaits, overnight oats, smoothie bowls, and classic
      eggs to tantalize your taste buds.
    </div>
    <NuxtImg
      src="/blog-2.png"
      alt="blog"
      class="w-full rounded-lg my-5 mx-auto md:w-[700px]"
    />
    <div :class="paragraph" class="relative">
      <div
        class="absolute z-[-1] top-0 right-[40%] w-full h-[18%] xs:h-[30%] md:h-[60%] bg-blue-50"
      ></div>
      <span :class="span">Efficiency in Execution‍</span>
      Make breakfast preparation a swift and efficient process. Opt for recipes
      that require minimal effort, like quick smoothies or pre-made breakfast
      sandwiches. Time efficiency reduces the likelihood of morning rush-induced
      skipping.

      <span :class="span">Set a Morning Routine‍</span>
      Establishing a morning routine that includes breakfast can be a
      game-changer. Allocate specific time for your morning meal, whether it's
      15 minutes or an hour, creating a ritual that reinforces the importance of
      starting your day with nourishment.

      <span :class="span">Invest in Portable Options‍</span>
      For those constantly on the go, invest in portable breakfast options.
      Granola bars, fruit, or trail mix can be conveniently carried to ensure
      you never have to compromise on a nutritious start, regardless of your
      location. By incorporating these practices into your lifestyle, you'll not
      only prioritize the most important meal of the day but also reap the
      benefits of sustained energy, improved concentration, and a positive
      outlook each morning.Breakfast isn't just a meal; it's a daily investment
      in your well-being.
    </div>
  </div>
  <Email />
</template>
