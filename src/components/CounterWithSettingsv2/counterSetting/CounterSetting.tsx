import React, {ChangeEvent, useEffect, useState} from 'react';
// @ts-ignore
import style from "./CounterSetting.module.css";
import {Button} from "../../UIcustomComponents/Button";
import {INCORRECT_VALUE, SET_VALUE_AND_PRESS_SET} from "../../../types_&_constants/constants";

type CounterSettingType = {
    startValue: number
    maxValue: number
    changeStartValue: (newValue: number) => void
    changeMaxValue: (newValue: number) => void
    error: string
    changeError: (error: string) => void
    setStatCounter: (value: number) => void
}

export const CounterSetting: React.FC<CounterSettingType> = (props) => {

    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [startValue, setStartValue] = useState<number>(props.startValue)
    const [disable, setDisable] = useState<boolean>(false)

    const inputValidation = () => {
        if(maxValue >= 0 && startValue < maxValue && startValue >= 0){
            setDisable(false)
            props.changeError(SET_VALUE_AND_PRESS_SET)

        }else{
            setDisable(true)
            props.changeError(INCORRECT_VALUE)
        }
    }

    useEffect(()=>{
        inputValidation()

    }, [startValue, maxValue])



    const onchangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const onchangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const setValuesHandler = () => {
        props.changeStartValue(startValue)
        props.changeMaxValue(maxValue)
        props.setStatCounter(startValue)


        //set localStorage
        localStorage.setItem("startValue", startValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())

        //set no error
        props.changeError("")
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.containerOutput}>
                <div className={style.firstInput}>
                    <span>max Value:</span> <input className={startValue >= maxValue ? style.error : ""} type="number" value={maxValue.toString()} onChange={onchangeMaxHandler}/>
                </div>
                <div>
                    <span>start Value:</span> <input className={startValue >= maxValue || startValue < 0 ? style.error : ""} type="number" value={startValue.toString()} onChange={onchangeMinHandler}/>
                </div>

            </div>
            <div className={style.containerControls}>
                <Button callback={setValuesHandler} disabled={disable}>
                    SET
                </Button>
            </div>
        </div>
    );
};
