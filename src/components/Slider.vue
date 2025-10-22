<template>
    <swiper :loop="true" :navigation="true" :modules="modules" class="mySwiper rounded-box">
      <swiper-slide v-for="imag in images" class="">
        <img :src="imag" class="" alt="">
        <img :src="'http://127.0.0.1:8000'+imag" class=" flex justify-center items-center mx-auto" alt="">
      </swiper-slide>

    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/navigation';
  
    import '@/assets/main.css';
  
    // import required modules
    import { Navigation } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Navigation],
        };
    },
      props:['images']
    };
  </script>
  