<template>
  <div dir="ltr" class="p-4 hover:border-2  border-transparent hover:border-primary transition-all duration-300  h-full flex flex-col justify-between bg-zinc-800 rounded-box">
    <div class="flex justify-center items-center">
        <img :src="store.image" class="object-cover w-[100px] h-full " alt="">
    </div>
    <div class="w-fit  flex flex-col gap-y-2">
      <span class="line-clamp-2">{{ store.title }}</span>
      <span>{{ store.category}}</span>

      <span class="text-primary">{{ store.price }}</span>
    </div>
  </div>
</template>

<script>
    export default {
        props:['store']
    }
</script>





