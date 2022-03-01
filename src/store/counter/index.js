
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions,
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