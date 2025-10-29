<template>
    <div class="">

        <div class="w-full  bg-neutral text-white p-4">

<div class="mt-5 mx-2">
  <span class="text-md">محدودیت قیمت</span>
  <price></price>

  <div class="mt-5 text-success ">
    <div tabindex="0" class="collapse collapse-arrow border-base-300 border">
      <div class="collapse-title font-semibold bg-neutral w-full ">دسته بندی ها</div>
      <div class="collapse-content text-md flex flex-col gap-y-4 bg-neutral w-full ">
        <span>دسته بندی 1</span>
        <span>دسته بندی 2</span>
        <span>دسته بندی 3</span>
      </div>
    </div>

    <div tabindex="0" class="collapse collapse-arrow border-base-300 border">
      <div class="collapse-title font-semibold bg-neutral">دسته بندی ها</div>
      <div class="collapse-content text-md flex flex-col gap-y-4 bg-neutral">
        <span>دسته بندی 1</span>
        <span>دسته بندی 2</span>
        <span>دسته بندی 3</span>
      </div>
    </div>

    <div tabindex="0" class="collapse collapse-arrow border-base-300 border">
      <div class="collapse-title font-semibold bg-neutral">دسته بندی ها</div>
      <div class="collapse-content text-md flex flex-col gap-y-4 bg-neutral">
        <span>دسته بندی 1</span>
        <span>دسته بندی 2</span>
        <span>دسته بندی 3</span>
      </div>
    </div>
  </div>

  <div class="mt-5 space-y-4">
    <div class="flex justify-between">
      <p class="text-sm font-bold">فقط کالا های موجود</p>
      <Btn></Btn>
    </div>

    <div class="flex justify-between">
      <p class="text-sm font-bold">فقط محصولات ویژه</p>
      <Btn></Btn>
    </div>
  </div>
</div>
</div>


    </div>
</template>

<script>
import Price from './Price.vue';

export default {
    components: {
            Price
        }
        
    }
</script>

<style lang="scss" scoped>

</style>