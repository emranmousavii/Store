<template>

  <div class="bg-linear-to-tl from-black to-emerald-950  h-full">
    <Navbar></Navbar>
    <TopMeno></TopMeno>
    <router-view></router-view>
    <FooterView class="mt-10"></FooterView>

  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import TopMeno from './components/TopMeno.vue';
import FooterView from './views/FooterView.vue';

export default {
  components: {
    Navbar,
    TopMeno,
    FooterView
  }
    
  }
</script>
