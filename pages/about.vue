<template>
  <darkMode />
  <div>
<<<<<<< HEAD
    <div class="container mx-auto py-8 ">
      <div class="gap-2 sm:flex sm: hidden ">
=======
    <div class="container mx-auto py-8 p-4">
      <div class="gap-2 sm:flex sm: hidden">
>>>>>>> newest
        <p class="text-4xl font-bca_bold mb-8 text-[#7ED957]">Education</p>
        <p class="text-4xl font-bca_bold mb-8">background</p>
      </div>
      <div class="max-w-sm sm:hidden focus:outline-none flex gap-2">
        <p class="text-xl font-bca_bold mb-8 text-[#7ED957]">Education</p>
        <p class="text-xl font-bca_bold mb-8">background</p>
      </div>
      <div class="flex justify-between pb-6">
        <!-- background edu -->
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-8">
<<<<<<< HEAD
            <div class="bg-white rounded-lg">
              <p class="text-xl mb-4 font-bca">2022 - Present</p>
              <p class="mb-4 text-gray-900 text-justify">
                Studing bachelor degree of Digital Busiess, specialization in
                E-Commerce at Cambodia Academy of Digital Technology in Phnom
                Penh, Cambodia.
=======
            <div class="bg-white rounded-lg dark:bg-[#0D1117] p-4">
              <p class="text-xl mb-4 font-bca dark:text-white">
                2022 - Present
              </p>
              <p class="mb-4 text-gray-900 text-justify dark:text-gray-300">
                {{ $t("2022") }}
>>>>>>> newest
              </p>
              <nuxt-img
                src="/images/1bg.jpg"
                class="w-[74%] mb-2 "
                alt="CADT" />
            </div>
          </div>

          <div class="w-full md:w-1/2 px-4 mb-8">
            <div class="bg-white rounded-lg dark:bg-[#0D1117] p-4">
              <p class="text-xl mb-4 font-bca dark:text-white">2019 - 2022</p>
              <p class="mb-4 text-gray-900 text-justify dark:text-gray-300">
                Studied Highschool diploma at Udomvichea Highschool in Kampot,
                Cambodia. Got A grade in National Examination (Bacii).
              </p>
              <nuxt-img
                src="/images/2bg.jpg"
                class="w-[74%] mb-2"
                alt="Udomvichea Highschool, grade A student" />
            </div>
          </div>

          <div class="w-full md:w-1/2 px-4 mb-4">
            <div class="bg-white rounded-lg dark:bg-[#0D1117] p-4">
              <p class="text-xl mb-4 font-bca dark:text-white">2017 - 2022</p>
              <p class="mb-4 text-gray-900 text-justify dark:text-gray-300">
                Studied at Kampot Krong Cambodia-Japan Friendship Secondary
                School in Kampot, Cambodia.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4 mb-4">
            <div class="bg-white rounded-lg dark:bg-[#0D1117] p-4">
              <p class="text-xl mb-4 font-bca dark:text-white">2011 - 2017</p>
              <p class="mb-4 text-gray-900 text-justify dark:text-gray-300">
                Studied at Kampot Krong Primary School in Kampot, Cambodia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
