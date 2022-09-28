import React from 'react';
// @ts-ignore
import style from "./CounterOutput.module.css"
import {Button} from "../../UIcustomComponents/Button";
import {INCORRECT_VALUE, SET_VALUE_AND_PRESS_SET} from "../../../types_&_constants/constants";

type CounterOutputType = {
    counter: number
    incrementCounter: () => void
    resetCounter: () => void
    disabledInc: boolean
    disabledReset: boolean
    maxValue: number
    error: string
}


export const CounterOutput: React.FC<CounterOutputType> = (props) => {

    const {counter, maxValue, error, disabledReset, disabledInc} = props
    const redBorder = error ? error === SET_VALUE_AND_PRESS_SET ? "" : style.lastValue : counter === maxValue ? style.lastValue : ""

    return (
        <div className={style.mainContainer}>
            <div className={style.containerOutput}>
                <span className={redBorder}>{error ? error : counter}</span>
            </div>
            <div className={style.containerControls}>
                <Button callback={props.incrementCounter} disabled={error ? true : disabledInc}>INC</Button>
                <Button callback={props.resetCounter} disabled={error ? true : disabledReset}>RESET</Button>
            </div>
        </div>
    );
};
