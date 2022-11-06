import React, {useEffect, useState} from 'react';
import {CounterOutput} from "./counterOutput/CounterOutput";
import {Route, Routes} from "react-router-dom";
import {CounterSetting} from "./counterSetting/CounterSetting";
import {DEFAULT_VALUE_COUNTER} from "../../types_&_constants/constants";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "./redux/store";
import {
    incrementCounter,
    resetCounter,
    setMaxValue,
    setStartValue
} from "./counterWithSettingsv1Reducer/counterReducerV1";


export const CounterV1: React.FC = (props) => {

    let counterV1 = useSelector<StoreType, number>((state)=> state.counterReducerV1.counterV1)
    let startValue = useSelector<StoreType, number>(state => state.counterReducerV1.startValue)
    let maxValue = useSelector<StoreType, number>(state => state.counterReducerV1.maxValue)

    const Dispatch = useDispatch()

    const initialStartValue = Number(localStorage.getItem("startValue"))
    const initialMaxValue = Number(localStorage.getItem("maxValue"))



    /*const [counterV1, setCounterV1] = useState<number>(DEFAULT_VALUE_COUNTER)
    const [startValue, setStartValue] = useState<number>(initialStartValue)
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue)*/

    const incrementV1 = () => Dispatch(incrementCounter())
    const resetV1 = () => Dispatch(resetCounter())
    const disabledIncr = () => counterV1 === maxValue
    const disabledReset = () => counterV1 === startValue

    useEffect(() => {resetV1()}, [startValue, maxValue])

    const changeStartValue = (newValue: number) => {
        Dispatch(setStartValue(newValue))
    }
    const changeMaxValue = (newValue: number) => {
        Dispatch(setMaxValue(newValue))
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
