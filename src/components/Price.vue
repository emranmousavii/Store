<template>
    <div>
        <div class="flex flex-col items-center gap-6 p-6">
    <!-- نمایش قیمت انتخابی -->
    <div class="text-lg font-bold">
      از {{ minValue.toLocaleString() }} تا {{ maxValue.toLocaleString() }} تومان
    </div>

    <!-- رنج دوبل -->
    <div class="relative w-72">
      <!-- اسلایدر مین -->
      <input
        type="range"
        v-model="minValue"
        :min="min"
        :max="max"
        :step="step"
        class="absolute pointer-events-none w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto
         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
         [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:cursor-pointer"
      />

      <!-- اسلایدر مکس -->
      <input
        type="range"
        v-model="maxValue"
        :min="min"
        :max="max"
        :step="step"
        class="absolute pointer-events-none w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:cursor-pointer"
      />

      <!-- خط پس‌زمینه -->
      <div class="h-1 bg-gray-300 rounded"></div>

      <!-- خط فعال بین دو دسته -->
      <div
        class="h-1 bg-green-500 rounded absolute top-1/2 transform -translate-y-1/2"
        :style="{ left: minPercent + '%', right: (100 - maxPercent) + '%' }"
      ></div>
    </div>
  </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                min: 0,
      max: 100000000,     // ۱۰۰ میلیون
      step: 1000000,      // هر بار یک میلیون
      minValue: 10000000, // مقدار اولیه حداقل (۱۰ میلیون)
      maxValue: 90000000  // مقدار اولیه حداکثر (۹۰ میلیون)
            }
    },
    computed: {
    // درصد برای موقعیت خط سبز
    minPercent() {
      return (this.minValue / this.max) * 100
    },
    maxPercent() {
      return (this.maxValue / this.max) * 100
    }
  },
  watch: {
    // جلوگیری از تداخل (حداقل از حداکثر جلو نزنه)
    minValue(val) {
      if (val > this.maxValue - this.step) {
        this.minValue = this.maxValue - this.step
      }
    },
    maxValue(val) {
      if (val < this.minValue + this.step) {
        this.maxValue = this.minValue + this.step
      }
    }
  }
    }
</script>

<style lang="scss" scoped>

</style>