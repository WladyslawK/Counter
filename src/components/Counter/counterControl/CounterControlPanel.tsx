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

    return (
        <div className={"controlContainer"}>
            <Button counter={counter} callback={incrementCallback} disabled={disableIncrementButton}>INC</Button>
            <Button counter={counter} callback={resetCallback} disabled={disableResetButton}>RESET</Button>
        </div>
    );
};
