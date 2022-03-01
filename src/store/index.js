import { createStore } from 'vuex'
import counterStore from './counter' //No es necesario poner index.js porque al llamarse así lo está cogiendo


/**Creo mi store de Vuex con un contador */
export default createStore({

    modules: {
        counter: counterStore
    }


})