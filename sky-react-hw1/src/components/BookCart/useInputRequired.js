import { useState } from 'react'

const useInputRequired = (initialValue, required) => {
    const [inputValue, setInputValue] = useState(initialValue)
    const [isError, setIsError] = useState(required)

    const onBlur = () => {
        setIsError(!inputValue)
    }

    const onChange = (event) => {
        const {target: {value}} = event
        setInputValue(value)
        setIsError(required)
    }

    return {
        inputValue,
        isError,
        onBlur,
        onChange,
    }
}

export default useInputRequired