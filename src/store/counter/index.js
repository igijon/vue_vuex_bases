
import getRandomInt from "@/helpers/getRandomInt";
import state from './state'
import * as mutations from './mutations'

const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions: {
        //Estas sí pueden ser asíncronas
        //Se pueden usar para comprobar cosas contra un backend...
        //Las acciones son despachadas y las mutaciones son commiteadas
        async incrementRandomInt( { commit } ){
            commit('setLoading', true)
            const randomInt = await getRandomInt()

            //Las acciones nunca saltan al state ... lo cambian haciendo commit mutations
            /**El contexto tiene información sobre el contexto del store o del módulo en el que nos encontramos */
            commit('incrementBy', randomInt)
            commit('setLoading', false)
        }
    },
    getters: {
        /**Pueden ser llamados en cualquier parte de la aplicación.
         * Son parecidos a las propiedades computadas
         */
        squareCount( state ) {
            //En las herramientas de vue de Chrome aparecen los getters cuando el state cambia
            return state.count * state.count
        }
    }
}

export default counterStore