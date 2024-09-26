<template>
<div class="grid grid-cols-2 gap-5 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <Products v-for="(product, index) of products" :key="index" :product="product" />
</div>
</template>

<script>
import Products from './Products.vue';

export default {
    name: 'ProductsListings',
    props: {
        products: {
            type: Object,
            required: true
        }
    },
    components: {
        Products
    }
};
</script>
