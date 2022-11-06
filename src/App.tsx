import React from 'react';
import './App.css';
import {CounterV2} from "./components/CounterWithSettingsv2/CounterV2";
import {CounterV1} from "./components/CounterWithSettingsv1/CounterV1";
import {Counter} from "./components/Counter/Counter";
import {Provider} from "react-redux";
import {store} from "./components/Counter/Redux/store";
import {storeV1} from "./components/CounterWithSettingsv1/redux/store";


function App() {

    return (
        <>
            <div className="App">
                <Provider store={store}>
                    <Counter/>
                </Provider>


                <Provider store={storeV1}>
                    <CounterV1 />
                </Provider>


                {/*<CounterV2 />*/}
            </div>
        </>
    );
}
export default App;
