<template>
  <div>
    <main>
      <div class="">
        <div
          class="text-center text-4xl text-gray-500 font-bold border-b-4 border-dashed p-4">
          Article
        </div>
      </div>

      <article
        class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]">
        <ClientOnly>
          <ContentRenderer
            class="prose lg:prose-base prose-sm prose-slate articles-link pr-7 max-w-none"
            :value="articles">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </ClientOnly>
      </article>
    </main>
  </div>
</template>

<script setup>
const slug = useRoute().params.slug.toString().replace(/,/g, "/");
const { data: articles } = await useAsyncData(slug, () => {
  return queryContent(slug).findOne();
});
useHead({
  title: `${articles.value.title}`,
});
</script>

<style scoped></style>
