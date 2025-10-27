<template>
   <div class="hidden md:block">
    <div class="flex gap-x-4 px-2 bg-neutral pb-3">

<div class="relative inline-block group ">
   <div class="flex cursor-pointer">
      <div class=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div> 
<div class="">دسته‌ بندی‌ ها</div> 

   </div>
    <div
      class="absolute  mt-2 w-48 bg-zinc-900 text-white rounded-md shadow-lg opacity-0  z-50
       group-hover:opacity-100 transition"
    >
      <ul class="py-2 text-white">
        <li class="px-4 py-2  cursor-pointer ">
         <router-link :to="{name:'masculine'}" >مردانه</router-link>
        </li>
        <li class="px-4 py-2 cursor-pointer">زنانه</li>
        <li class="px-4 py-2   cursor-pointer">بچگانه</li>
      </ul>
    </div>
  </div>


       <div>فروش ویژه</div> 
       <div>چرا روتی کالا</div> 
       <div>راهنمای خرید</div> 
       <div>سایر...</div> 
    </div>
   </div>
</template>

<script>
    export default {
        
    }
</script>

