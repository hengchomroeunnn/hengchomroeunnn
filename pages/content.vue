<template>
  <div class="flex flex-wrap p-8 items-center justify-center">
    <template
      v-for="(b, i) in blogNav[0].children"
      :key="`blogNavItem-${b._path}-${i}`"
      class="">
      <div class="border-2 rounded-lg w-[200px] h-[200px] p-4 m-8">
        <h2 class="">
          {{ b.title }}
        </h2>

        <!-- Loop over files inside the content dir -->
        <ul v-if="b.children" class="">
          <template
            v-for="(child, k) in b.children"
            :key="`childNav-${child._path}-${k}-${i}`">
            <li>
              <NuxtLink :to="`/articles${child._path}`">
                {{ child.title }}
              </NuxtLink>
            </li>
          </template>
        </ul>
        <ul v-else class="">
          <li class="bg-[#7ED957] rounded-md p-1 hover:bg-[#2a7e05]">
            <NuxtLink :to="`/articles${b._path}`" class="">
              Get Started
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup>
const { data: blogNav } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("articles"));
});
useHead({
  title: "Content articles",
});
</script>

<style lang="scss" scoped></style>
