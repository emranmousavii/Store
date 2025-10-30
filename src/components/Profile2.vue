<template>
    <div class="flex justify-center  mb-4 relative w-full">
        <div class="bg-neutral h-60 px-8 w-full rounded-box flex flex-col justify-center items-center max-w-screen-sm md:max-w-screen-md mx-auto">

            <div class="relative  ">
                <div class="absolute z-40 w-8 h-8 bg-primary  rounded-full flex justify-center items-center   ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
                 class=" size-6  ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

            </div>
                <div class="avatar">
  <div class="w-20 rounded-full ">
    <img class="rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
  
</div>
            </div>
            <div>
                <div class="flex flex-col justify-center items-center gap-y-1 ">
        <span class="text-md">emran mousavi</span>
        <span class="text-sm text-zinc-600 ">0900000000</span>
   
</div>
<div @click="doclick()" class="flex justify-center gap-x-2 items-center w-40 h-10 bg-primary mt-2 rounded-box">
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    </div>
    <div>
        <span>منوی پنل کاربری</span>
    </div>
</div>
            </div>
           
        </div>
        <div  v-if="focus" :class="['absolute w-full  h-screen z-50',]">
            <div class="flex justify-between p-2 items-center border-b border-zinc-700 pb-5  lg:hidden bg-neutral">
            <span>منوی پنل کاربری</span>
            <span @click="doexit()" class="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            </span>
        </div>
                <Table ></Table>
            </div>

    </div>
</template>

<script>
import Table from './Table.vue';

export default {
    data() {
        return {
            focus: false,
        }
    },
    components: {
            Table
    },
        methods: {
            doclick() {
                this.focus= true
            },
            doexit() {
                this.focus=false
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>