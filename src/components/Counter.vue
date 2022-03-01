<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <!--Funciona igual que el $store.state.count pero de forma más sencilla-->
</template>

<script>
import { mapState } from 'vuex'
/**Con mapState puedo mapear el estado */

export default {

    /**Los componentes pueden tener sus estados independientes, 
     * no todo tiene que estar dentro del state global
     */
    computed: {
        countComputed() {
             return this.$store.state.count
        },
        ...mapState({
            count: state => state.count
        })
    }
}
</script>

<style>

</style>