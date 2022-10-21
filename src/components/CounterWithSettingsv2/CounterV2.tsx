import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {CounterOutput} from "./counterOutput/CounterOutput";
import {CounterSetting} from "./counterSetting/CounterSetting";
import {DEFAULT_VALUE_COUNTER} from "../../types_&_constants/constants";


export const CounterV2: React.FC = (props) => {

    const mainContainer = {
        marginTop: "50px",
        display: "flex",
        justifyContent: "center"
    }

    const initialStartValue = Number(localStorage.getItem("startValue"))
    const initialMaxValue = Number(localStorage.getItem("maxValue"))

    const [counterV2, setCounterV2] = useState<number>(DEFAULT_VALUE_COUNTER)
    const [startValue, setStartValue] = useState<number>(initialStartValue)
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue)
    const [error, setError] = useState("")


    const incrementCounter = () => setCounterV2(counterV2 + 1)
    const resetCounter = () => setCounterV2(startValue)
    const disableInc = () => counterV2 === maxValue
    const disableReset = () => counterV2 === startValue
    const setStatCounter = (value: number) => setCounterV2(value)

    const changeMaxValue = (value: number) => setMaxValue(value)
    const changeStartValue = (value: number) => setStartValue(value)

    const changeError = (error: string) => setError(error)

    return (
        <div style={mainContainer}>

            <CounterSetting startValue={startValue} maxValue={maxValue} changeMaxValue={changeMaxValue} changeStartValue={changeStartValue} error={error} changeError={changeError} setStatCounter={setStatCounter}/>

            <CounterOutput counter={counterV2} incrementCounter={incrementCounter} resetCounter={resetCounter} disabledInc={disableInc()} disabledReset={disableReset()} maxValue={maxValue} error={error}/>

        </div>
    );
};

