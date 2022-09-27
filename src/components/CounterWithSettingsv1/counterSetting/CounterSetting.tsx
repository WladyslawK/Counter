import React, {ChangeEvent, MouseEventHandler, useEffect, useState} from 'react';
// @ts-ignore
import style from "./CounterSetting.module.css";
import {Button} from "../../UIcustomComponents/Button";
import {NavLink} from "react-router-dom";

type CounterSettingType = {
    startValue: number
    maxValue: number
    changeStartValue: (newValue: number) => void
    changeMaxValue: (newValue: number) => void
}

export const CounterSetting: React.FC<CounterSettingType> = (props) => {

    const changeSettings = () => {

    }

    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [startValue, setStartValue] = useState<number>(props.startValue)
    const [disable, setDisable] = useState<boolean>(false)

    const inputValidation = () => {
        if(startValue < 0){
            setDisable(true)
        }else if(startValue >= maxValue){
            setDisable(true)
        }else {
            setDisable(false)
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
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.containerOutput}>
                <div className={style.firstInput}>
                    <span>max Value:</span> <input className={disable ? style.error : ""} type="number" value={maxValue.toString()} onChange={onchangeMaxHandler}/>
                </div>
                <div>
                    <span>start Value:</span> <input className={disable ? style.error : ""} type="number" value={startValue.toString()} onChange={onchangeMinHandler}/>
                </div>

            </div>
            <div className={style.containerControls}>
                <Button callback={setValuesHandler} disabled={disable}>
                    <NavLink className={disable ? style.disable : ""} to={ disable ? "/settings" : "/"}>SET</NavLink>
                </Button>
            </div>
        </div>
    );
};
