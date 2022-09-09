export type CounterOutputType = {
    counter: number
}
export type CounterControlPanelType = {
    counter: number
    incrementBtnName: string
    resetBtnName: string
    incrementCallback: () => void
    decrementCallback: () => void
}


export type ButtonType = {
    counter: number
    title: string
    callback: () => void
}

