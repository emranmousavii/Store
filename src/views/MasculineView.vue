<template>
    <div class="mx-12 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl sm:mx-auto my-10 pt-10">
        <div class="md:grid md:grid-cols-6   lg:grid-cols-4 sm:flex justify-between">
            <div class="md:col-span-2  lg:col-span-1  h-fit md:h-full md:w-full ">

                    <div class="xl:w-[328px]  sm:w-75 md:w-fit rounded-box h-12 mb-5  items-center 
                 justify-between   md:items-start md:flex-col md:h-fit p-2 bg-neutral ">
                    <div class=" md:flex md:justify-between   p-2">
                        <span class="text-md md:text-xl ">فیلتر ها</span>
                        <span class="text-primary hidden md:block">حذف همه</span>
                    </div>
                    <div class="hidden md:block">
                        <div class="mx-5">
                        <input type="text" placeholder="جستجو در بین نتایج..." class="bg-accent w-full mt-5 pr-2 rounded-box h-12">
                    </div>
                    <div class="mt-5 mx-2">
                        <span class="text-md  ">محدودیت قیمت</span>
                        <!-- <Price></Price> -->

  <div class="mt-5">
    <div tabindex="0" class="collapse collapse-arrow  border-base-300 border">
  <div class="collapse-title font-semibold">دسته بندی ها</div>
  <div class="collapse-content text-md flex  flex-col gap-y-4">
    <span>    دسته بندی 1
    </span>
    <span>    دسته بندی 1
    </span>
    <span>    دسته بندی 1
    </span>
  </div>
</div>
    <div tabindex="0" class="collapse collapse-arrow  border-base-300 border">
  <div class="collapse-title font-semibold ">دسته بندی ها</div>
  <div class="collapse-content text-md flex  flex-col gap-y-4">
    <span>    دسته بندی 1
    </span>
    <span>    دسته بندی 1
    </span>
    <span>    دسته بندی 1
    </span>
  </div>
</div>
    <div tabindex="0" class="collapse collapse-arrow  border-base-300 border">
  <div class="collapse-title font-semibold">دسته بندی ها</div>
  <div class="collapse-content text-md flex  flex-col gap-y-4">
    <span>    دسته بندی 1
    </span>
    <span>    دسته بندی 1
    </span>
    <span>    دسته بندی 1
    </span>
  </div>
</div>
  </div>
  <div class="mt-5 space-y-4">
    <div class="flex justify-between ">
        <p class="text-sm font-bold">فقط کالا های موجود</p>
        <Btn></Btn>

  </div>
    <div class="flex justify-between ">
        <p class="text-sm font-bold">فقط محصولات ویژه</p>
        <Btn></Btn>



  </div>
  </div>
                    </div>
                    </div>

                </div>
            </div>
            <div class="md:col-span-4  lg:col-span-3 md:px-8  sm:w-fit space-y-6  md:overflow-y-scroll scrollbar-hide 
            md:overflow-x-hidden h-fit md:h-[800px]">
                <div class="bg-neutral p-3 rounded-box  sm:w-75 md:w-full xl:w-full  flex items-center gap-x-4 lg:gap-x-10">
                    <div class="lg:textarea-lg text-sm">  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" class="size-6 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>
مرتب بر اساس  

                    </div>
                 <div class="hidden md:block">
                    <div class=" rounded-box flex items-center gap-x-4 lg:gap-x-10  ">
                    <div class="lg:textarea-lg text-sm">جدید ترین</div>
                    <div class="lg:textarea-lg text-sm">پرفروش ترین</div>
                    <div class="lg:textarea-lg text-sm">گران ترین</div>
                    <div class="lg:textarea-lg text-sm">ارزان ترین</div>
                  </div>
                 </div>
                </div>
                <div class="hidden md:block">
                    <div class=" flex flex-wrap sm:justify-around md:justify-between  gap-x-2 gap-y-4  ">
      <Card v-for="shop in shops" :shop="shop" class="" ></Card>


    </div>
                </div>
            </div>
            
     
            
        </div>
       <div class="block md:hidden">
        <div class=" flex flex-wrap   md:justify-between  gap-x-15 justify-center sm:justify-start gap-y-4    ">
      <Card v-for="shop in shops" :shop="shop" class="" ></Card>


    </div>
       </div>

    </div>
</template>

<script>
import Btn from '@/components/Btn.vue';
import Card from '@/components/Card.vue';
import Price from '@/components/Price.vue';

export default {
    components: {
    Card,
    Btn,
        Price
    },
    data() {
        return {
           
            shops: [],
     
        }
    },
    mounted() {
            this.axios.get('http://127.0.0.1:8000/products').then((response) => {
                // this.shops = response.data
                for (let i = 0; i < 12; i++) {
                    this.shops.push(response.data[i])                    
                }
                
                
            }).catch((error) => {
                console.log(error);
                
            })
    },


        
    }
</script>

<style lang="scss" scoped>

</style>