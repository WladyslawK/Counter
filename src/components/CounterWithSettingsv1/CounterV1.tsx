import React, {useEffect, useState} from 'react';
import {CounterOutput} from "./counterOutput/CounterOutput";
import {Route, Routes} from "react-router-dom";
import {CounterSetting} from "./counterSetting/CounterSetting";
import {DEFAULT_VALUE_COUNTER} from "../../types_&_constants/constants";


export const CounterV1: React.FC = (props) => {


    const initialStartValue = Number(localStorage.getItem("startValue"))
    const initialMaxValue = Number(localStorage.getItem("maxValue"))

    const [counterV1, setCounterV1] = useState<number>(DEFAULT_VALUE_COUNTER)
    const [startValue, setStartValue] = useState<number>(initialStartValue)
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue)

    const incrementV1 = () => setCounterV1(counterV1 + 1)
    const resetV1 = () => setCounterV1(startValue)
    const disabledIncr = () => counterV1 === maxValue
    const disabledReset = () => counterV1 === startValue

    useEffect(() => setCounterV1(startValue), [startValue, maxValue])

    const changeStartValue = (newValue: number) => {
        setStartValue(newValue)
    }
    const changeMaxValue = (newValue: number) => {
        setMaxValue(newValue)
    }


    const mainContainer = {
        marginTop: "20px",
        display: "flex",
        justifyContent: "center"
    }

    return (
        <>
            <Routes>
                <Route path={'/'} element={<CounterOutput counter={counterV1} incrementCounter={incrementV1} resetCounter={resetV1} disabledInc={disabledIncr()} disabledReset={disabledReset()} maxValue={maxValue} startValue={startValue}/>}/>

                <Route path={'/settings'} element={<CounterSetting startValue={startValue} maxValue={maxValue} changeMaxValue={changeMaxValue} changeStartValue={changeStartValue}/>}/>
            </Routes>
        </>
    );
};
