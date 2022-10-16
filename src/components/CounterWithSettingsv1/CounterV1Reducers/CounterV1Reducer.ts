const INCREMENT_COUNTER = "INCREMENT-COUNTER"
const RESET_COUNTER = "RESET-COUNTER"
const SET_START_VALUE = "SET-START-VALUE"

export const counterV1Reducer = (state: number, action: ActionsType) => {
    switch (action.type){
        case INCREMENT_COUNTER:
            return state + 1
        case RESET_COUNTER:
            return 0
        case SET_START_VALUE:
            return action.payload.startValue
        default:
            return state
    }
}

type ActionsType = incrementCounterACType | resetCounterACType | setStartValueACType

type incrementCounterACType = ReturnType<typeof incrementCounterAC>
export const incrementCounterAC = () => {
    return {
        type: INCREMENT_COUNTER
    } as const

}

type resetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = () => {
    return {
        type: RESET_COUNTER
    } as const
}

type setStartValueACType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (startValue: number) => {
    return {
        type: SET_START_VALUE,
        payload: {
            startValue
        }
    } as const
}
