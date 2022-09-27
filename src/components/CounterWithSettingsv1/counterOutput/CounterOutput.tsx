import React from 'react';
// @ts-ignore
import style from "./CounterOutput.module.css"
import {Button} from "../../UIcustomComponents/Button";
import {NavLink} from "react-router-dom";

type CounterOutputType = {
    counter: number
    incrementCounter: () => void
    resetCounter: () => void
    disabledInc: boolean
    disabledReset: boolean
    startValue: number
    maxValue: number
}


export const CounterOutput: React.FC<CounterOutputType> = (props) => {

    const {counter, startValue, maxValue} = props

    return (
        <div className={style.mainContainer}>
            <div className={style.containerOutput}>
                <span className={counter === maxValue ? style.lastValue : ""}>{props.counter}</span>
            </div>
            <div className={style.containerControls}>
                <Button callback={props.incrementCounter} disabled={props.disabledInc}>INC</Button>
                <Button callback={props.resetCounter} disabled={props.disabledReset}>RESET</Button>
                <Button callback={()=> {}} disabled={false}>
                    <NavLink to={'/settings'}>SET</NavLink>
                </Button>
            </div>
        </div>
    );
};
