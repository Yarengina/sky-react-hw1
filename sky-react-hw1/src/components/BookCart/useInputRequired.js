import { useState } from 'react'

const useInputRequired = (initialValue, required = true) => {
    const [inputValue, setInputValue] = useState(initialValue)
    const [isError, setIsError] = useState(!required)

    const onBlur = () => {
        setIsError(required && !inputValue)
    }

    const onChange = ({target: {value}}) => {
        setInputValue(value)
        setIsError(required && !value)
    }

    return {
        inputValue,
        isError,
        onBlur,
        onChange,
    }
}

export default useInputRequired