<template>
    <div class="  lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-10 pt-10">
        <div class="lg:grid lg:grid-cols-4 ">
            <div class="block lg:hidden ">
                <Profile2 class=""></Profile2>
            </div>
            <div class="col-span-1 hidden lg:block">
                <div class=" xl-w-[328px]  rounded-box h-fit p-2 bg-neutral  ">

                    <Profile class=""></Profile>

                </div>
            </div>
            <div class="lg:col-span-3 lg:px-8 space-y-6  max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto">
                <div class=" bg-neutral rounded-box p-4 ">
                    <h1 class="font-bold text-xl border-b-3 w-fit h-10 rounded-box border-b-primary">پیشخوان</h1>
                    <Titledash :titles="'حساب کاربری'"></Titledash>

                    <div class="mt-5 flex flex-wrap justify-center gap-x-3 xl:space-x-2 xl:gap-x-0 md:justify-between text-white">
                        <div class="w-[290px] h-[100px] md:w-[330px] mt-3 xl:w-[210px] md:h-[60px] 
                        bg-blue-500 rounded-box flex p-2 space-x-4 items-center ">
                            <span class="bg-blue-600 p-1 rounded-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                            </span>
                            <span class="text-md ">تکمیل مشخصات</span>
                        </div>
                        <div class="w-[290px] h-[100px] md:w-[330px] mt-3 xl:w-[210px] md:h-[60px] bg-red-500  rounded-box flex p-2 space-x-4 items-center ">
                            <span class="bg-red-300 p-1 rounded-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                            </span>
                            <span class="text-md ">تکمیل مشخصات</span>
                        </div>
                        <div class="w-[290px] h-[100px] md:w-[330px] mt-3 xl:w-[210px] md:h-[60px] bg-rose-500 rounded-box flex p-2 space-x-4 items-center ">
                            <span class="bg-rose-400 p-1 rounded-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                            </span>
                            <span class="text-md ">تکمیل مشخصات</span>
                        </div>
                        <div class="w-[290px] h-[100px] md:w-[330px] mt-3 xl:w-[210px] md:h-[60px] bg-green-400 rounded-box flex p-2 space-x-4 items-center ">
                            <span class="bg-green-500 p-1 rounded-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                            </span>
                            <span class="text-md ">تکمیل مشخصات</span>
                        </div>
                    </div>






                    <Titledash :titles="'وضعیت سفارش های شما'"></Titledash>
                    <div class="mt-5 flex flex-wrap justify-center gap-x-3 xl:gap-x-0 md:justify-between text-white">
                        <div class="w-[290px] h-[100px] md:w-[330px] mt-3 xl:w-[200px] md:h-[60px] bg-blue-500 rounded-box flex p-2 space-x-4 items-center ">
                            <span class="bg-blue-600 p-1 rounded-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                            </span>
                            <div class="flex flex-col gap-x-2">
                                <span class="text-md "> 0 سفارش</span>
                            <span class="text-md ">فعلی</span>
                            </div>
                        </div>
                        <div class="w-[290px] h-[100px] md:w-[330px] mt-3 xl:w-[210px] md:h-[60px] bg-red-500 rounded-box flex p-2 space-x-4 items-center ">
                            <span class="bg-red-300 p-1 rounded-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                            </span>
                            <div class="flex flex-col gap-x-2">
                                <span class="text-md "> 0 سفارش</span>
                            <span class="text-md ">فعلی</span>
                            </div>
                        </div>
                        <div class="w-[290px] h-[100px] md:w-[330px] mt-3 xl:w-[210px] md:h-[60px] bg-rose-500 rounded-box flex p-2 space-x-4 items-center ">
                            <span class="bg-rose-400 p-1 rounded-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                            </span>
                            <div class="flex flex-col gap-x-2">
                                <span class="text-md "> 0 سفارش</span>
                            <span class="text-md ">فعلی</span>
                            </div>
                        </div>
                        <div class="w-[290px] h-[100px] md:w-[330px] mt-3 xl:w-[210px] md:h-[60px] bg-green-500 rounded-box flex p-2 space-x-4 items-center ">
                            <span class="bg-green-600 p-1 rounded-box">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                            </span>
                            <div class="flex flex-col gap-x-2">
                                <span class="text-md "> 0 سفارش</span>
                            <span class="text-md ">فعلی</span>
                            </div>
                        </div>
                    </div>
                    
                    <Titledash :titles="'سفارشات فعلی'"></Titledash>
                    <div>
                        <Sefareshat></Sefareshat>
                    </div>

                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Profile from '@/components/Profile.vue';
import Profile2 from '@/components/Profile2.vue';
import Sefareshat from '@/components/Sefareshat.vue';
import Titledash from '@/components/Titledash.vue';


export default {
    components: {
        Titledash,
        Sefareshat,
        Profile,
        Profile2
    }

        
    }
</script>

<style lang="scss" scoped>

</style>