<template>
<!-- Hero Section -->
<HeroBanner backgroundImage="/bgPink.jpg" subtitle="New in town" title="The new beauty collection" description="This new collection brings with it the most exciting lorem ipsum dolor sit amet." bgClass="bgPink" />

<!-- Logo Slider -->
<LogoSlider />

<!-- Product Listings Section -->
<div class="flex flex-col items-center px-5 mb-20">
    <h4 class="text-[.7rem] uppercase mb-1">Popular Products</h4>
    <h1 class="text-3xl">Trending Now</h1>
    <ProductListings :products="products1" :type="'featured'" />
</div>
<div class="flex flex-col items-center px-5 mb-20">
    <h4 class="text-[.7rem] uppercase mb-1">Shop</h4>
    <h1 class="text-3xl">Best Selling</h1>
    <ProductListings :products="products2" :type="'new-arrivals'" />
</div>

<!-- Hero Banner Section -->
<HeroBanner backgroundImage="/bgBlue.jpg" subtitle="New collection" title="The beauty collection that makes all the difference!" description="Aliquam vulputate, nunc vitae suscipit aliquet, libero arcu hendrerit sapien." bgClass="bgBlue" />

<!-- Product Review Section -->
<ProductReview />

<div class="mx-5 mb-10 space-y-5 md:space-y-0 md:space-x-5 md:grid md:grid-cols-2">
    <PromoSection backgroundImage="/ProductSectionPink.jpg" subtitle="new collections" title="Awesome Makeup Kit Gift Sets" description="Find your unique style." bgClass="productBg" />
    <PromoSection backgroundImage="/ProductSectionBrown.jpg" subtitle="new collections" title="The Ultimate Skincare Regime" description="Find your unique style." bgClass="productBg" />
</div>

<div class="px-5 mb-16">
    <ChooseSection />
</div>
</template>

<script>
import ProductListings from './ProductListings.vue';
import LogoSlider from './LogoSlider.vue';
import HeroBanner from './HeroBanner.vue';
import ProductReview from './ProductReview.vue';
import PromoSection from './PromoSection.vue';
import ChooseSection from './ChooseSection.vue';
import Footer from './Footer.vue';

export default {
    name: 'Home',
    components: {
        LogoSlider,
        ProductListings,
        HeroBanner,
        ProductReview,
        PromoSection,
        ChooseSection,
        Footer
    },
    data() {
        return {
            products1: [{
                    id: 1,
                    name: 'Cream',
                    price: 100,
                    src: '../../public/product1.jpg'
                },
                {
                    id: 2,
                    name: 'Shampoo',
                    price: 200,
                    src: '../../public/product2.jpg'
                },
                {
                    id: 3,
                    name: 'Face Wash',
                    price: 300,
                    src: '../../public/product3.jpg'
                },
                {
                    id: 4,
                    name: 'Perfume',
                    price: 400,
                    src: '../../public/product4.jpg'
                },
            ],
            products2: [{
                    id: 1,
                    name: 'Fragnance',
                    price: 937,
                    src: '../../public/product2.jpg'
                },
                {
                    id: 2,
                    name: 'Vassline',
                    price: 599,
                    src: '../../public/product4.jpg'
                },
                {
                    id: 3,
                    name: 'Beauity Cream',
                    price: 50,
                    src: '../../public/product1.jpg'
                },
                {
                    id: 4,
                    name: 'Sun cream',
                    price: 900,
                    src: '../../public/product3.jpg'
                },
            ],
        }
    }
};
</script>

<style>
/* Background styling for the hero section's pink-themed image */
.bgPink {
    background-position: -355px 0;
    background-size: 1150px auto;
}

@media (min-width: 780px) {
    .bgPink {
        background-position: -200px 0px;
    }
}

@media (min-width: 1024px) {
    .bgPink {
        background-position: -100px 0px;
        background-size: 1450px 700px;
    }
}

/* Background styling for the hero section's blue-themed image */
.bgBlue {
    height: 54vh;
    background-position: -205px bottom;
    background-size: 1150px auto;
}

@media (min-width: 780px) {
    .bgBlue {
        height: 50vh;
    }
}

@media (min-width: 1024px) {
    .bgBlue {
        height: 90vh;
        background-position: -100px 0px;
        background-size: 1450px 700px;
    }
}

/* Background styling for the Product section's background images */
.productBg {
    background-position: -20px 0px;
    background-size: 500px auto;
}

@media (min-width: 780px) {
    .productBg {
        background-size: 700px auto;
    }
}

@media (min-width: 1024px) {
    .productBg {
        background-position: -160px -50px;
        background-size: 940px auto;
    }
}
</style>
