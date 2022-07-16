import './App.css'
import MinMaxFn from './components/MinMaxFn'
import ShowHide from './components/ShowHide'
import TwoSquares from './components/TwoSquares'

function App() {
    return <div className='App'>
        <ShowHide />
        <TwoSquares />
        <MinMaxFn min={1} max={10} />
        </div>
}

export default App
