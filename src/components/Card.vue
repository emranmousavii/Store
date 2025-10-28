<template>
  <div class="  sm:w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/5">
    <div dir="rtl" 
  class="p-3 hover:border-2  sm:w-[200px]  border-transparent
   hover:border-primary transition-all
         duration-300  h-full flex flex-col justify-between bg-neutral rounded-box">
         <router-link :to="{ name: 'store', params: { id: shop.id }}">
        
            <img :src="'http://127.0.0.1:8000' + shop.main_image" class="object-cover w-full h-full " alt="">
        

         </router-link>

        <div class="w-full  flex flex-col gap-y-3">
      <span class="line-clamp-2 h-10">{{ shop.name }}</span>
      <span class="line-through text-zinc-500">{{shop.price}}</span>
<div class="w-full flex justify-between">

  <span class="text-primary font-bold">{{ shop.discount_price}} <span class="text-primary font-black">تومان</span></span>
  <span  class=" bg-red-500 flex justify-center items-center w-10  rounded-xl">{{shop.discount_percent}}%</span>

</div>
    </div>
    </div>
  </div>

</template>

<script>
export default {
        props:['shop']
        
    }
</script>

<style lang="scss" scoped>

</style>