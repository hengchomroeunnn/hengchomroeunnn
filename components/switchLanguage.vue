<template>
  <div class="flex flex-wrap justify-center items-center">
    <NuxtLink :to="switchLocalePath('en-US')">
      <button class="">
        <Icon
          :name="'twemoji:flag-united-kingdom'"
          class="text-[40px] m-4 max-[400px]:text-[25px] max-[480px]:text-[28px]" />
      </button>
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('kh-KH')">
      <button class="">
        <Icon
          :name="'twemoji:flag-cambodia'"
          class="text-[40px] m-4 max-[400px]:text-[25px] max-[480px]:text-[28px]" />
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>
