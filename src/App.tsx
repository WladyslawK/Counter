import React, {useState} from 'react';
import './App.css';
import {CounterOutput} from "./components/counterOutput/CounterOutput";
import {CounterControlPanel} from "./components/counterControl/CounterControlPanel";
import {
    RESET_BUTTON_NAME,
    INCREMENT_BUTTON_NAME,
    DEFAULT_VALUE_COUNTER
} from "./types_&_constants/constants";

function App() {

    //BLL
    const [counter, setCounter] = useState<number>(DEFAULT_VALUE_COUNTER)
    const incrementCallback = () => setCounter(counter + 1)
    const resetCallback = () => setCounter(0)
    const disableIncrementButton = () => counter === 5 ? true : false
    const disableResetButton = () => counter === 0 ? true : false

    return (
        <div className="App">
            <CounterOutput counter={counter}/>
            <CounterControlPanel counter={counter} incrementBtnName={INCREMENT_BUTTON_NAME} resetBtnName={RESET_BUTTON_NAME} incrementCallback={incrementCallback} decrementCallback={resetCallback} disableIncrementButton={disableIncrementButton()} disableResetButton={disableResetButton()}/>
        </div>
    );
}

export default App;
/// <reference types_&_constants="react-scripts" />  react-app-env.d.ts