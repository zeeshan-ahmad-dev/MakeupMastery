<!-- HeroBanner.vue -->
<template>
    <div :class="['relative bg h-[40vh] lg:h-[67vh] md:h-[43vh] px-5 xsm:px-[2rem] xsm:h-[35vh]', bgClass]" :style="{ backgroundImage: 'url(' + backgroundImage + ')'}">
      <div class="relative z-50 md:py-28 lg:px-16 md:w-[100%] lg:py-28 lg:w-[80%] xl:py-36 py-16 text-white">
        <h6 class="text-sm uppercase lg:mb-4">{{ subtitle }}</h6>
        <h1 class="text-3xl mb-2 w-[70%]  leading-8 xsm:text-[2.1rem] xsm:mx-[4px] capitalize lg:text-4xl ">{{ title }}</h1>
        <h4 class="mb-6 font-medium leading-6 tracking-wide text-md lg:mb-10 lg:text-2xl">{{ description }}</h4>
        <a class="px-5 py-2 text-black text-md rounded-sm uppercase font-sans bg-white hover:text-[#B0898C] cursor-pointer lg:px-7 lg:py-3 duration-200">Shop now</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PromoSection',
    props: {
      backgroundImage: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      bgClass: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  