import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'

function Book(props) {
    return React.createElement('div', {}, [
      React.createElement('h2', {}, props.name),
      React.createElement('p', {}, props.year),
      React.createElement('p', {}, props.price)
    ])
  }

function App() {
    return (
        <div className='App'>
            <h1 id='hello' className='class1'>Hello from React</h1>
            <Book name='JS for beginners' year='2018' price='1000' />
            <Book name='React' year='2020' price='1200' />
            <Book name='Vue JS' year='2019' price='1100' />
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  rootElement
)
export default App
