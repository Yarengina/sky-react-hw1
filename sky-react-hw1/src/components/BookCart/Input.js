import PropTypes from 'prop-types'
import useInputRequired from './useInputRequired'

function Input({ type, name, text, required }) {
    const { inputValue, onChange, onBlur, isError } = useInputRequired('', required)

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

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
}

export default Input