<template>
    <div>
        <button
      @click="isOn = !isOn"
      :class="['relative w-12 h-6 rounded-full transition-colors duration-300',isOn ? 'bg-green-500' : 'bg-accent']"
    >
      <span
        class="absolute top-0.5 left-1 w-5 h-5 bg-zinc-900 rounded-full shadow-md transform transition-transform duration-300"
        :class="isOn ? 'translate-x-5' : ''"
      ></span>
    </button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOn: false,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>