import { useState } from "react";

function ShowHide() {
    const [isShown, setIsShown] = useState(true)

    const handleToggle = () => {
        setIsShown(!isShown)
    }

    return (
        <div>
            <button className='Button' type="button" onClick={handleToggle}>
                {isShown ? 'Скрыть' : 'Показать'}
            </button>
            {isShown ? <p className='Color'>Компонент — центральное понятие в React; 
                независимые, многоразовые, переиспользуемые элементы UI-интерфейса. 
                Компоненты по сути своей аналогичны функциям JavaScript. 
                Они принимают  на вход произвольные данные (`props`), 
                хранят состояние (`state`) и возвращают React-элементы, 
                которые затем отрисовываются в веб-интерфейсе.
            </p> 
            : <p> </p>}
        </div>
    )
}

export default ShowHide