<template>
    <div class="p-2 xl:p-5   ">
        <div class=" border-b border-zinc-700 ">
            <div class="mb-5 flex items-center justify-between">
                <div class="flex items-center gap-x-6">
                <div class=" ">
  <div class="w-12 rounded-full ">
    <img class="rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
  
</div>
    <div class="flex flex-col gap-y-2 ">
        <span class="text-md">emran mousavi</span>
        <span class="text-sm text-zinc-600 ">0900000000</span>
   
</div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-primary size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

            </div>
            </div>
        </div>
<div>

<Table></Table>

</div>
    </div>
</template>

<script>
import Table from './Table.vue';

export default {
    components: {
            Table
        }
        
    }
</script>

<style lang="scss" scoped>

</style>