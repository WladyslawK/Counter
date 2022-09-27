import React from 'react';
import {CounterOutputType} from "../../../types_&_constants/types";
import {LAST_AVAILABLE_NUMBER} from "../../../types_&_constants/constants";

export const CounterOutput: React.FC<CounterOutputType> = ({counter}) => {

    const containerOutput = {
        marginTop: "20px",
        marginLeft: "20px",
        width: "200px",
        borderRadius: "6px",
        border: "1px aquamarine solid",
        backgroundColor: "aquamarine",
    }

    const lastAvailableNumber = {
        color: "red"
    }

    return (
        <div style={containerOutput}>
            <h3 style={counter === LAST_AVAILABLE_NUMBER ? lastAvailableNumber : {}}>{counter}</h3>
        </div>
    );
};
