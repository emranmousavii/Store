<template>
  <div class="max-[480px]:mx-15 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl sm:mx-auto pt-10 ">
    <HeadSlid></HeadSlid>

    <Title :title="'پیشنهادات ویژه'" class="mt-5"></Title>
    <SliderCard :shop="shops" class="mt-10"></SliderCard>

  

    <Title :title="'جدیدترین محصولات'" class="mt-8"></Title>
    <div class="hidden sm:block">
      <div class="mt-5 grid gap-4 w-full  grid-cols-3 justify-items-center  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
  <Card  v-for="shop in shops" :key="shop.id" :shop="shop"/>
</div>
    </div>
    <div class="block sm:hidden">
      <SliderCard :shop="shops" class="mt-10 hidden"></SliderCard>

    </div>


    <Title :title="'پرفروش ترین محصولات'" class="mt-8"></Title>
    <SliderCard :shop="shops" class="mt-10"></SliderCard>
    <Banner></Banner>
    <lateral ></lateral>
    
    <Title :title="'مطالب خواندنی'" class="mt-8"></Title>
    <Contents class="flex gap-y-2 gap-x-2 justify-center"></Contents>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Card from '@/components/Card.vue';
import Contents from '@/components/Contents.vue';
import HeadSlid from '@/components/HeadSlid.vue';
import lateral from '@/components/lateral.vue';
import SliderCard from '@/components/SliderCard.vue';
import Title from '@/components/Title.vue';
export default {
  data() {
        return {
            shops:[]
        }
    },
  components: {
    HeadSlid,
    Title,
    Card,
    SliderCard,
    Banner,
    lateral,
    Contents
  
  },
  mounted() {
            this.axios.get('http://127.0.0.1:8000/products').then((response) => {
                this.shops = response.data
                
                
            }).catch((error) => {
                console.log(error);
                
            })
        },
    
  }
</script>

