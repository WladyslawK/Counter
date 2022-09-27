import React from 'react';
import {Button} from "../../UIcustomComponents/Button";
import {CounterControlPanelType} from "../../../types_&_constants/types";
import "./CounterControlPanel.css"

export const CounterControlPanel: React.FC<CounterControlPanelType> = ({
                                                                           counter,
                                                                           resetBtnName,
                                                                           incrementCallback,
                                                                           resetCallback,
                                                                           disableIncrementButton,
                                                                           disableResetButton
                                                                       }) => {

    const incrementCounter = () => incrementCallback(counter+1)

    return (
        <div className={"controlContainer"}>
            <Button callback={incrementCounter} disabled={disableIncrementButton}>INC</Button>
            <Button callback={resetCallback} disabled={disableResetButton}>RESET</Button>
        </div>
    );
};
