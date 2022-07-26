import { useState } from 'react'
import { validEmail, passwordLength } from './formData'

const useCheckInput = (initialValue) => {
    const [inputValue, setInputValue] = useState(initialValue)
    const [isError, setIsError] = useState('')

    const onBlur = ({target: { name, value }}) => {
        if (!inputValue) {
            setIsError(`Type your ${name}`)
        }

        if (name === 'password' && value.length && value.length < passwordLength) {
            setIsError('At least 6 characters')
        }

        if (name === 'email' && value.length && !value.match(validEmail)) {
            setIsError('Email is not valid')
        }
    }

    const onChange = ({target: {value}}) => {
        setInputValue(value)
        setIsError(!value)
    }

    return {
        inputValue,
        isError,
        onBlur,
        onChange,
    }
}

export default useCheckInput