<template>
<section>
    <!-- Hero Section -->
    <div class="relative mx-5 bg-sizing bg-[url('../public/contactBg.jpg')] h-[255px] md:h-[43vh] lg:h-[52vh] px-5 lg:px-10 xl:h-[74vh] flex justify-center flex-col text-white">
        <h6 class="text-sm">GET IN TOUCH</h6>
        <h1 class="text-4xl lg:text-6xl">Message Us</h1>
    </div>
    <!-- Contact section -->
    <section class="px-5 md:my-5 md:grid md:grid-cols-2">
        <div class="px-5 space-y-4 py-14 md:py-28 lg:w-[50%]">
            <h2 class="mb-2 text-3xl text-left lg:text-5xl lg:mb-2">Contact Us</h2>
            <p class="font-sans text-[#5d5b5b] md:text-sm md:font-light md:leading-7 lg:font-normal lg:text-base lg:leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
            <ul class="space-y-2 font-sans">
                <li class="flex items-center">
                    <font-awesome-icon class="mr-5" :icon="['fas', 'location-dot']" />
                    <p class="text-base">123 Fifth Avenue, New York, NY 10160</p>
                </li>
                <li class="flex items-center">
                    <font-awesome-icon class="mr-5" :icon="['fas', 'envelope']" />
                    <p class="text-base">contact@info.com</p>
                </li>
                <li class="flex items-center">
                    <font-awesome-icon class="mr-5" :icon="['fas', 'phone']" />
                    <p class="text-base">9-334-7565-9787</p>
                </li>
            </ul>
        </div>

        <!-- form card -->
        <form @submit.prevent="handleSubmit" class="px-5 md:px-10 lg:px-24 lg:py-20 py-6 bg-[#F6EDF0] font-snas" action="">
            <!-- Named container -->
            <div class="">
                <label for="" class="font-semibold text-[#5D5B5B]">Name <span class="text-xl text-red-600">*</span></label>
                <div class="flex justify-between gap-5 mb-5">
                    <div class="">
                        <input class="w-[100%] px-2 py-3 outline-none" type="text">
                        First
                    </div>
                    <div class="">
                        <input class="w-[100%] px-2 py-3 outline-none" type="text">
                        Last
                    </div>
                </div>
                <label for="" class="font-semibold text-[#5D5B5B]">Email <span class="text-xl text-red-600">*</span></label>
                <input class="w-[100%] px-2 py-3 outline-none mb-5" type="text">
                <label for="" class="font-semibold text-[#5D5B5B]">Message <span class="text-xl text-red-600">*</span></label>
                <textarea class="w-[100%] px-2 py-3 outline-none mb-4" type="text" cols="10" rows="4"></textarea>
                <button class="py-2 font-sans text-white bg-black px-7">Send</button>
            </div>
        </form>

        
    </section>
    <!-- Map -->
    <div class="px-5">
        <iframe class="h-[35vh] lg:h-[50vh] xl:h-[73vh] w-full my-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.5891724078967!2d73.066116!3d33.6525405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95390111eac9%3A0x2182683869596848!2sBrain%20Art%20Marketing!5e0!3m2!1sen!2s!4v1726565196816!5m2!1sen!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>
</template>

<script>
export default {
    name: 'ContactPage',
};
</script>

<style scoped>
.bg-sizing {
    background-position: -395px 265px;
    background-size: 1200px 350px;
}

@media (min-width: 780px) {
    .bg-sizing {
        background-position: -560px 0px;
        background-size: 2000px auto;
    }
}

@media (min-width: 1024px) {
    .bg-sizing {
        background-position: -500px 0;
        background-size: 2250px auto;
    }
}
</style>
