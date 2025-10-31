<template>
    <div class="">
      <div dir="rtl " 
    class="p-3 hover:border-2  w-full  border-transparent text-md
     hover:border-primary transition-all
           duration-300  h-full flex  justify-between items-center bg-neutral rounded-box">
           <router-link :to="{ name: 'store', params: { id: shop.id }}">
          
              <img :src="'http://127.0.0.1:8000' + shop.main_image" class="object-cover " alt="">
          
  
           </router-link>
  
          <div class="space-y- ">
       <div class="flex flex-col ">
        <span class=" h-15 mb-3">{{ shop.name }}</span>
        <span class="line-through text-zinc-500">{{shop.price}}</span>
       </div>
  <div class="w-full  flex flex-col gap-y-4">
  
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