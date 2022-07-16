import Input from './Input'

function LoginPass() {
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

    const inputs = formData.map((input) => (
    <Input
        name={input.name}
        type={input.type}
        text={input.text}
        key={input.id}
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