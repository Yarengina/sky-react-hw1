import React from 'react'

class ReacTimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            isCounting: false,
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.increment(), 1000)
    }

    componentDidUpdate(prevState) {
        if (this.state.isCounting !== prevState.isCounting) {
            if(this.state.isCounting) {
                this.startTimer()
            } else {
                this.stopTimer()
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    handleStart = () => {
        this.setState({ isCounting: true })
    }

    handleStop = () => {
        this.setState({ isCounting: false })
    }

    handleReset = () => {
        this.setState({ isCounting: false, count: 0 })
    }

    startTimer = () => {
        if (this.timerId === null) {
            this.timerId = setInterval(
            () => this.setState((prevState) => ({ count: prevState.count + 1 })),
            1000)
        }
    }

    stopTimer = () => {
        if (this.timerId !== null) {
            clearInterval(this.timerId)
            this.timerId = null
        }
    }

    increment() {
        this.setState((prevState) => ({
        count: Number(prevState.count) + 1,
        }))
    }

    render() {
        return (
            <div>
                <h1>React Timer</h1>
                <h3 className='Color'>{this.state.count}</h3>
                {!this.state.isCounting ? (
                <button className='Button' type="button" onClick={this.handleStart}>Start
                </button>
                ) : (
                <button className='Button' type="button" onClick={this.handleStop}>Stop
                </button>
                )}
                <button className='Button' type="button" onClick={this.handleReset}>Reset
                </button>
            </div>
        )
    }
}

export default ReacTimer
