<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>LastMutation: {{lastMutation}}</h2>
  <!--Funciona igual que el $store.state.count pero de forma más sencilla-->
</template>

<script>
import { mapState, mapActions } from 'vuex'
/**Con mapState puedo mapear el estado */

export default {

    /**Los componentes pueden tener sus estados independientes, 
     * no todo tiene que estar dentro del state global
     */
    computed: {
        countComputed() {
             return this.$store.state.count
        },
        ...mapState(['count', 'lastMutation'])
    },
    methods: {
      increment() {
        //Necesito leer el store y hacer un commit de la mutacón increment
        this.$store.commit('increment')
      },
      incrementBy() {
        //Si queremos mantar más de un argumento, podemos mandar un objeto que se puede desestructurar en index.js en mutations
        //Las mutaciones son síncronas
        this.$store.commit('incrementBy', 5)
      },
      incrementRandomInt() {
        this.$store.dispatch( 'incrementRandomInt' )

      },
      ...mapActions({
        //Este mapActions habilita randomInt para todos los métodos
        randomInt: 'incrementRandomInt'
      }) 
    }
}
</script>

<style>

</style>