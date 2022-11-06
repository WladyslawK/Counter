import React from 'react';

const INCREMENT_COUNTER = "INCREMENT-COUNTER"
const RESET_COUNTER = "RESET-COUNTER"
const SET_START_VALUE = "SET-START-VALUE"
const SET_MAX_VALUE = "SET-MAX-VALUE"

type StateType = {
    counterV1: number
    startValue: number
    maxValue: number
}

const initialStartValue = Number(localStorage.getItem("startValue"))
const initialMaxValue = Number(localStorage.getItem("maxValue"))

const initialState: StateType = {
    counterV1: initialStartValue,
    maxValue: initialMaxValue,
    startValue: initialStartValue
}

export const counterReducerV1 = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, counterV1: state.counterV1 + 1}
        case RESET_COUNTER:
            return {...state, counterV1: state.startValue}
        case SET_START_VALUE:
            return {...state, startValue: action.payload.startValue}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.payload.maxValue}
        default:
            return state
    }
};

type ActionsType = ReturnType<typeof incrementCounter>
    | ReturnType<typeof resetCounter>
    | ReturnType<typeof setStartValue>
    | ReturnType<typeof setMaxValue>

export const incrementCounter = () => ({type: INCREMENT_COUNTER} as const)

export const resetCounter = () => ({type: RESET_COUNTER} as const)

export const setStartValue = (startValue: number) => ({
    type: SET_START_VALUE,
    payload: {
        startValue
    }
} as const)

export const setMaxValue = (maxValue: number) => ({
    type: SET_MAX_VALUE,
    payload: {maxValue}
} as const)