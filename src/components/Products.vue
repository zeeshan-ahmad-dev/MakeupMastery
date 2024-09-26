<template>
<router-link :to="{
    name: 'ProductPage',
    params: { id:product.id },
    query: { prevPage: $route.name, product: JSON.stringify(product) }
}">
    <div>
        <img class="w-full" :src="product.src" alt="">
        <div>
            <div class="my-2 rating">
                <font-awesome-icon v-for="n in 5" :key="n" :icon="n <= rating ? ['fa', 'star'] : ['far','star']" />
            </div>
            <h5 class="mb-[0.1rem]">{{ product.name }}</h5>
            <p class="font-sans font-bold text-md text-[#5d5b5b]"><span class="font-medium line-through opacity-40">${{ (product.price * (Math.max(0.4,Math.random()))).toFixed(2) }}</span> ${{ product.price.toFixed(2) }}</p>
        </div>
    </div>
</router-link>
</template>

<script>
export default {
    name: 'Products',
    data() {
        return {
            rating: 0
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    created() {
        this.generateRatings()
    },
    methods: {
        generateRatings() {
            this.rating = Math.floor(Math.random() * 5);
        }
    }

};
</script>
