import React from 'react';
import {Route, Routes} from "react-router-dom";
import {CounterOutput} from "./counterOutput/CounterOutput";
import {CounterSetting} from "./counterSetting/CounterSetting";


type CounterV2Type = {
    counter: number
    increment: (newValue: number) => void
    reset: () => void
    disabledInc: boolean
    disabledReset: boolean
    startValue: number
    maxValue: number
    changeStartValue: (newValue: number) => void
    changeMaxValue: (newValue: number) => void
    error: string
    changeError: (error: string) => void
}

export const CounterV2: React.FC<CounterV2Type> = (props) => {

    const mainContainer = {
        marginTop: "50px",
        display: "flex",
        justifyContent: "center"
    }

    const incrementCounter = () => props.increment(props.counter + 1)

    return (
        <div style={mainContainer}>

            <CounterSetting startValue={props.startValue} maxValue={props.maxValue} changeMaxValue={props.changeMaxValue} changeStartValue={props.changeStartValue} error={props.error} changeError={props.changeError}/>

            <CounterOutput counter={props.counter} incrementCounter={incrementCounter} resetCounter={props.reset} disabledInc={props.disabledInc} disabledReset={props.disabledReset} maxValue={props.maxValue} error={props.error}/>

        </div>
    );
};

