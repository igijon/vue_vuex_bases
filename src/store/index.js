import { createStore } from 'vuex'

/**Creo mi store de Vuex con un contador */
export default createStore({

    state: {
        /**Parecido a la data, lo que tenemos dentro vamos a tener cosas reactivas */
        count: 1,
        lastMutation: 'none'
    }


})