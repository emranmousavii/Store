<template>



    <div class="lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-5  xl:max-w-screen-xl mx-auto">
    <Headslider :images="[
  '/public/main-slider-1.jpg',
  '/public/main-slider-2.jpg',
  '/public/main-slider-3.jpg'
      
    ]"></Headslider>

    <Pajetitle :title="'پیشنهادات ویژه'"></Pajetitle>
    <div class="flex flex-wrap p-2 mt-10">
      <Shopslider :stores="stores" ></Shopslider >
    </div>


    <Pajetitle :title="'جدیدترین محصولات'"></Pajetitle>
    <div class="flex flex-wrap mt-10 ">
      <Shopslider :stores="stores" ></Shopslider>
    </div>
    <Bannershop class="mt-10"></Bannershop>

    

    <Pajetitle :title="'پرفروش ترین محصولات'"></Pajetitle>
    <div class="flex flex-wrap mt-10 ">
      <Shopslider :stores="stores" ></Shopslider>
    </div>
    <Pajetitle :title="'مطالب خواندنی'"></Pajetitle>
    <div class="flex flex-wrap ">
      <Shopcard v-for="store in stores" :store="store" class="p-4"></Shopcard>

    </div>
  </div>
</template>

<script>
import Bannershop from '@/components/Bannershop.vue';
import Headslider from '@/components/headslider.vue';
import Navbar from '@/components/Navbar.vue';
import Pajetitle from '@/components/Pajetitle.vue';
import Shopcard from '@/components/Shopcard.vue';
import TopMeno from '@/components/TopMeno.vue';
import FooterView from './FooterView.vue';
import Shopslider from '@/components/Shopslider.vue';

  export default {
  components: {
      Navbar,
      TopMeno,
      Headslider,
      Pajetitle,
      Shopcard,
      Shopslider,
      Bannershop,
      FooterView
    },
    data() {
      return {
        stores:[]
        
      }
  },
    mounted() {
      this.axios.get('http://127.0.0.1:8000/products').then((response) => {
        console.log(response.data);
        this.stores = response.data
        this.$router.push({ name: 'store', params: { id: this.stores } })


        // for (let i = 14; i < 20; i++) {
        //   this.stores.push(response.data[i]) 
        // }
        
      }).catch((error) => {
        
      })
      
    },
  }
</script>
