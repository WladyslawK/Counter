import React, {useState} from 'react';
import {CounterOutput} from "./counterOutput/CounterOutput";
import {Route, Routes} from "react-router-dom";
import {CounterSetting} from "./counterSetting/CounterSetting";

type CounterV1Type = {
    counter: number
    increment: (newValue: number) => void
    reset: () => void
    disabledInc: boolean
    disabledReset: boolean
    startValue: number
    maxValue: number
    changeStartValue: (newValue: number) => void
    changeMaxValue: (newValue: number) => void
}

export const CounterV1: React.FC<CounterV1Type> = (props) => {

    const mainContainer = {
        marginTop: "20px",
        display: "flex",
        justifyContent: "center"
    }

    const incrementCounter = () => props.increment(props.counter + 1)

    return (
        <div style={mainContainer}>
            <Routes>
                <Route path={'/'} element={<CounterOutput counter={props.counter} incrementCounter={incrementCounter} resetCounter={props.reset} disabledInc={props.disabledInc} disabledReset={props.disabledReset} maxValue={props.maxValue} startValue={props.startValue}/>}/>

                <Route path={'/settings'} element={<CounterSetting startValue={props.startValue} maxValue={props.maxValue} changeMaxValue={props.changeMaxValue} changeStartValue={props.changeStartValue}/>}/>
            </Routes>
        </div>
    );
};
