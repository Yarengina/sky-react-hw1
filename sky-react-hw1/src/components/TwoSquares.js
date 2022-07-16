import { useState } from "react";

function TwoSquares() {
    const [blue, setBlue] = useState(true)
    const [green, setGreen] = useState(true)

    const handleToggleBlue = () => {
        setBlue(!blue)
    }

    const handleToggleGreen = () => {
        setGreen(!green)
    }

    return (
        <div className='Squares'>
            <button
            className={blue ? 'Blue' : 'Red'} type="button"
            onClick={handleToggleBlue}> </button>
            <button
            className={green ? 'Green' : 'Red'} type="button" 
            onClick={handleToggleGreen}> </button>
        </div>
    )
}

export default TwoSquares