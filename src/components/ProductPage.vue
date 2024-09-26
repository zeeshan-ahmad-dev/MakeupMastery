<template>
<div class="px-5 my-8 md:px-16 lg:mt-24">
    <div v-if="show" class="bg-[#F7F6F7] px-8 py-4 flex gap-5 mb-8 border-t-2 border-black">
        <div>
            <font-awesome-icon :icon="['fas', 'check-circle']" />
        </div>
        <div class="justify-between md:flex md:w-full">
            <p class="mb-3 font-sans font-light text-md">“{{ product.name }}” has been added to your cart.</p>
            <button class="px-5 py-2 text-sm lg:text-md text-white bg-black hover:bg-[#D4A6B6]">VIEW CART</button>
        </div>
    </div>
    <div class="grid-cols-2 gap-10 lg:grid">
        <div>
            <div>
                <img class="w-full" :src="product.src" alt="">
            </div>
            <div class="grid grid-cols-4 gap-4 py-5 h-28 md:h-52 lg:h-32">
                <div class="bg-[url('../../public/mProduct2.jpg')] bg-cover bg-center h-full"></div>
                <div class="bg-[url('../../public/mProduct1.jpg')] bg-cover bg-center h-full"></div>
                <div class="bg-[url('../../public/mProduct3.jpg')] bg-cover bg-center h-full"></div>
                <div class="bg-[url('../../public/mProduct4.jpg')] bg-cover bg-center h-full"></div>
            </div>
        </div>
        <div class="mt-5">
            <nav class="font-sans text-[#777] text-sm mb-5">
                <router-link to="/">Home</router-link> / <router-link :to="prevPageLink">{{ prevPageName }}</router-link> / {{ product.name }}
            </nav>
            <h2 class="mb-4 text-3xl">{{ product.name || 'Product Name' }}</h2>
            <p class="font-sans font-bold lg:text-2xl text-[#5d5b5b] text-xl"><span class="font-medium line-through opacity-40">${{ discount }}</span> ${{ price || 0}} </p>
            <p class="mt-3 font-sans text-[.9rem] leading-6 font-light lg:text-base lg:leading-7">Ut quis sollicitudin orci. Aliquam at libero non purus sodales sagittis eu ac neque. Nunc ipsum felis, vehicula eu aliquam sed, ultricies ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam viverra commodo finibus. Morbi laoreet lacus quis lobortis tempor. Nam tincidunt, lectus a suscipit fringilla, mauris turpis dapibus dolor, eu venenatis diam nibh id massa.
                <br><br>
                Nulla eget tortor ultrices, ultricies turpis a, accumsan turpis. Quisque dignissim semper leo ac accumsan. Quisque est nisl, bibendum ut elit quis, pellentesque vehicula tellus. Sed luctus mattis ante ac posuere.
            </p>
            <div class="flex gap-5 mt-4">
                <div class="flex font-sans">
                    <button @click="cartNumber >= 1 ? cartNumber-- : cartNumber" class="px-3 py-1 border">-</button>
                    <div class="px-3 py-1 border">{{ cartNumber }}</div>
                    <button @click="cartNumber++" class="px-3 py-1 border">+</button>
                </div>
                <button @click="addCart, addProduct(Number(price) * cartNumber)" class="px-4 py-1 text-sm lg:text-md text-white bg-black hover:bg-[#D4A6B6]">ADD TO CART</button>
            </div>
        </div>
    </div>

    <div class="flex flex-col my-20">
        <h1 class="text-3xl">Related products</h1>
        <ProductListings :products="products" :type="'featured'" />
    </div>
</div>
</template>

<script>
import ProductListings from './ProductListings.vue';
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

export default {
    name: 'ProductPage',
    data() {
        return {
            products: [{
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
            prevPageName: '',
            prevPageLink: '',
            product: {},
            price: 0,
            discount: 0,
            cartNumber: 1,
            show: false,
            width: window.innerWidth
        };
    },
    methods: {
        added() {
            alert(`${this.cartNumber} Products were added to cart`)
        },
        addCart() {
                this.show = true;
                alert(this.width);
                setTimeout(() => {
                    this.show = false
                }, 10000);
        }
    },
    mounted() {
        this.product = this.$route.query.product ? JSON.parse(this.$route.query.product) : {};
        this.prevPageName = this.$route.query.prevPage || 'Previous Page';
        this.price = this.product.price.toFixed(2);
        this.discount = (this.product.price * (Math.max(0.4, Math.random()))).toFixed(2)
        this.prevPageLink = `/${this.prevPageName}`;
    },
    components: {
        ProductListings
    },
    setup() {
        const store = useStore();
        const addProduct = (price) => {
            store.dispatch('addProduct', price);
        };
        return {
            addProduct
        }
    }
};
</script>
