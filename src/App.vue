<template>
  <div class=" h-full" :style="{ backgroundImage: 'var(--background-custom)' }">
    <Navbar class="fixed top-0 left-0 w-full z-50"></Navbar>
    <TopMenu :class="['fixed top-20 left-0 w-full  z-40',
      isScrollingDown ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0 pointer-events-auto']"></TopMenu>
    <router-view class="mt-28"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import TopMenu from './components/TopMenu.vue';

export default {
  data() {
    return {
      lastScrollY: 0,
      isScrollingDown: false,
    }
  },
  components: {
    Navbar,
    TopMenu,
      Footer
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScroll = window.scrollY;

      this.isScrollingDown = currentScroll > this.lastScrollY && currentScroll > 80;

      this.lastScrollY = currentScroll;
    },
  },
    
  }
</script>
