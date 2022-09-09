import React from 'react';
import {ButtonType} from "../../types_&_constants/types";
import {
    DEFAULT_VALUE_COUNTER,
    INCREMENT_BUTTON_NAME,
    LAST_AVAILABLE_NUMBER,
    RESET_BUTTON_NAME
} from "../../types_&_constants/constants";

export const Button: React.FC<ButtonType> = ({counter, title, callback}) => {

    const btn = {
        border: "1px aquamarine solid",
        borderRadius: "7px",
        backgroundColor: "aquamarine",
        marginLeft: "10px",
    }

    return (
        <>
            <button style={btn} disabled={counter === LAST_AVAILABLE_NUMBER && title === INCREMENT_BUTTON_NAME ? true :  counter === DEFAULT_VALUE_COUNTER && title === RESET_BUTTON_NAME ? true : false} onClick={callback}>{title}</button>
        </>
    );
};
