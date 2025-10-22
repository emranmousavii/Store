<template>
    <div>
        <div class="flex mt-15 items-center gap-x-8">
                        <p class="w-2 h-2 rounded-box bg-primary"></p>
                        <h3 class="text-lg">{{ titles }}</h3>

                    </div>
    </div>
</template>

<script>
export default {
        props:['titles']
        
    }
</script>

<style lang="scss" scoped>

</style>