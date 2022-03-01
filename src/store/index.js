import { createStore } from 'vuex'
import getRandomInt from "@/helpers/getRandomInt";


/**Creo mi store de Vuex con un contador */
export default createStore({

    state: {
        /**Parecido a la data, lo que tenemos dentro vamos a tener cosas reactivas */
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {
        /**Esto podemos interpretarlo como methods */
        /**Estos métodos permiten realizar cambios en el state */
        increment( state ){
            /**Recibe el state por defecto */
            state.count ++
            state.lastMutation = 'increment'
        },
        incrementBy( state, val) {
            state.count += val
            state.lastMutation = 'incrementBy ' + val
            state.lastRandomInt = val
        },
        setLoading(state, val) {
            state.isLoading = val
            state.lastMutation = 'setLoading ' + val
        }
    },
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
    }


})