import React from 'react'

class ReacTimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            timerId: null,
        }
    }

    componentDidUpdate(prevState) {
        if (this.state.count !== prevState.count) {
            if(this.state.isCounting) {
                this.startTimer()
            } else {
                this.stopTimer()
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId)
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
        if (this.state.timerId === null) {
            this.state.timerId = setInterval(
            () => this.setState((prevState) => ({ count: prevState.count + 1 })),
            1000)
        }
    }

    stopTimer = () => {
        if (this.state.timerId !== null) {
            clearInterval(this.state.timerId)
            this.setState({ timerId: null })
        }
    }

    render() {
        return (
            <div>
                <h1>React Timer</h1>
                <h3 className='Color'>{this.state.count}</h3>
                {!this.state.timerId ? (
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
