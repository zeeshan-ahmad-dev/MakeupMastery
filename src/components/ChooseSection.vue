<template>
<div class="text-center grid lg:grid-cols-[1fr,2.5fr] lg:text-left lg:place-items-start">
    <div class="mb-6 lg:mt-10">
        <h6 class="uppercase after:content-['']  after:h-[1.5px] md:after:-bottom-5  after:w-16 after:bg-[#d4a6b6] after:absolute relative overflow-visible after:-bottom-3 after:z-50 after:-translate-x-24 after:lg:translate-x-0 after:lg:left-0">Why Choose us</h6>
    </div>
    <div class="space-y-7 grid md:grid-cols-3 ">

        <div class="flex lg:grid lg:grid-cols-[1fr,4fr] mt-7 flex-col lg:text-2xl lg:flex-row lg:items-start items-center gap-2 font-sans">
            <div class="w-10 bg-[#D4A6B6] hover:bg-black duration-300 grid place-content-center h-10 rounded-full">
                <font-awesome-icon class="text-xl text-white" :icon="['fas', 'truck-fast']" />
            </div>
            <div class="space-y-2">
                <h4>Fast Delivery</h4>
                <p class="font-sans text-sm leading-6 lg:leading-7 lg:text-[1.1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
        </div>

        <div class="flex lg:grid lg:grid-cols-[1fr,4fr] flex-col items-center lg:text-2xl lg:flex-row lg:items-start gap-2 font-sans">
            <div class="w-10 bg-[#D4A6B6] grid place-content-center  hover:bg-black duration-300 h-10 rounded-full">
                <font-awesome-icon class="text-white -rotate-12 w-5" :icon="['fas', 'cart-flatbed']" />
            </div>
            <div class="space-y-2">
                <h4>Free Shipping</h4>
                <p class="font-sans text-sm leading-6 lg:leading-7 lg:text-[1.1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos eligendi facilis?</p>
            </div>
        </div>

        <div class="flex lg:grid lg:grid-cols-[1fr,4fr] flex-col items-center lg:text-2xl lg:flex-row lg:items-start  gap-2 font-sans">
            <div class="w-10 bg-[#D4A6B6] grid place-content-center h-10  hover:bg-black duration-300 rounded-full">
                <font-awesome-icon class="text-xl text-white" :icon="['fas', 'left-long']" />
            </div>
            <div class="space-y-2">
                <h4>Easy Returns</h4>
                <p class="font-sans text-sm leading-6 lg:leading-7 lg:text-[1.1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ChooseSection',
    data() {
        return {

        };
    },
    methods: {}
};
</script>

<style scoped>
h1 {
    color: red;
}
</style>
