<template>
    <div class="flex overflow-hidden mb-14">
      <!-- Scrolling wrapper -->
      <div class="flex gap-6 py-5 animate-scroll whitespace-nowrap">
        <span v-for="img of imgs" :key="img.id" class="border-2 w-44 item">
          <img class="h-[5rem] w-[12rem] md:h-[6rem] md:w-[16rem]" :src="img.src" alt="">
        </span>
      </div>
    </div>
  </template>
  

<script>
export default {
  name: 'LogoSlider',
  data() {
     return {
      imgs: [
        {id:1, src:'../../public/logo-001.png'},
        {id:2, src:'../../public/logo-002.png'},
        {id:3, src:'../../public/logo-003.png'},
        {id:4, src:'../../public/logo-004.png'},
        {id:5, src:'../../public/logo-005.png'},
        {id:6, src:'../../public/logo-006.png'},
        {id:7, src:'../../public/logo-007.png'},
        {id:8, src:'../../public/logo-008.png'},
        {id:9, src:'../../public/logo-002.png'},
        {id:10, src:'../../public/logo-005.png'},
        {id:11, src:'../../public/logo-003.png'},
        {id:12, src:'../../public/logo-006.png'}
      ],
     }
  }
};
</script>

<style scoped>
 @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
</style>