import Number from './Number'
import { getArrayOfNumbers } from './utils'

function NumberGenerator() {
    const numbers = getArrayOfNumbers(31)

    const numberGenerator = numbers.map(num => (
        <Number number={num} key={num} />
    ))

    return (
        <div className='Main'>
            <h1>Number generator</h1>
            <div className='NumberField'>{numberGenerator}</div>
        </div>
    )
}

export default NumberGenerator