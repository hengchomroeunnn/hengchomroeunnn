<template>
  <div class="flex flex-wrap justify-between border-b-4 pt-2 pb-2">
    <div
      class="flex flex-wrap justify-center items-center w-[80px] max-sm:w-[40px] max-sm:m-4">
      <nuxt-link to="/"> <img src="/images/logo.png" /></nuxt-link>
    </div>
    <div
      class="space-x-[80px] font-bca text-gray-500 text-xl pt-6 max-sm:space-x-[8px] max-sm:text-lg max-[400px]:text-[16px]">
      <nuxt-link
        :to="localPath('/')"
        class="hover:rounded-2xl hover:bg-[#7ED957] hover:text-white pt-2 pb-2 pl-6 pr-6"
        >{{ $t("home") }}</nuxt-link
      >
      <nuxt-link
        :to="localPath('/about')"
        class="hover:rounded-2xl hover:bg-[#7ED957] hover:text-white pt-2 pb-2 pl-6 pr-6"
        >{{ $t("about") }}</nuxt-link
      >

      <nuxt-link
        :to="localPath('/project')"
        class="hover:rounded-2xl hover:bg-[#7ED957] hover:text-white pt-2 pb-2 pl-6 pr-6"
        >{{ $t("project") }}</nuxt-link
      >
    </div>
  </div>
</template>
<script setup lang="ts">
const localPath = useLocalePath();
</script>
