import { useState } from 'react'

const InputRequired = (initialValue) => {
    const [inputValue, setInputValue] = useState(initialValue)
    const [isError, setIsError] = useState(false)

    const onBlurChange = () => {
        setIsError(!inputValue && true)
    }

    const onValueChange = (event) => {
        const targetValue = event.target.value
        setInputValue(targetValue)
        setIsError(inputValue && false)
    }

    return {
        inputValue,
        isError,
        onBlurChange,
        onValueChange,
    }
}

export default InputRequired