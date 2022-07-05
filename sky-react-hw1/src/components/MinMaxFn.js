import { useState } from "react"

function MinMaxFn(props) {
    const [curCount, setCurCount] = useState(props.min)

    const inc = () => setCurCount(Number(curCount) + 1)

    const dec = () => setCurCount(curCount - 1)

    const onChangeInput = (event) => setCurCount(event.target.value.replace(/\D/,''))


    return (
        <div>
            {curCount > props.min
                ? <button type="button" onClick={dec}>
                    {' '}-{' '}
                </button>
                : <button type="button">{' '}-{' '}
                </button>
                }
                <input  
                    type='text'
                    name='input'
                    value={curCount}
                    onChange={onChangeInput}
                />
                {curCount < props.max
                ? <button type="button" onClick={inc}>
                    {' '}+{' '}
                </button>
                : <button type="button">{' '}+{' '}
                </button>
                }
            </div>
    )
}
export default MinMaxFn