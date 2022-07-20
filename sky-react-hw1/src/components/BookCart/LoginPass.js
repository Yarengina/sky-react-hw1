import Input from './Input'

const formData = [
    {
    id: '1',
    type: 'text',
    name: 'login',
    text: 'Login',
    },
    {
    id: '2',
    type: 'password',
    name: 'password',
    text: 'Password',
    },
]

function LoginPass() {
    const inputs = formData.map(({ name, type, text, id }) => (
    <Input
        name={name}
        type={type}
        text={text}
        key={id}
    />
    ))

    return (
        <div>
            <p className='Books'>Sign in</p>
            <div className='Form'>{inputs}</div>
        </div>
    )
}

export default LoginPass