<template>
<div class="w-screen h-[1px] opacity-15 bg-black"></div>
<div class="px-5 py-6 lg:py-14">
    <nav class="font-sans text-[#777]">
        <router-link to="/">Home</router-link> / Shop
    </nav>
    <h1 class="my-4 mb-12 text-4xl lg:text-6xl">Shop</h1>

    <div class="flex items-center justify-between text-sm w-[100%]">
        <!-- Results Count Display -->
        <div class="w-[45%] lg:text-lg">Showing {{ startResult }}-{{ endResult }} of {{ products.length }} results</div>
        <!-- Filter Dropdown (example: category or price range) -->
        <div class="w-[55%] flex justify-end">
            <select v-model="selectedCategory" class="w-40">
                <option value="" selected>Default sorting</option>
                <option v-for="category in productNames" :key="category" :value="category">
                    {{ category }}
                </option>
            </select>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-5 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Products v-for="(product, index) of paginatedProducts" :key="index" :product="product" />
    </div>

    <!-- Pagination -->
    <ul class="flex mt-10 mb-2 space-x-2">
        <li v-for="page in totalPages" :key="page" @click="currentPage = page" class="px-[.95rem] py-[.45rem] bg-white border border-black cursor-pointer hover:text-white hover:bg-black">
            {{ page }}
        </li>

    </ul>
</div>
</template>

<script>
import Products from './Products.vue';
export default {
    name: 'ShopingPage',
    data() {
        return {
            selectedCategory: '',
            productNames: ['Cream', 'Shampoo', 'Face Wash', 'Perfume', 'Lotion', 'Soap', 'Conditioner', 'Toothpaste', 'Serum', 'Sunscreen', 'Deodorant', 'Hair Gel', 'Hand Sanitizer', 'Body Wash'],
            currentPage: 1,
            itemsPerPage: 8,
            products: [],
        }
    },
    created() {
        this.generateRandomProducts()
    },
    methods: {
        generateRandomProducts() {
            // const n = 
            for (let i = 1; i <= Math.floor(Math.random() * 50); i++) {
                const randomIndex = Math.floor(Math.random() * this.productNames.length);
                const randomPrice = Math.floor(Math.random() * 500) + 50;
                const randomId = i;
                const imgNum = Math.floor(Math.random() * 13) + 1;

                this.products.push({
                    id: randomId,
                    name: this.productNames[randomIndex],
                    price: randomPrice,
                    src: `../../public/product${imgNum}.jpg`,
                });
            }
        }

    },
    computed: {
        filteredProducts() {
            if (this.selectedCategory) {
                return this.products.filter(product => product.category === this.selectedCategory);
            }
            return this.products;
        },
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredProducts.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage)
        },
        startResult() {
            return (this.currentPage - 1) * this.itemsPerPage + 1;
        },
        endResult() {
            return Math.min(this.currentPage * this.itemsPerPage, this.filteredProducts.length)
        }
    },

    components: {
        Products,
    }
};
</script>
