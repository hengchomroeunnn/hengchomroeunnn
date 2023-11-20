<template>
  <darkMode />
  <div class="flex flex-wrap justify-center items-center pt-10 pb-10">
    <div class="border-4 rounded-lg w-[500px] h-auto p-4 m-4 dark:bg-[#0D1117]">
      <div>{{ $t("greet") }}</div>
      <div
<<<<<<< HEAD
        class="flex flex-wrap justify-center items-center max-[1000px]:w-1/2 m-4">
        <img src="/images/JR!.jpg" class="rounded-full w-[200px]" alt="profile"/>
=======
        class="font-bca text-4xl text-gray-800 max-[400px]:text-2xl max-[480px]:text-xl dark:text-white">
        Rookie, Front-End
        <div>Developer🫶</div>
      </div>
      <div class="max-[400px]:text-sm">
        <p class="text-gray-900 text-justify dark:text-white">
          Hello everyone, I'm Heng Chomroeun. I currently am studying at
          <NuxtLink
            to="https://www.cadt.edu.kh/"
            class="text-[#13284c] font-bold underline dark:text-[#4878cb]"
            target="_blank">
            Cambodia Academy of Digital Technology
          </NuxtLink>
          majoring in
          <NuxtLink
            to="https://www.idt.edu.kh/bachelor-of-digital-business/"
            class="text-[#7ED957] font-bold italic"
            target="_blank">
            Digital Business
          </NuxtLink>
          , and specializing in
          <NuxtLink
            to="https://www.idt.edu.kh/bachelor-of-digital-business/"
            class="text-[#f88d2a] font-bold italic"
            target="_blank">
            E-Commerce
          </NuxtLink>
          .
        </p>
>>>>>>> newest
      </div>
    </div>
    <div
      class="flex flex-wrap justify-center items-center max-[1000px]:w-1/2 m-4">
      <img src="/images/JR!.jpg" class="rounded-full w-[200px]" />
    </div>
  </div>
  <div class="flex flex-wrap justify-center items-center space-x-2 pt-5 pb-10">
    <div class="font-bca text-gray-900 text-xl dark:text-gray-300">
      Tech Stacks:
    </div>
    <div class="flex flex-wrap justify-center items-center">
      <Icon
        name="vscode-icons:file-type-html"
        class="text-[40px] m-4 max-[520px]:w-1/4" />
      <Icon
        name="vscode-icons:file-type-css"
        class="text-[40px] m-4 max-[520px]:w-1/4" />
      <Icon name="logos:javascript" class="text-[40px] m-4 max-[520px]:w-1/4" />
      <Icon name="logos:bootstrap" class="text-[40px] m-4 max-[520px]:w-1/4" />
      <Icon
        name="vscode-icons:file-type-tailwind"
        class="text-[40px] m-4 max-[520px]:w-1/4" />
      <Icon
        name="vscode-icons:file-type-vue"
        class="text-[40px] m-4 max-[520px]:w-1/4" />
      <Icon
        name="vscode-icons:file-type-nuxt"
        class="text-[40px] m-4 max-[520px]:w-1/4" />
    </div>
  </div>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-[#010409] dark:text-gray-200;
}
</style>
<script setup></script>
