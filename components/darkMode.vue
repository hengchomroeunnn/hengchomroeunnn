<script setup>
import { ref } from "vue";

const colorMode = useColorMode();

// Create a reactive reference for the toggle state
const toggleState = ref(colorMode.preference === "dark");

// Watch for changes in the toggle state and update the color mode preference accordingly
watch(toggleState, newState => {
  colorMode.preference = newState ? "dark" : "light";
});

const currentHour = new Date().getHours();

const getGreeting = () => {
  if (currentHour >= 5 && currentHour < 12) {
    return "morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "afternoon!";
  } else {
    return "evening!";
  }
};

const greeting = getGreeting();
</script>

<template>
  <div class="flex flex-wrap justify-between">
    <div
      class="text-[40px] font-bca text-gray-900 m-4 max-[400px]:text-[25px] max-[480px]:text-[24px] dark:text-gray-500">
      Good <span class="text-[#7ED957]">{{ greeting }}</span>
    </div>
    <div class="flex flex-wrap ">
      <button @click="toggleState = !toggleState" class="toggle-button">
        <Icon
          :name="toggleState ? 'ion:moon' : 'ion:sunny'"
          class="text-[40px] m-4 max-[400px]:text-[25px] max-[480px]:text-[28px] dark:text-white text-yellow-300" />
      </button>
      <NuxtPage class="mx-auto p-4" />
      <switchLanguage/>
    </div>
  </div>
</template>
