import { useState } from 'react'
import languages from './languages'

function Select() {
    const [selectLang, setSelectLang] = useState('')
  
    const text = languages.find((lang) => lang.name === selectLang)
  
    const onChange = ({target: {value}}) => {
        setSelectLang(value)
    }
  
    return (
        <div className='Color Clock'>
            <h3>Топ-5 языков программирования:</h3>
            <select className='Select'
                value={selectLang}
                onChange={onChange}
            >
            {languages.map((lang) => (
                <option key={lang.name} value={lang.name}>
                {lang.name}
                </option>
            ))}
            </select>
            {text && <p>{text.description}
            </p>}
        </div>
    )
}
  
export default Select
