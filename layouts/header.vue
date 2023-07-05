<template>
  <div class=" flex flex-wrap justify-between border-b-4 pt-2 pb-2">
    <div class="w-[80px]">
      <nuxt-link to="/"> <nuxt-picture src="/images/logo.png" /></nuxt-link>
    </div>
    <div class=" space-x-[80px] font-bca text-gray-500 text-xl pt-6">
      <nuxt-link to="/" class=" hover:border-2 hover:rounded-2xl hover:bg-[#7ED957] hover:text-white  pt-2 pb-2 pl-6 pr-6">Home</nuxt-link>
      <nuxt-link to="/about" class=" hover:border-2 hover:rounded-2xl hover:bg-[#7ED957] hover:text-white  pt-2 pb-2 pl-6 pr-6">About</nuxt-link>
      <nuxt-link to="/project" class="border-4 rounded-3xl border-[#7ED957] hover:border-2 hover:rounded-2xl hover:bg-[#7ED957] hover:text-white  pt-2 pb-2 pl-6 pr-6">Project</nuxt-link>
    </div>
  </div>
  <div class="flex flex-wrap justify-between">
      <div class="text-[40px] font-bca text-gray-900 m-4">
        Good <span class="text-[#7ED957]">Morning!</span>
      </div>
      <div>
        <button>
          <Icon name="ion:cloudy-night" class="text-gray-500 text-[40px] m-4" />
        </button>
        <button>
          <Icon name="twemoji:flag-united-kingdom" class="text-[40px] m-4" />
        </button>
      </div>
    </div>
</template>
