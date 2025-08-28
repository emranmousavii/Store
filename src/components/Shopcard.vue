<template>
  <div dir="rtl" class="p-3 hover:border-2  border-transparent hover:border-primary transition-all duration-300  h-full flex flex-col justify-between bg-zinc-800 rounded-box">
    <router-link :to="{ name: 'store', params: { id: store.id },state: { stores: store } }" class="flex justify-center items-center">
        <img :src="'http://127.0.0.1:8000' + store.main_image" class="object-cover w-[220px] h-full " alt="">
    </router-link>
    <div class="w-full  flex flex-col gap-y-3">
      <span class="line-clamp-2 h-10">{{ store.name }}</span>
      <span class="line-through text-zinc-500">{{store.price}}</span>
<div class="w-full flex justify-between">

  <span class="text-primary font-bold">{{ store.discount_price}} <span class="text-primary font-black">تومان</span></span>
  <span  class=" bg-red-500 flex justify-center items-center w-10  rounded-xl">{{store.discount_percent}}%</span>

</div>
    </div>
  </div>
</template>

<script>
    export default {
        props:['store']
    }
</script>





