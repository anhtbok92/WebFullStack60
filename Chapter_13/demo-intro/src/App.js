import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        // Chỉ định 1 state của chính component App
        this.state = {
            number: 100
        };
    }
    handleAdd = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleMinus = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div>
                <p>Giá trị: {this.state.number}</p>
                <button onClick={this.handleAdd}>Tăng</button>
                <button onClick={this.handleMinus}>Giảm</button>
                <button onClick={() => {
                    this.setState({ number: this.state.number + 1 })
                }}>
                    Tăng (viết gọn)</button>
                <button
                    onClick={() => {
                        this.setState({ number: this.state.number - 1 })
                    }}
                >
                    Giảm (viết gọn)
                </button>
            </div>
        )
    }
}

export default App;