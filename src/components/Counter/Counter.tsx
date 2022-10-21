import React, {useReducer, useState} from 'react';
import {CounterOutput} from "./counterOutput/CounterOutput";
import {CounterControlPanel} from "./counterControl/CounterControlPanel";
// @ts-ignore
import styles from "./Counter.module.css";
import {DEFAULT_VALUE_COUNTER, INCREMENT_BUTTON_NAME, RESET_BUTTON_NAME} from "../../types_&_constants/constants";
import {
    counterReducer,
    incrementCounterAC,
    initialStateType,
    resetCounterAC
} from "./Redux/counterReducer/CounterReducer";
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateType} from "./Redux/store";

export const Counter = () => {

    const [counter, counterDispatch] = useReducer(counterReducer, {counter: DEFAULT_VALUE_COUNTER})


    const incrementCallback = () => counterDispatch(incrementCounterAC(counter.counter + 1))

    const resetCallback = () => counterDispatch(resetCounterAC())
    const disableIncrementButton = () => counter.counter === 5
    const disableResetButton = () => counter.counter === 0

    // Redux

    let counterRedux = useSelector<ReduxStateType, initialStateType>(state => state.counter)

    const dispatchRedux = useDispatch()

    const incrementRedux = () => dispatchRedux(incrementCounterAC(counterRedux.counter + 1))
    const resetRedux = () => dispatchRedux(resetCounterAC())
    const disableIncrementRedux = () => counterRedux.counter === 5
    const disableResetRedux = () => counterRedux.counter === 0

    return (
        <div className={styles.container}>
            <CounterOutput counter={counterRedux.counter}/>
            <CounterControlPanel counter={counterRedux.counter} incrementBtnName={INCREMENT_BUTTON_NAME} resetBtnName={RESET_BUTTON_NAME}
                                 incrementCallback={incrementRedux} resetCallback={resetRedux}
                                 disableIncrementButton={disableIncrementRedux()}
                                 disableResetButton={disableResetRedux()}/>
        </div>
    );
};
