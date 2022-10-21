import React, {useReducer, useState} from 'react';
import {CounterOutput} from "./counterOutput/CounterOutput";
import {CounterControlPanel} from "./counterControl/CounterControlPanel";
// @ts-ignore
import styles from "./Counter.module.css";
import {DEFAULT_VALUE_COUNTER, INCREMENT_BUTTON_NAME, RESET_BUTTON_NAME} from "../../types_&_constants/constants";
import {counterReducer, incrementCounterAC, resetCounterAC} from "./Redux/counterReducer/CounterReducer";

export const Counter = () => {

    const [counter, counterDispatch] = useReducer(counterReducer, {counter: DEFAULT_VALUE_COUNTER})


    const incrementCallback = () => counterDispatch(incrementCounterAC(counter.counter + 1))

    const resetCallback = () => counterDispatch(resetCounterAC())
    const disableIncrementButton = () => counter.counter === 5
    const disableResetButton = () => counter.counter === 0

    return (
        <div className={styles.container}>
            <CounterOutput counter={counter.counter}/>
            <CounterControlPanel counter={counter.counter} incrementBtnName={INCREMENT_BUTTON_NAME} resetBtnName={RESET_BUTTON_NAME}
                                 incrementCallback={incrementCallback} resetCallback={resetCallback}
                                 disableIncrementButton={disableIncrementButton()}
                                 disableResetButton={disableResetButton()}/>
        </div>
    );
};
