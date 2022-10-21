import React, {useState} from 'react';
import {CounterOutput} from "./counterOutput/CounterOutput";
import {CounterControlPanel} from "./counterControl/CounterControlPanel";
// @ts-ignore
import styles from "./Counter.module.css";
import {DEFAULT_VALUE_COUNTER, INCREMENT_BUTTON_NAME, RESET_BUTTON_NAME} from "../../types_&_constants/constants";

export const Counter: React.FC = () => {

    const [counter, setCounter] = useState<number>(DEFAULT_VALUE_COUNTER)


    const incrementCallback = () => setCounter(counter +1)
    const resetCallback = () => setCounter(0)
    const disableIncrementButton = () => counter === 5
    const disableResetButton = () => counter === 0

    return (
        <div className={styles.container}>
            <CounterOutput counter={counter}/>
            <CounterControlPanel counter={counter} incrementBtnName={INCREMENT_BUTTON_NAME} resetBtnName={RESET_BUTTON_NAME}
                                 incrementCallback={incrementCallback} resetCallback={resetCallback}
                                 disableIncrementButton={disableIncrementButton()}
                                 disableResetButton={disableResetButton()}/>
        </div>
    );
};
