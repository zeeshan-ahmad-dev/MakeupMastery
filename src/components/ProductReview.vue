<template>
<div class="grid px-5 mt-16 mb-10 lg:my-24 md:grid-cols-2">
    <div>
        <h4 class="text-[#5d5b5b] md:mb-4">Jane Oliver</h4>
        <h2 class="mt-1 lg:text-5xl mb-12 text-3xl md:text-4xl leading-8 line-clamp-4 after:content-[''] after:h-[1.5px] md:after:w-12 md:after:-bottom-5 after:w-16 after:bg-[#d4a6b6] after:absolute relative overflow-visible after:-bottom-3 after:z-50 after:left-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere</h2>
    </div>
    <div class="md:px-12">
        <Review />
        <Review />
        <Review />
    </div>
</div>
</template>

<script>
import Review from './Review.vue';

export default {
    name: 'ProductReview',
    data() {
        return {};
    },
    methods: {},
    components: { Review }
};
</script>
