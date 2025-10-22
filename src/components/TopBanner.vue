<template>
   <div class="flex md:flex-row lg:flex-col lg:p-2 mt-2  xl:px-2 space-x-2 space-y-4 md:mt-2  md:space-x-2 lg:space-x-0 ">
        <div v-for="image in images"  >
            <img :src="image" alt="" class="rounded-box">
        </div>
    </div>
</template>

<script>
    export default {
        props:['images']
    }
</script>