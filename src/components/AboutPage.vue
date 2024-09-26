<template>
<div class="">
    <!-- Hero Section -->
    <div class="relative mx-5 bg-sizing bg-[url('../public/AboutBg.jpg')] h-[255px] md:h-[43vh] lg:h-[50vh] px-5 lg:px-10 xl:h-[70vh] lg:bg-fixed flex justify-center flex-col text-white">
        <h6 class="text-sm">A FEW WORDS</h6>
        <h1 class="text-4xl lg:text-6xl">About Us</h1>
    </div>

    <div class="px-5 md:grid md:grid-cols-2 md:px-10">
        <!-- Some text -->
        <div class="py-12 md:py-8 lg:py-16 lg:w-[60%]">
            <h2 class="mb-4 text-3xl leading-7 md:text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p class="text-sm before:content-[''] before:h-1 before:w-16 relateive after:content-[''] after:h-[2px] md:after:w-12  after:w-14 after:bg-[#E9D2DA] after:absolute relative overflow-visible after:-bottom-5 after:z-50 after:left-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <!-- Text Card -->
        <div class="bg-[#F6EDF0] mt-5 md:p-8 md:px-14 lg:p-24 md:-translate-y-10 p-6 space-y-6 mb-6 md:mb-0">
            <h3 class="text-base font-medium md:text-lg md:leading-7 lg:font-medium lg:text-xl ">Cras ut ultricies risus. Etiam ac malesuada lectus. Sed congue nisi vitae lorem ullamcorper laoreet. In eget tellus mauris. Phasellus id ligula.</h3>
            <p class="text-sm leading-6 tracking-wider lg:text-base lg:font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id, dignissim in urna. </p>
            <p class="text-sm leading-6 tracking-wider lg:text-base lg:font-light">Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id.</p>
        </div>
    </div>

    <!-- About Products Hero -->
    <div class="relative bg-sizing2 bg-[url('../public/aboutbg2.jpg')] h-[512px] lg:h-[78vh] xl:h-[110vh] px-5 flex justify-end py-10 flex-col text-center text-white mx-5 lg:mx-0 lg:py-20 lg:px-44">
        <div class="md:px-16">
            <h1 class="mb-4 text-3xl md:text-4xl lg:text-5xl">About Our Products</h1>
            <div class="flex justify-center">
                <div class=" h-[1.5px] mb-4 md:w-12 realtive w-14 bg-white z-50"></div>
            </div>
            <p class="text-[1.1rem] lg:text-2xl leading-5 md:text-lg md:leading-6">Proin at velit sed elit varius porttitor. Ut a suscipit quam, eu congue odio. Sed eget viverra est. Vivamus ut sodales neque. Sed vel dui et dolor placerat egestas id lacinia mauris</p>
        </div>
    </div>

    <!-- About Me Section -->
    <div class="md:grid md:grid-cols-2 md:mx-5 md:my-5 lg:mx-0">
        <div class="bg-[#F6EDF0] mt-5 md:flex md:flex-col md:justify-end md:mt-0 mx-5 md:mx-0 md:p-8 lg:p-24 xl:py-40 px-3 py-6 mb-6 md:mb-0 text-center order-4 md:text-right md:px-8 md:pl-16 lg:space-y-4">
            <h6 class="text-sm font-light lg:text-base">About me</h6>
            <h3 class="text-3xl lg:text-5xl">Hi, I'm Danial!</h3>
            <h4 class="mb-2 text-lg lg:text-2xl">I'm a 32 years old women entrepreneur, living in Miami, Florida</h4>
            <div class="flex justify-center md:justify-end">
                <div class=" h-[1.5px] md:h-[2px] mb-4 md:w-12 realtive w-14 bg-[#E9D2DA] z-50"></div>
            </div>
            <p class="mb-4 font-sans font-light lg:text-lg">Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.</p>
            <p class="font-sans font-light lg:text-lg">Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget.</p>
        </div>
        <div class="order-2">
            <div class="relative bg-cover bg-center bg-[url('../public/client.jpg')] h-[46vh] md:h-[50vh] lg:h-full  flex-col text-center text-white mx-5 md:mx-0">
            </div>
        </div>
    </div>

    <div class="mx-5 my-16">
      <ChooseSection />
    </div>
</div>
</template>

<script>
import ChooseSection from './ChooseSection.vue';

export default {
    name: 'AboutPage',
    data() {
        return {};
    },
    methods: {},
    components: { ChooseSection }
};
</script>

<style scoped>
.bg-sizing {
    background-position: -395px 245px;
    background-size: 1200px 300px;
}

@media (min-width: 780px) {
    .bg-sizing {
        background-position: -560px -40px;
        background-size: 2000px auto;
    }
}

@media (min-width: 1024px) {
    .bg-sizing {
        background-position: -450px 10px;
        background-size: 2050px auto;
    }
}

/* Bg sizing 2 */
.bg-sizing2 {
    background-position: -255px 535px;
    background-size: 900px 550px;
}

@media (min-width: 780px) {
    .bg-sizing2 {
        background-position: -160px -40px;
        background-size: 1100px auto;
    }
}

@media (min-width: 1024px) {
    .bg-sizing2 {
        background-position: -180px -40px;
        background-size: 1450px auto;
    }
}
@media (min-width: 1280px) {
    .bg-sizing2 {
        background-position: 0px -40px;
        background-size: 1350px auto;
    }
}
</style>
