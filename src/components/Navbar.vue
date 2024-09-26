<template>
<nav class="z-50 flex items-center justify-between h-20 px-5 font-sans md:px-7" :class="screenWidth >= 720 && screenWidth <= 900 ? 'border-b' : ''">
    <div>
        <router-link to="/">
            <img :src="logo" alt="Logo">
        </router-link>
    </div>

    <ul v-if="screenWidth > 920" class="flex h-[100%] gap-6 uppercase">
        <li class="relative px-2 cursor-pointer hover:text-[#D4A6BF] flex items-center h-full before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[1px] before:bg-[#D4A6BF] before:opacity-0 before:-translate-x-4 hover:before:translate-x-0 hover:before:opacity-100 before:duration-300 duration-200">
            <router-link to="/shop" class="flex items-center h-full">Shop All</router-link>
        </li>
        <li class="relative px-2 cursor-pointer hover:text-[#D4A6BF] flex items-center h-full before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[1px] before:bg-[#D4A6BF] before:opacity-0 before:-translate-x-4 hover:before:translate-x-0 hover:before:opacity-100 before:duration-300 duration-200">
            <router-link to="/makeup" class="flex items-center h-full">Makeup</router-link>
        </li>
        <li class="relative px-2 cursor-pointer hover:text-[#D4A6BF] flex items-center h-full before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[1px] before:bg-[#D4A6BF] before:opacity-0 before:-translate-x-4 hover:before:translate-x-0 hover:before:opacity-100 before:duration-300 duration-200">
            <router-link to="/skincare" class="flex items-center h-full">Skin Care</router-link>
        </li>
        <li class="relative px-2 cursor-pointer hover:text-[#D4A6BF] flex items-center h-full before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[1px] before:bg-[#D4A6BF] before:opacity-0 before:-translate-x-4 hover:before:translate-x-0 hover:before:opacity-100 before:duration-300 duration-200">
            <router-link to="/haircare" class="flex items-center h-full">Hair Care</router-link>
        </li>
        <li class="relative px-2 cursor-pointer hover:text-[#D4A6BF] flex items-center h-full before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[1px] before:bg-[#D4A6BF] before:opacity-0 before:-translate-x-4 hover:before:translate-x-0 hover:before:opacity-100 before:duration-300 duration-200">
            <router-link to="/about" class="flex items-center h-full">About</router-link>
        </li>
        <li class="relative px-2 cursor-pointer hover:text-[#D4A6BF] flex items-center h-full before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[1px] before:bg-[#D4A6BF] before:opacity-0 before:-translate-x-4 hover:before:translate-x-0 hover:before:opacity-100 before:duration-300 duration-200">
            <router-link to="/contact" class="flex items-center h-full">Contact</router-link>
        </li>
    </ul>

    <div v-if="screenWidth > 920">
        <div class="flex items-center gap-2">
            <div class="mr-4">
                <font-awesome-icon class="text-lg" :icon="['fas', 'user']" />
            </div>
            <div class="text-lg font-bold">${{ totalPrice.toFixed(2) }}</div>
            <div>
                <font-awesome-icon class="text-lg" :icon="['fas', 'bag-shopping']" />
            </div>
        </div>
    </div>

    <div v-else>
        <div class="relative">
            <input v-model="opened" type="checkbox" id="ham" class="hidden" />
            <label for="ham" class="h-6 w-10 cursor-pointer grid justify-items-center gap-1.5">
                <span class="w-8 h-1 transition duration-300 ease-in-out transform bg-black rounded-full ham-top"></span>
                <span class="w-8 h-1 transition duration-300 ease-in-out bg-black rounded-full ham-middle"></span>
                <span class="w-8 h-1 transition duration-300 ease-in-out transform bg-black rounded-full ham-bottom"></span>
            </label>
        </div>
    </div>

    <!-- Mobile menu items -->
    <ul v-if="opened" class="absolute left-0 z-[1000] flex flex-col items-start w-full text-black bg-[#F9F9F9] top-20 uppercase">
        <li class="w-full px-5 py-3 border-b">
            <router-link to="/shop">Shop All</router-link>
        </li>
        <li class="w-full px-5 py-3 border">
            <router-link to="/makeup">MakeUp</router-link>
        </li>
        <li class="w-full px-5 py-3 border">
            <router-link to="/skincare">Skin Care</router-link>
        </li>
        <li class="w-full px-5 py-3 border">
            <router-link to="/haircare">Hair Care</router-link>
        </li>
        <li class="w-full px-5 py-3 border">
            <router-link to="/about">About</router-link>
        </li>
        <li class="w-full px-5 py-3 border">
            <router-link to="/contact">Contact</router-link>
        </li>
    </ul>
</nav>
</template>

<script>
import logo from '../assets/logo-regular.png';
import { computed } from 'vue'; // <-- Import computed
import { useStore } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      logo,
      screenWidth: window.innerWidth,
      opened: false
    };
  },
  setup() {
    const store = useStore(); // Access Vuex store

    // Get state
    const totalPrice = computed(() => store.getters.totalPrice);

    return {
        totalPrice
    };
  },
};
</script>


<style>
#ham:checked~label .ham-top {
    transform: rotate(45deg) translateY(14px);
    width: 2.2rem;
}

#ham:checked~label .ham-middle {
    opacity: 0;
}

#ham:checked~label .ham-bottom {
    transform: rotate(-45deg) translateY(-14px);
    width: 2.2rem;
}
</style>
