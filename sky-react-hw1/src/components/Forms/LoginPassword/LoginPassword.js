import Input from './Input'
import { formData } from './formData'

function LoginPassword() {
    const onSubmit = (event) => event.preventDefault()

    const inputs = formData.map(({ name, type, text, id }) => (
    <Input
        name={name}
        type={type}
        text={text}
        key={id}
    />
    ))

    return (
            <form className='FormSignIn' onSubmit={onSubmit}>
                <h3 className='Color'>Форма регистрации:</h3>
                {inputs}
                <button className='ButtonForm' type='button'>Sign in
                </button>
            </form>
    )
}

export default LoginPassword