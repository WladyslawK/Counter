import React, {useState} from 'react';
import './App.css';
import {CounterOutput} from "./components/Counter/counterOutput/CounterOutput";
import {CounterControlPanel} from "./components/Counter/counterControl/CounterControlPanel";
import {
    RESET_BUTTON_NAME,
    INCREMENT_BUTTON_NAME,
    DEFAULT_VALUE_COUNTER
} from "./types_&_constants/constants";
import {Counter} from "./components/Counter/Counter";

function App() {

    //BLL
    const [counter, setCounter] = useState<number>(DEFAULT_VALUE_COUNTER)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(5)

    const incrementCallback = () => setCounter(counter + 1)
    const resetCallback = () => setCounter(0)
    const disableIncrementButton = () => counter === 5 ? true : false
    const disableResetButton = () => counter === 0 ? true : false


    return (
        <div className="App">
            <Counter counter={counter} incrementBtnName={INCREMENT_BUTTON_NAME} resetBtnName={RESET_BUTTON_NAME} incrementCallback={incrementCallback} resetCallback={resetCallback} disableIncrementButton={disableIncrementButton()} disableResetButton={disableResetButton()}/>


            {/*<CounterOutput counter={counter}/>
            <CounterControlPanel counter={counter} incrementBtnName={INCREMENT_BUTTON_NAME} resetBtnName={RESET_BUTTON_NAME} incrementCallback={incrementCallback} resetCallback={resetCallback} disableIncrementButton={disableIncrementButton()} disableResetButton={disableResetButton()}/>*/}
        </div>
    );
}

export default App;
/// <reference types_&_constants="react-scripts" />  react-app-env.d.ts