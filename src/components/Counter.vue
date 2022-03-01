<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
</template>

<script>
export default {

    /**Los componentes pueden tener sus estados independientes, 
     * no todo tiene que estar dentro del state global
     */
    computed: {
        countComputed() {
            return this.$store.state.count
        }
    }
}
</script>

<style>

</style>