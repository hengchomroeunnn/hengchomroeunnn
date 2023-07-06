<template>
  <div class="flex flex-wrap justify-between">
    <button @click="toggleState = !toggleState" class="toggle-button">
      <Icon
        :name="
          toggleState ? 'twemoji:flag-cambodia' : 'twemoji:flag-united-kingdom'
        "
        class="text-[40px] m-4 max-[400px]:text-[25px] max-[480px]:text-[28px]" />
    </button>
    <NuxtPage class="mx-auto p-4" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      toggleState: false,
    };
  },
};
</script>
