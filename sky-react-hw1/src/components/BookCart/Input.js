import useInputRequired from './useInputRequired'

function Input({ type, name, text }) {
    const { inputValue, onChange, onBlur, isError } = useInputRequired('')

    return (
        <div>
            <input
            name={name}
            type={type}
            id={name}
            placeholder={text}
            value={inputValue}
            onChange={onChange}
            onBlur={onBlur}
            />
            {isError && (
            <span className='Message'>{`Type your ${text}`}</span>
            )}
        </div>
    )
}

export default Input