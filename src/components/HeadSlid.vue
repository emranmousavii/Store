<template>
    <div class="grid grid-cols-3 mt-6 xl:space-x-3 items-center mx-4 ">
        <div class="col-span-3 lg:col-span-2 ">
         <Slider :images="[
 '/public/main-slider-1.jpg',
  '/public/main-slider-2.jpg',
  '/public/main-slider-3.jpg'
        ]"></Slider>
        </div>

       <div class="col-span-3 lg:col-span-1 ">
        <TopBanner  :images="[
    '/public/main-banner-top.jpg',
    '/public/main-bot.gif'
            
        ]"></TopBanner>
       </div>

    </div>
</template>

<script>
import Slider from './Slider.vue';
import TopBanner from './TopBanner.vue';

export default {
    
    components: {
        Slider,
            TopBanner
    },
       
        
    }
</script>

