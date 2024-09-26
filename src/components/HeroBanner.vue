<!-- HeroBanner.vue -->
<template>
<div :class="['relative bg h-[43vh] lg:h-[80vh] xl:h-[90vh] px-5 mx-5 lg:bg-fixed flex items-center', bgClass]" :style="{ backgroundImage: 'url(' + backgroundImage + ')'}">
    <div class="relative z-50 md:py-28 lg:px-8 md:w-[30%] lg:py-48 lg:w-[40%] xl:w-[45%] xl:py-36 py-16 text-white">
        <h6 class="mb-2 text-sm uppercase lg:mb-4">{{ subtitle }}</h6>
        <h1 class="mb-2 text-4xl leading-10 capitalize lg:text-6xl">{{ title }}</h1>
        <h4 class="mb-6 leading-6 text-md font-medium tracking-wide lg:mb-10 lg:text-[1.4rem]">{{ description }}</h4>
        <router-link to="/shop" class="px-5 py-2 text-black text-md rounded-sm uppercase font-sans bg-white hover:text-[#B0898C] cursor-pointer lg:px-7 lg:py-3 duration-200">Shop now</router-link>
    </div>
</div>
</template>

  
<script>
export default {
    name: 'HeroBanner',
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

  