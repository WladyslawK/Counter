import React, {MouseEventHandler} from 'react';
import {ButtonType} from "../../types_&_constants/types";
import {
    DEFAULT_VALUE_COUNTER,
    INCREMENT_BUTTON_NAME,
    LAST_AVAILABLE_NUMBER,
    RESET_BUTTON_NAME
} from "../../types_&_constants/constants";

export const Button: React.FC<ButtonType> = ({counter, title, callback, disabled, ...restProps}) => {

    const btn = {
        border: "1px aquamarine solid",
        borderRadius: "7px",
        backgroundColor: "aquamarine",
        marginLeft: "10px",
    }

    const onclickHandler = () => {
        callback && callback()
    }

    return (
        <>
            <button {...restProps} style={btn}
                    disabled={disabled}
                    onClick={onclickHandler}></button>
        </>
    );
};
