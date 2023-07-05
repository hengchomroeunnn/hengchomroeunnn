<template>
  <div class="flex flex-wrap justify-between border-t-4 pb-4 pt-4 max-[515px]:items-center max-[515px]:flex max-[515px]:justify-center">
    <div class="">
      <div class="w-[40px]  max-[400px]:w-[30px]">
        <nuxt-link to="/"><nuxt-picture src="/images/logo.png" /></nuxt-link>
      </div>
      <h1 class="text-lg font-bca text-gray-500  max-[400px]:text-base">Heng chomroeun, 2023.</h1>
    </div>
    <div>
      <nuxt-link to="https://github.com/hengchomroeunnn" target="_blank"
        ><Icon
          name="uil:github"
          class="m-4 text-gray-500 text-[40px] hover:rotate-12 hover:text-black max-[515px]:text-[30px] "
      /></nuxt-link>
      <nuxt-link to=""
        ><Icon
          name="ic:baseline-facebook"
          class="m-4 text-gray-500 text-[40px] hover:rotate-12 hover:text-blue-600 max-[515px]:text-[30px] "
      /></nuxt-link>
      <nuxt-link to=""
        ><Icon
          name="mdi:linkedin"
          class="m-4 text-gray-500 text-[40px] hover:rotate-12 hover:text-blue-500 max-[515px]:text-[30px] "
      /></nuxt-link>
      <nuxt-link to=""
        ><Icon
          name="ic:baseline-telegram"
          class="m-4 text-gray-500 text-[40px] hover:rotate-12 hover:text-blue-400 max-[515px]:text-[30px] "
      /></nuxt-link>
    </div>
  </div>
  <div class="flex flex-wrap justify-between font-bca text-gray-500 border-t-4 border-[#7ED957] pt-4 max-md:text-sm max-sm:text-xs max-[515px]:items-center max-[515px]:flex max-[515px]:justify-center">
    <div>© 2023 Heng Chomroeun, All rights reserved.</div>
    <div class="flex flex-wrap space-x-16 max-md:space-x-8 max-sm:space-x-4 ">
      <p>Term of Service</p>
      <p>Privacy Policy</p>
      <p>Cookies</p>
    </div>
  </div>
</template>
