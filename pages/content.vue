<template>
  <DarkMode />
  <div class="min-h-screen">
    <main>
      <!-- <section class="lg:px-[15%] px-[5%] pt-20">
        <h1
          class="lg:text-5xl text-2xl leading-normal font-semibold text-center text-gray-400 font-bca">
          Explore Our Fresh Blog Articles
        </h1>
        <h1
          class="lg:text-4xl text-4xl text-center leading-normal font-bold text-gray-400 font-bca">
          Embrace Learning. Foster Collaboration. Flourish Together.
        </h1>
      </section> -->
      <section class="lg:px-[15%] px-[5%] pb-14">
        <p
          class="text-center uppercase font-medium tracking-wider mb-10 text-gray-500">
          Blog Posts
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <template
            v-for="(b, i) in blogNav[0].children"
            :key="`blogNavItem-${b._path}-${i}`">
            <div class="px-7 py-5">
              <img :src="getBlogImage(i + 1)" alt="MarineGEO circle logo" />
              <div class="border-2 p-2">
                <h2 class="text-lg font-semibold">
                  {{ b.title }}
                </h2>
                <h4 class="text-sm text-gray-500 font-semibold">
                  {{ b.author }}
                  -
                  {{ b.publishedAt }}
                </h4>
              </div>

              <!-- Loop over files inside the content dir -->
              <ul
                v-if="b.children"
                class="list-disc list-inside mt-4 pl-2 space-y-3">
                <template
                  v-for="(child, k) in b.children"
                  :key="`childNav-${child._path}-${k}-${i}`">
                  <li
                    class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all">
                    <NuxtLink :to="`/blog${child._path}`">
                      {{ child.title }}
                    </NuxtLink>
                  </li>
                </template>
              </ul>
              <ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
                <li
                  class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all">
                  <NuxtLink :to="`/articles${b._path}`"> Get Started </NuxtLink>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const getBlogImage = b => {
  // Return the dynamic image source based on blog data
  // For example, you can use a property from the blog object or manipulate the URL based on some logic
  return `/assets/resources/blog-${b}.png`;
};
const { data: blogNav } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("articles"));
});
useHead({
  title: "Content Blog",
});
</script>
