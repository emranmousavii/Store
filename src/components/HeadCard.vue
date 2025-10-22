<template>
    <div  class="mx-2 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl sm:mx-auto">
        <div class="lg:grid lg:grid-cols-3  bg-zinc-900  rounded-box">
            <div class="col-span-1 mb-6">
                <div class="flex  gap-x-4  p-6">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

                </span>
            </div>
            <img :src="'http://127.0.0.1:8000' + stores.main_image" alt="" class="hidden lg:block" >
            <div class="block lg:hidden">
                <Slider :images="stores.additional_images" class=""></Slider>

            </div>

            <div class="hidden lg:block">
                <div class="flex gap-x-4 justify-around pr-5">
                    <div  v-for="image in stores.additional_images">
                    <img :src="'http://127.0.0.1:8000' +image" class="w-[90px] border border-zinc-600 rounded-box"@click="openLightbox(image)" alt="">


                </div>
                <div class="w-[90px] border border-zinc-600 rounded-box flex justify-center items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

                    </div>
                    <div>
                        <div v-if="lightboxImage" class="fixed inset-0  ">

                            <div class="max-w-screen-lg mx-auto h-[500px] bg-zinc-700 rounded-box relative flex justify-center">
                                <button @click="lightboxImage = null" class="absolute top-2 right-2 text-black text-xl font-bold">&times;</button>

                                <img :src="'http://127.0.0.1:8000' + lightboxImage" alt="">
   
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            <div class="col-span-1 p-8  flex flex-col mb-3 lg:mb-6 border-b-2 border-black lg:border-none mx-5 lg:mx-0 ">
                <div class="basis-1/3">
                    <span class="text-xl font-bold ">{{ stores.name }}</span>

                </div>
                <div class="basis-1/3">
                    <span class="text-zinc-400  text-sm hidden lg:block">New Balance Men's Walking Shoes Model Mdrftlm2</span>

                </div>
                <div class="basis-1/3">
                    <div class="gap-x-10 flex ">
                    <span class="text-primary">{{ stores.code }}</span>
                    <span class="text-primary">{{ stores.stock }}</span>
                </div>
                

                </div>
                <div class="basis-1/3">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ml-2 text-primary inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>

                    </span>
                    <span class="text-zinc-400 text-sm ">80% از خریداران، خرید این کالا را پیشنهاد کرده‌اند</span>
                </div>
                <div class="basis-1/3  hidden lg:block">
                    <p class="text-lg font-bold ">ویژگی های محصول</p>

                </div>
                <div class="basis-1/3 hidden lg:block">
                    <span><span class="text-zinc-400">جنس :</span> {{ stores.material_upper }} </span>
                </div>
                <div class="basis-1/3 hidden lg:block">
                    <span><span class="text-zinc-400">جنس زیره :</span> {{ stores.material_outsole }} </span>

                    

                </div>
                <div class="basis-1/2"></div>
            </div>
            <div class="col-span-1 mt-8 lg:mt-20 mb-6 mx-5 lg:mx-0">
                <p class="text-lg font-bold">انتخاب رنگ</p>
                <div class="flex flex-wrap gap-y-5 gap-x-6 mt-6">
                    <div v-for="color in stores.colors" class="">
                        <span class="border-2 p-2 border-zinc-600 rounded-3xl  hover:border-primary"><span class=" border px-3 rounded-full ml-2 border-zinc-600"
                            :style="{backgroundColor:colorMap[color]}"></span>  {{ color }}  </span>
                    </div>
                </div>
                <p class="text-lg font-bold mt-6">انتخاب سایز</p>

<div class="flex flex-wrap gap-x-4 gap-y-8 mt-6 ">
    <div cl v-for="size in stores.sizes">
        <span class="p-3 border-2 rounded-full border-zinc-600 hover:border-primary ">{{ size }}</span>

    </div>
</div>
<div class="pl-4">
    <p class="mt-20 w-full bg-primary/15 text-primary p-4  text-sm rounded-box">
    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
</span>
    تضمین سلامت فیزیکی و اصالت کالا

    
</p>
</div>
<div class="flex justify-between mt-6 pl-4">
    <div class="flex  gap-x-4 border border-zinc-600 w-40 lg:w-30 h-12 rounded-box items-center justify-around mb-5 lg:mb-0">
        <button class=" font-bold text-red-600 cursor-pointer" @click="back()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>
        </button>
        <span>{{ amount }}</span>
        <button class="text-primary cursor-pointer" @click="front()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

        </button>
    </div>
    <span class="text-primary font-bold hidden lg:block">{{ stores.discount_price }} <span class="font-medium ">تومان</span></span>
</div>
<div class="pl-4 mt-10 w-full">
<button class="btn btn-primary text-white w-full  hidden lg:block">افزودن به سبد خرید</button>
</div>
            </div>


        </div>
        <div class="mt-20 max-w-screen-xl mx-auto">
            <p class="text-xl font-bold ">کالا های مرتبط</p>
        </div>
        <div class="max-w-screen-xl mx-auto bg-zinc-900 h-auto mt-10 rounded-box">
            <div class="mx-5 flex p-2 text-md opacity-90 font-bold gap-x-5 border-b border-zinc-600">
                <span>معرفی</span>
                <span>مشخصات</span>
                <span>دیدگاه</span>
            </div>
            <div class="mx-5 mt-10">
                <span class="text-xl  font-bold border-b-3 p-2  w-fit border-primary ">معرفی</span>
                <p class="mt-15 text-md">
                   
                    چه در حال تمرین و چه در زندگی روزمره، این کفش‌های اورجبنال نیوبالانس طوری طراحی شده‌اند که در هر نوع حرکت با شما همراه باشند. جزئیات متمرکز بر عملکرد مانند زیره میانی DynaSoft و زیره لاستیکی بادوام به این کفش وزن سبک و واکنش پذیری بالایی می بخشد که performance ورزشی شما را افزایش می دهد. ترکیب رنگی این کفش جذابیت و شادابی دو چندانی را به استایل اسپورت شما می بخشد.
                    <br>
                    <br>

لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                </p>
            </div>
            <div class="mt-25 flex justify-center">
                <img :src="'http://127.0.0.1:8000' + stores.main_image" alt="" >

            </div>
            <p class="text-xl  font-bold border-b-3 p-2  w-fit border-primary mx-5 mt-10 ">دیدگاه</p>
            <div class="mx-5 mt-10  md:flex">
                <div class="md:flex-1 ">
                    <div>
                        <p class="text-xl  font-bold p-2  w-fit  md:mx-5 mt-10 ">ثبت دیدگاه</p>
                        
                        <div class="relative w-full mt-8">
  <input
    id="comment-title"
    type="text"
    v-model="Message"
    @focus="isFocused = true"
    @blur="isFocused = false"
    placeholder=" "
    class="peer w-full rounded-box placeholder-transparent border border-zinc-600 focus:outline-none h-12 px-3"
  />

  <label
    for="comment-title"
    :class="['absolute right-3 text-base text-zinc-400 transition-all duration-200 bg-zinc-900 px-1',
        (Message !== '' || isFocused) ? '-top-3 text-sm text-zinc-300' : 'top-3 text-base text-zinc-400']">
    عنوان دیدگاه
  </label>
</div>


<p class="text-zinc-400 mt-4 lg:text-md md:text-sm">این محصول را به دیگران پیشنهاد</p>
<div class="flex  gap-x-1 lg:gap-x-2 xl:gap-x-10 mt-4 w-full justify-between md:text-md">
    <span class="p-2 basis-1/2 border border-zinc-600 rounded-box text-primary h-12" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 md:size-5 lg:size-6 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>

        میکنم


    </span>
    <span class="flex md:justify-center pr-1  items-center border border-zinc-600 rounded-box text-red-600 basis-1/2 text-md h-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 md:size-5 lg:size-6 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
</svg>


        نمی کنم


    </span>
</div>

<div class="relative w-full mt-8">
  <textarea
    id="comment-text"
    placeholder=" "
    v-model="Comment"
    rows="5"
    @focus="isFocuseds = true"
    @blur="isFocuseds = false"
    class="peer w-full rounded-xl placeholder-transparent border border-zinc-600 focus:outline-none p-3"
  ></textarea>

  <label
    for="comment-text"
    :class="['absolute right-3 text-base text-zinc-400 transition-all duration-200 bg-zinc-900 px-1',
              (Comment !== '' || isFocuseds) ? '-top-3 text-sm text-zinc-300' : 'top-3 text-base text-zinc-400'

    ]">
    متن دیدگاه
  </label>
</div>

<button class="btn btn-primary text-white w-full md:w-30 mb-5 mt-5"  @click="domessage()">ارسال دیدگاه</button>


                    </div>
                </div>
                <div class="md:flex-3 p-4 pt-25" >
                    <div v-for="(fb, index) in feedbacks"  class="border-b border-zinc-600 py-4">
                        <div class="flex justify-between">
                            <h1 class="font-bold">{{ fb.title }}</h1>
        
                            <span @click="openbox()" class="text-blue-400 cursor-pointer">پاسخ ></span>
                        </div>
    <p class="mt-2 opacity-80">{{ fb.text }}</p>
  </div>
                    <div v-if="box" class="bg-zinc-700 w-[600px] h-[300px] max-w-screen-lg mx-auto  rounded-box  relative ">
                       <div class="border-b flex border-zinc-600 p-3 py-4  justify-between">
                        <span>ثبت پاسخ </span>
                        <span @click="box=false" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</span>
                       </div>

                    </div>
    
                </div>

            </div>
        </div>
                
    </div>
    <div class="block lg:hidden bg-zinc-900 w-full py-10 fixed bottom-0 left-0  p-4 z-50 ">
        <div class="">
            <div class=" mx-5 flex">
            <div class="basis-5/6 ">
                <button class="btn btn-primary  text-white   w-full   ">افزودن به سبد خرید</button>

            </div>
            <div class="basis-1/6 flex justify-center ">
                <span class="text-primary font-bold ">{{ stores.discount_price }} <span class="font-medium ">تومان</span></span>

            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Slider from './Slider.vue'

export default {
    components: {
        Slider        
    },
    data() {
        return {
            Message: '',
                box:false,
                isFocused: false,
                isFocuseds: false,
            Comment:'',
                lightboxImage: null,
                feedbacks:[],
             amount:'1',
            store: {},
            stores: [],
            colorMap: {
        "قرمز": "#ff0000",
        "آبی": "#0000ff",
        "مشکی": "#000000",
        "سفید": "#ffffff",
        "سبز": "#00ff00",
        "زرد": "#ffff00",
        "نقره‌ای": "#c0c0c0",
        "طلایی": "#ffd700",
        "بنفش": "#800080",
        "صورتی": "#ffc0cb",
        "قهوه‌ای": "#8b4513",
        "خاکستری": "#808080"
      }
        }
    },
    methods: {
        front() {
            this.amount++
        },
        back() {
            if (this.amount>1) {
                this.amount--

            }
        },
        openLightbox(image) {
            this.lightboxImage=image
        },
        domessage() {

            if (this.Message || this.Comment) {
                this.feedbacks.push({
                    title: this.Message,
                    text: this.Comment
                })
            }
                this.Message=''
                this.Comment=''
        },
        openbox() {
        this.box=true
    }
    },
        props:['stores','colors']
        
    }
</script>

<style lang="scss" scoped>

</style>





<!-- <template>
    <div class="max-w-screen-xl mx-auto">
        <div class="grid grid-cols-3  bg-zinc-900  rounded-box">
            <div class="col-span-1">
            <div class="flex  gap-x-4  p-6">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

                </span>
            </div>
                <img :src="'http://127.0.0.1:8000' + store.main_image" alt="" >
                <div class="flex gap-x-4 justify-around">
                    <div  v-for="image in store.additional_images">
                    <img :src="'http://127.0.0.1:8000' +image" class="w-[90px] border border-zinc-600 rounded-box"@click="openLightbox(image)" alt="">


                </div>
                <div class="w-[90px] border border-zinc-600 rounded-box flex justify-center items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

                    </div>
                    <div>
                        <div v-if="lightboxImage" class="fixed inset-0  ">

                            <div class="max-w-screen-lg mx-auto h-[500px] bg-zinc-700 rounded-box relative flex justify-center">
                                <button @click="lightboxImage = null" class="absolute top-2 right-2 text-black text-xl font-bold">&times;</button>

                                <img :src="'http://127.0.0.1:8000' + lightboxImage" alt="">
   
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-span-1 p-8 flex flex-col ">
                <div class="basis-1/3">
                    <span class="text-xl font-bold ">{{ store.name }}</span>

                </div>
                <div class="basis-1/3">
                    <span class="text-zinc-400  text-sm">New Balance Men's Walking Shoes Model Mdrftlm2</span>

                </div>
                <div class="basis-1/3">
                    <div class="gap-x-10 flex ">
                    <span class="text-primary">{{ store.code }}</span>
                    <span class="text-primary">{{ store.stock }}</span>
                </div>
                

                </div>
                <div class="basis-1/3">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ml-2 text-primary inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>

                    </span>
                    <span class="text-zinc-400 text-sm">80% از خریداران، خرید این کالا را پیشنهاد کرده‌اند</span>
                </div>
                <div class="basis-1/3">
                    <p class="text-lg font-bold ">ویژگی های محصول</p>

                </div>
                <div class="basis-1/3">
                    <span><span class="text-zinc-400">جنس :</span> {{ store.material_upper }} </span>
                </div>
                <div class="basis-1/3">
                    <span><span class="text-zinc-400">جنس زیره :</span> {{ store.material_outsole }} </span>

                    

                </div>
                <div class="basis-1/2"></div>
            </div>
            <div class="col-span-1 mt-20">
                <p class="text-lg font-bold">انتخاب رنگ</p>

                <div class="flex flex-wrap gap-x-6 mt-6">
                    <div v-for="color in store.colors" class="">
                        <span class="border-2 p-2 border-zinc-600 rounded-3xl  hover:border-primary"><span class=" border px-3 rounded-full ml-2 border-zinc-600"
                            :style="{backgroundColor:colorMap[color]}"></span>  {{ color }}  </span>
                    </div>
                </div>
                <p class="text-lg font-bold mt-6">انتخاب سایز</p>

                <div class="flex flex-wrap gap-x-4 mt-6 ">
                    <div v-for="size in store.sizes">
                        <span class="p-3 border-2 rounded-full border-zinc-600 hover:border-primary">{{ size }}</span>

                    </div>
                </div>
                <div class="pl-4">
                    <p class="mt-20 w-full bg-primary/15 text-primary p-4  text-sm rounded-box">
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
</span>
                    تضمین سلامت فیزیکی و اصالت کالا

                    
                </p>
                </div>
                <div class="flex justify-between mt-6 pl-4">
                    <div class="flex  gap-x-4 border border-zinc-600 w-30 h-12 rounded-box items-center justify-around">
                        <button class=" font-bold text-red-600 cursor-pointer" @click="back()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>
                        </button>
                        <span>{{ amount }}</span>
                        <button class="text-primary cursor-pointer" @click="front()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                        </button>
                    </div>
                    <span class="text-primary font-bold">{{ store.discount_price }} <span class="font-medium ">تومان</span></span>
                </div>
                <div class="pl-4 mt-10 w-full">
                <button class="btn btn-primary text-white w-full py-5">افزودن به سبد خرید</button>
            </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {

    props:['store']
        
    }
</script>

<style lang="scss" scoped>

</style> -->