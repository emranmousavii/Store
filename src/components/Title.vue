<template>
    <div class="flex justify-between " >
        <div class="text-xl font-bold">{{ title }}</div>
        <div>
           <span class="font-bold text-primary cursor-pointer">مشاهده همه ></span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['title']
    }
</script>

