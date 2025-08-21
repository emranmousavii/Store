<template>
    <swiper  :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="image in images">
        <img :src="image" class="object-cover justify-center w-auto rounded-box" alt="">
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
  