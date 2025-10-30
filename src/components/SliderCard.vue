<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '200': {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      '380': {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      '480': {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      '540': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '640': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '960': {
        slidesPerView: 3.5,
        spaceBetween: 100,
      },
      '1050': {
        slidesPerView: 5,
        spaceBetween: 120,
      },
      '1224': {
        slidesPerView: 5,
        spaceBetween: 100,
      },
      '1280': {
        slidesPerView: 6,
        spaceBetween: 100,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="shop in shop">
      <Card class="" :shop="shop"></Card>
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
import Card from './Card.vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
          Card
    },
    setup() {
      return {
        modules: [Pagination],
      };
  },
    props:['shop']
  };
</script>
