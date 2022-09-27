import {DetailedHTMLProps} from "react";

export type CounterOutputType = {
    counter: number
}
export type CounterControlPanelType = {
    counter: number
    incrementBtnName: string
    resetBtnName: string
    incrementCallback: (newValue: number) => void
    resetCallback: () => void
    disableIncrementButton: boolean
    disableResetButton: boolean
}

type DefaultButtonType = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type ButtonType = DefaultButtonType & {
    title?: string
    callback: () => void
    disabled: boolean
}

