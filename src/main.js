import { createApp } from 'vue'
import store from './store'

import App from './App.vue'

createApp(App)
    .use( store )    //Añado el store a mi aplicación
    .mount('#app')

    /**En las herramientas de desarrollo Vue en Chrome, podemos seleccionar
     * Vuex y ver lo que tenemos, por ahora el contador
     */
