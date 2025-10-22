<template>
    <div class="flex flex-wrap">
        <Card :shop="shop"></Card>     
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    components: {
       Card     
        },
        props:['shop']
    }
</script>

<style lang="scss" scoped>

</style>