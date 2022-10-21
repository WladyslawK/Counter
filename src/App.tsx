import React from 'react';
import './App.css';
import {CounterV2} from "./components/CounterWithSettingsv2/CounterV2";
import {CounterV1} from "./components/CounterWithSettingsv1/CounterV1";
import {Counter} from "./components/Counter/Counter";

function App() {

    return (
        <>
            <div className="App">
                <Counter/>

                {/*<CounterV1 />*/}

                {/*<CounterV2 />*/}
            </div>
        </>
    );
}
export default App;
