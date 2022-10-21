const INCREMENT_COUNTER = "INCREMENT-COUNTER"
const RESET_COUNTER = "RESET-COUNTER"

type initialStateType = {
    counter: number
}

const initialState: initialStateType = {
    counter: 0
}

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type){
        case INCREMENT_COUNTER:
            return {...state, counter: action.payload.counterValue}
        case RESET_COUNTER:
            return {...state, counter: action.payload.counterValue}
        default:
            return state
    }
}

type ActionsType = incrementCounterACType | resetCounterACType

type incrementCounterACType = ReturnType<typeof incrementCounterAC>
export const incrementCounterAC = (counterValue: number) => {
    return{
        type: INCREMENT_COUNTER,
        payload: {
            counterValue
        }
    } as const
}

type resetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = () => {
    return {
        type: RESET_COUNTER,
        payload: {
            counterValue: 0
        }
    } as const
}