import PropTypes from 'prop-types'

function Counter({ min, max, current, onChange }) {
    function applyCurrent(num) {
        const validNum = Math.max(min, Math.min(max, num))
        onChange(validNum)
    }
  
    const inc = () => applyCurrent(current + 1)
    const dec = () => applyCurrent(current - 1)
  
    return (
        <div className='Counter'>
            <button className='Buttons Plus' type="button" onClick={dec}>
            -
            </button>
            <button className='Buttons Minus' type="button" onClick={inc}>
            +
            </button>
        </div>
    )
}

Counter.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}
  
export default Counter