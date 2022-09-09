import React from 'react';
import {Button} from "../UIcustomComponents/Button";
import {CounterControlPanelType} from "../../types_&_constants/types";

export const CounterControlPanel:React.FC<CounterControlPanelType> = ({counter, incrementBtnName, resetBtnName, incrementCallback, decrementCallback}) => {

    const controlContainer = {
        display: "flex",
        justifyContent: "center",
        width: "200px",
        height: "30px",
        borderRadius: "7px",
        border: "1px aquamarine solid",
        margin: "20px 0px 20px 20px",
        padding: "10px 0px 10px 0px"
    }

    return (
        <div style={controlContainer}>
            <Button counter={counter} title={incrementBtnName} callback={incrementCallback}/>
            <Button counter={counter} title={resetBtnName} callback={decrementCallback}/>
        </div>
    );
};
