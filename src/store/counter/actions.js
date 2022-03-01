import getRandomInt from "@/helpers/getRandomInt"

export const incrementRandomInt = async ( { commit } ) => {
    commit('setLoading', true)
    const randomInt = await getRandomInt()

    //Las acciones nunca saltan al state ... lo cambian haciendo commit mutations
    /**El contexto tiene información sobre el contexto del store o del módulo en el que nos encontramos */
    commit('incrementBy', randomInt)
    commit('setLoading', false)
}