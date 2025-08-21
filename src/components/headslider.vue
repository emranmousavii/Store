<template>
    <div>
        <div class="grid grid-cols-3  ">
            <div class="col-span-3 flex justify-center lg:col-span-2">
                <Slider :images="images"></Slider>
            </div>
            <div class="col-span-3 lg:col-span-1 flex mt-2  lg:mt-0 p-0 gap-x-3  lg:flex-col gap-y-3 lg:pr-3 ">
                <div>
                    <img src="/public/main-banner-top.jpg" class="rounded-box" alt="">
                </div>
                <div>
                    <img src="/public/main-bot.gif" class="rounded-box" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from './Slider.vue';
export default {
    components: {
            Slider
        },
        props:['images']
    }
</script>

<style lang="scss" scoped>

</style>