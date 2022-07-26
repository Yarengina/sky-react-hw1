const formData = [
    {
    id: '1',
    type: 'email',
    name: 'email',
    text: 'Enter your email...',
    },
    {
    id: '2',
    type: 'password',
    name: 'password',
    text: 'Enter your password...',
    },
]

const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordLength = 6

export { formData, validEmail, passwordLength } 