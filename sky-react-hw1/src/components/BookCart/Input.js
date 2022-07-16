import InputRequired from './InputRequired'

function Input({ type, name, text }) {
    const inputCopy = InputRequired('')

    return (
        <div>
            <input
            name={name}
            type={type}
            id={name}
            placeholder={text}
            value={inputCopy.inputValue}
            onChange={inputCopy.onValueChange}
            onBlur={inputCopy.onBlurChange}
            />
            {inputCopy.isError && (
            <span className='Message'>{`Type your ${text}`}</span>
            )}
        </div>
    )
}

export default Input