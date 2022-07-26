import { useState } from 'react'

function MinMaxLazy( {min, max} ) {
    const [current, setCurrent] = useState(min)
  
    const onChangeInput = ({target: {value}}) => {
        let inputValue = value.replace(/\D/gi, '')
        if (inputValue > max) inputValue = max
        if (inputValue < min) inputValue = min
        setCurrent(Number(inputValue))
    }

    const dec = (num, setNum, limit) => {
        if (num !== limit) setNum((prevNum) => prevNum - 1)
    }

    const inc = (num, setNum, limit) => {
        if (num !== limit) setNum((prevNum) => prevNum + 1)
    }
    
    return (
        <div>
            <button type='button' className='Buttons Minus'
            onClick={() => dec(current, setCurrent, min)}>
            -
            </button>
            <input type='text' className='Button'
                value={current}
                onChange={onChangeInput}
            />
            <button type='button' className='Buttons Plus'
            onClick={() => inc(current, setCurrent, max)}>
            +
            </button>
        </div>
    )
}
  
export default MinMaxLazy