<template>
    <div class="max-w-screen-xl mx-auto mt-20 mb-20">
        <HeadCard :stores="store" ></HeadCard>
    </div>
</template>

<script>
import HeadCard from '@/components/HeadCard.vue';

export default {
        data() {
            return {
                store:{},
               
            }
        },
    components: {
            HeadCard
    },
    mounted() {
        this.stores = this.$router.options.history.state.stores        

            this.axios.get(`http://127.0.0.1:8000/page?id=${this.$route.params.id}`).then((response) => {
                // console.log(response.data);
                this.store = response.data
                console.log(this.store);
                
                
            })
    },
        
    }
</script>

<style lang="scss" scoped>

</style>