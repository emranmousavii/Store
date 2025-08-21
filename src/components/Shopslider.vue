<template>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '960': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        '1050': {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        '1224': {
          slidesPerView: 5.5,
          spaceBetween: 10,
        },
        '1280': {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="store in stores">
        <shopcard :store="store"></shopcard>
      </swiper-slide>
  
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
    import '@/assets/main.css';
  
    // import required modules
    import { Pagination } from 'swiper/modules';
import Shopcard from './Shopcard.vue';
  
    export default {
      components: {
        Swiper,
            SwiperSlide,
        Shopcard
      },
      setup() {
        return {
          modules: [Pagination],
        };
    },
      props:['stores']
    };
  </script>
  