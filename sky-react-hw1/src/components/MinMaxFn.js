import { useState } from "react"

function MinMaxFn(props) {
    const [curCount, setCurCount] = useState(props.min)

    const inc = () => setCurCount(Number(curCount) + 1)

    const dec = () => setCurCount(curCount - 1)

    const onChangeInput = (event) => setCurCount(event.target.value.replace(/\D/,''))

    return (
        <div>
            <button type="button" 
            onClick={curCount > props.min ? dec : undefined}>
            {' '}-{' '}
            </button>
            <input type='text' name='input' value={curCount}
            onChange={onChangeInput}
            />
            <button type="button" 
            onClick={curCount < props.max ? inc : undefined}>
            {' '}+{' '}
            </button>
        </div>
    )
}
export default MinMaxFn