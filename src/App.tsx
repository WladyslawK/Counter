import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterOutput} from "./components/Counter/counterOutput/CounterOutput";
import {CounterControlPanel} from "./components/Counter/counterControl/CounterControlPanel";
import {
    RESET_BUTTON_NAME,
    INCREMENT_BUTTON_NAME,
    DEFAULT_VALUE_COUNTER
} from "./types_&_constants/constants";
import {Counter} from "./components/Counter/Counter";
import {CounterV1} from "./components/CounterWithSettingsv1/CounterV1";
import {CounterV2} from "./components/CounterWithSettingsv2/CounterV2";

function App() {

    //BLL
    const [counter, setCounter] = useState<number>(DEFAULT_VALUE_COUNTER)


    const incrementCallback = (newValue: number) => setCounter(newValue)
    const resetCallback = () => setCounter(0)
    const disableIncrementButton = () => counter === 5
    const disableResetButton = () => counter === 0


    //for CounterV1 and CounterV2
    //local storage get
    const initialStartValue = Number(localStorage.getItem("startValue"))
    const initialMaxValue = Number(localStorage.getItem("maxValue"))

    const [counterV1, setCounterV1] = useState<number>(DEFAULT_VALUE_COUNTER)
    const [startValue, setStartValue] = useState<number>(initialStartValue)
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue)

    const incrementV1 = (newValue: number) => setCounterV1(newValue)
    const resetV1 = () => setCounterV1(startValue)
    const disabledIncr = () => counterV1 === maxValue
    const disabledReset = () => counterV1 === startValue

    //error for counter v2
    const [error, setError] = useState("")

    useEffect(() => setCounterV1(startValue), [startValue, maxValue])

    const changeStartValue = (newValue: number) => {
        setStartValue(newValue)
    }
    const changeMaxValue = (newValue: number) => {
        setMaxValue(newValue)
    }

    const changeError = (error: string) => setError(error)


    return (
        <>
            {/*---COUNTER first version end of Monday---*/}
            {/*<div className="App">
                <Counter counter={counter} incrementBtnName={INCREMENT_BUTTON_NAME} resetBtnName={RESET_BUTTON_NAME}
                         incrementCallback={incrementCallback} resetCallback={resetCallback}
                         disableIncrementButton={disableIncrementButton()} disableResetButton={disableResetButton()}/>}

            {/*---COUNTER V1---*/}
            <div>
                <CounterV1 counter={counterV1} increment={incrementV1} reset={resetV1} disabledReset={disabledReset()}
                           disabledInc={disabledIncr()} startValue={startValue} maxValue={maxValue}
                           changeStartValue={changeStartValue} changeMaxValue={changeMaxValue}/>
            </div>

            {/*---COUNTER V2---*/}
            <div>
                <CounterV2 counter={counterV1} increment={incrementV1} reset={resetV1} disabledReset={disabledReset()}
                           disabledInc={disabledIncr()} startValue={startValue} maxValue={maxValue}
                           changeStartValue={changeStartValue} changeMaxValue={changeMaxValue} error={error} changeError={changeError}/>
            </div>
        </>
    );
}

export default App;
/// <reference types_&_constants="react-scripts" />  react-app-env.d.ts