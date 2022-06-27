import React from "react"

class MinMax extends React.Component {
    constructor(props) {
        super(props)
        this.state = { curCount: this.props.min }
        
        this.onChangeInput = this.onChangeInput.bind(this)
    }

    onChangeInput(event) {
        this.setState({ curCount: event.target.value.replace(/\D/,'') })
    }

    inc = () => {
        this.setState((prevState) => ({ curCount: prevState.curCount + 1 }))
    }

    dec = () => {
        this.setState((prevState) => ({ curCount: prevState.curCount - 1 }))
    }


    render() {
        return (
            <div>
                {this.state.curCount > this.props.min
                ? <button type="button" onClick={this.dec}>
                    {' '}-{' '}
                </button>
                : <button type="button">{' '}-{' '}
                </button>
                }
                <input  
                    type='text'
                    name='input'
                    value={this.state.curCount}
                    onChange={this.onChangeInput}
                />
                {this.state.curCount < this.props.max
                ? <button type="button" onClick={this.inc}>
                    {' '}+{' '}
                </button>
                : <button type="button">{' '}+{' '}
                </button>
                }
            </div>
        )
    }
}

export default MinMax
