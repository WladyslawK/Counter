import React from 'react';
import {CounterControlPanelType} from "../../types_&_constants/types";
import {CounterOutput} from "./counterOutput/CounterOutput";
import {CounterControlPanel} from "./counterControl/CounterControlPanel";

export const Counter: React.FC<CounterControlPanelType> = ({
                                                               counter,
                                                               disableResetButton,
                                                               disableIncrementButton,
                                                               incrementCallback,
                                                               incrementBtnName,
                                                               resetBtnName,
                                                               resetCallback
                                                           }) => {

    return (
        <div>
            <CounterOutput counter={counter}/>
            <CounterControlPanel counter={counter} incrementBtnName={incrementBtnName} resetBtnName={resetBtnName}
                                 incrementCallback={incrementCallback} resetCallback={resetCallback}
                                 disableIncrementButton={disableIncrementButton}
                                 disableResetButton={disableResetButton}/>
        </div>
    );
};
