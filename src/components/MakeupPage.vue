<template>
    <div class="w-screen h-[1px] opacity-15 bg-black"></div>
<div class="px-5 py-6 lg:py-14">
    <nav class="font-sans text-[#777]">
        <router-link to="/">Home</router-link> / Makeup
    </nav>
    <h1 class="mt-4 mb-12 text-4xl lg:text-6xl">Makeup</h1>

    <div class="flex items-center justify-between text-sm">
        <!-- Results Count Display -->
        <div class="w-[45%] lg:text-lg">Showing all {{ products.length }} results</div>
        <!-- Filter Dropdown (example: category or price range) -->
        <div class="w-[55%] flex justify-end">
            <select v-model="selectedCategory" class="w-40">
                <option value="" selected>Default sorting</option>
                <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                </option>
            </select>
        </div>
    </div>

    <div class="flex flex-col items-center mb-16">

        <div class="grid grid-cols-2 gap-5 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Products v-for="(product, index) of products" :key="index" :product="product" />
        </div>

    </div>

</div>
</template>

<script>
import ProductListings from './ProductListings.vue';
import Products from './Products.vue';
export default {
    name: 'MakeupPage',
    data() {
        return {
            selectedCategory: '',
            categories: ['Makeup', 'Skincare', 'Haircare'],
            products: [
                { id: 1, name: 'Product 1', price: Math.floor(Math.random() * 1000) + 10, src: '../public/mProduct1.jpg' },
                { id: 2, name: 'Product 2', price:  Math.floor(Math.random() * 1000) + 10, src: '../public/mProduct2.jpg' },
                { id: 3, name: 'Product 3', price:  Math.floor(Math.random() * 1000) + 10, src: '../public/mProduct4.jpg' },
                { id: 4, name: 'Product 4', price:  Math.floor(Math.random() * 1000) + 10, src: '../public/mProduct3.jpg' },
            ],
        }
    },
    components: {
        ProductListings,
        Products
    }
};
</script>
