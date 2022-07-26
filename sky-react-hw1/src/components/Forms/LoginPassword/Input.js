import useCheckInput from './useCheckInput'

function Input({ type, name, text }) {
    const { inputValue, onChange, onBlur, isError } = useCheckInput('')

    return (
        <div className='Inputs'>
            <input className='Input'
            name={name}
            type={type}
            id={name}
            placeholder={text}
            value={inputValue}
            onChange={onChange}
            onBlur={onBlur}
            />
            <span className='Error'>{isError}</span>
        </div>
    )
}

export default Input