<template>
    <div class=" bg-neutral ">
<div class="flex  flex-wrap md:flex-nowrap md:flex-row justify-between py-2 px-2 items-center  bg-neutral sm:max-w-screen-sm 
 sm:mx-auto md:max-w-full">
    <div @click="doclick()" tabindex="0" role="button" class="btn btn-ghost btn-circle md:hidden  navbar-center pr-5 lg:hidden order-1 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <div v-if="focus" class="block md:hidden overflow-y-auto scrollbar-hide w-60 sm:w-80 fixed inset-0 z-50 bg-neutral text-success
       top-0   right-0">
        <div class="flex justify-between mt-2 items-center border-b mb-5 border-zinc-800 w-60 sm:w-80">
            <div>
                <router-link :to="{ name: 'home' }" class="navbar w-[150px] h-[56px] order-1 md:order-none">
            <img src="/public/logo.svg" class="w-full h-full" alt="">
        </router-link>
            </div>
            <div>
                <span @click="doexit()" class="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            </span>

            </div>
        </div>
        <MenuHm ></MenuHm>

      </div>
      <router-link
  :to="{ name: 'home' }"
  class="navbar w-40 sm:w-40 md:w-40 h-auto order-1 md:order-none flex-shrink-0"
>
  <img src="/public/logo.svg" class="w-full h-auto" alt="logo">
</router-link>

        <div class="relative mx-auto w-full md:w-xl order-2 md:order-none text-success">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="size-6 absolute top-3 right-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            <input type="text" placeholder="جستجو کنید..." class="bg-accent text-success w-full h-12 rounded-box pr-10">

        </div>
        <div class="flex gap-x-4 order-1 md:order-none pr-4   ">
<button class="" popovertarget="popover-1">
    <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

            </span>
</button>
<ul class="dropdown p-2 space-y-7 w-52 rounded-box bg-neutral border-t-2 border-t-primary shadow-sm "
  popover id="popover-1">
    <li class="cursor-pointer hover:text-primary">
        <router-link :to="{name:'dashboard'}">
            <div class="flex gap-x-2 items-center">
    <div>
        <div class="avatar">
  <div class="w-8 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
</div>
    </div>
    <div>emran mousavi</div>
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

    </span>
   </div>
        </router-link>

  </li>

  <li class="cursor-pointer hover:text-primary">
   <div class="flex gap-x-2  items-center">
    <div>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

        </span>
    </div>
    <span class="text-md">سفارش ها</span>
   </div>
  </li>
  <li class="cursor-pointer hover:text-primary">
   <div class="flex gap-x-2  items-center">
    <div>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>


        </span>
    </div>
    <span class="text-md">علاقه مندی ها</span>
   </div>
  </li>
  <li class="cursor-pointer hover:text-primary">
   <div class="flex gap-x-2  items-center">
    <div>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>


        </span>
    </div>
    <span class="text-md">پیام ها</span>
   </div>
  </li>
</ul>
 
            <div class="hidden md:block space-x-2 ">
              <div class="flex items-center">
                <button v-if="myTheme == 'light'" class=" btn-sm md:btn-md btn-circle" @click="changeTheme('dark')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4 md:size-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            </button>
            <button v-else class=" btn-sm md:btn-md btn-circle" @click="changeTheme('light')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4 md:size-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            </button>
              </div>


            </div>
            <div class="flex items-center ">
<div class="">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                class="size-6 inline ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</div>

            </div>

        </div>
</div>
       
    </div>
</template>

<script>
import MenuHm from './menuHm.vue';


export default {
    components: {
        MenuHm
    },
      data() {
        return {
            myTheme: 'light',
          focus:false

        }
  },
  mounted() {
        if (localStorage.theme) {
            this.myTheme = localStorage.theme
            this.changeTheme(localStorage.theme);
        }
    },

    methods: {
        changeTheme(theme) {
            this.myTheme = localStorage.theme = theme;
            document.querySelector('html').setAttribute('data-theme', theme)
        },
        doSearch() {
            this.$router.push({ name: 'search', params: { query: this.search } })
            document.querySelector("#closeSearch").click()
        },
        doclick() {
            this.focus=true
        },
        doexit() {
           this.focus=false 
        }

    }
        
    }
</script>

