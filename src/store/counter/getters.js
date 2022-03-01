export const squareCount = ( state ) => {
    //En las herramientas de vue de Chrome aparecen los getters cuando el state cambia
    return state.count * state.count
}