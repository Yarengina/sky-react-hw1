import PropTypes from 'prop-types'
import { getNumberColor } from './utils'

function Number({ number }) {
    return (
        <div className='Number' style={getNumberColor(number)}>
            <strong>{number}</strong>
        </div>
    )
}

Number.propTypes = {
    number: PropTypes.number.isRequired
}

export default Number