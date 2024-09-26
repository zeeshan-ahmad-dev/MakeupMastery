<template>
<footer class="bg-[#F6EDF0] mx-5 mb-5">
    <div class="px-5 py-3 pt-6 text-center md:flex md:justify-between md:items-center lg:items-center border-b border-b-[#a5818356]">
        <h3 class="mb-8 text-xl font-medium md:mb-0">Subscribe to our newsletter</h3>
        <div class="flex flex-col md:flex-row md:items-center md:w-[40%] lg:h-11 lg:w-[45%] md:space-x-1 lg:space-x-2">
            <input type="text" class="py-3 md:h-[100%] md:w-[70%] md:mt-5 px-2 mb-5 text-sm placeholder-[#484547]  outline-none" placeholder="Your email address...">
            <button class="uppercase hover:bg-[#D4A6BF] bg-black text-white text-base font-sans py-2 md:w-[40%] md:h-[100%]">Subcribe</button>
        </div>
    </div>

    <div class="px-5 pt-10 flex flex-col items-center border-b border-b-[#a5818356] md:flex-row md:justify-between md:py-10">
        <img src="../assets/logo-regular.png" alt="">
        <div class="md:flex md:justify-around md:space-x-5 lg:space-x-10">
            <ul class="my-4 md:mr-8 lg:mr-14 space-y-2 text-center md:text-left  text-sm font-medium md:w-[30%]">
                <li><router-link to="shop" class="hover:text-[#aa899b]">Shop All</router-link></li>
                <li><router-link to="makeup" class="hover:text-[#D4A6BF]">Makeup</router-link></li>
                <li><router-link to="skincare" class="hover:text-[#D4A6BF]">Skin Care</router-link></li>
                <li><router-link to="haircare" class="hover:text-[#D4A6BF]">Hair Care</router-link></li>
                <li><router-link to="about" class="hover:text-[#D4A6BF]">About</router-link></li>
                <li><router-link to="contact" class="hover:text-[#D4A6BF]">Contact</router-link></li>
            </ul>
            <ul class="my-4 text-center md:w-[30%] md:text-left">
                <li><a class="hover:text-[#aa899b]" href="#">Refund Policy</a></li>
                <li><a class="hover:text-[#aa899b]" href="#">Terms & Conditions</a></li>
                <li><a class="hover:text-[#aa899b]" href="#">FAQ</a></li>
                <li><a class="hover:text-[#aa899b]" href="#">PrivacyPolicy</a></li>
            </ul>
            <div class="mt-4 mb-8 space-x-2 md:w-[60%] md:flex md:justify-end md:items-center">
                <font-awesome-icon class="text-xl hover:text-[#A58183] cursor-pointer" :icon="['fab', 'square-facebook']" />
                <font-awesome-icon class="text-xl hover:text-[#A58183] cursor-pointer" :icon="['fab', 'twitter']" />
                <font-awesome-icon class="text-xl hover:text-[#A58183] cursor-pointer" :icon="['fab', 'square-instagram']" />
            </div>
        </div>
    </div>
    <div class="container px-5 py-10 mx-auto ">
        <p class="text-sm">
            Copyright © 2024
            <span class="font-semibold">Be Bold</span> | Powered by
            <span class="font-semibold">Be Bold</span>
        </p>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {

        };
    },
    methods: {}
};
</script>
