<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<style>
body {
    font-family: "Marcellus", serif;
    font-weight: 400;
    font-style: normal;
}
</style>
