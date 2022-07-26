import './App.css'
import MinMaxLazy from './components/Forms/MinMaxLazy'
import Select from './components/Forms/Select/Select'
import LoginPassword from './components/Forms/LoginPassword/LoginPassword'

function App() {
    return <div className='App'>
        <MinMaxLazy
            min={0}
            max={10}
        />
        <Select />
        <LoginPassword />
        </div>
}

export default App