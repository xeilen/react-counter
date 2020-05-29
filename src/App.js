import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


export class App extends Component {
    state = {
        currentValue: 0,
        inputValue : ''

    }
    addOneClick = () => {
        this.setState({
            currentValue: this.state.currentValue + 1
        })
    }

    minusOneCkick = () => {
        if (this.state.currentValue <= 0) {
            return
        }
        this.setState({
            currentValue: this.state.currentValue - 1
        })
    }

    plus100Click = () => {
        this.setState({
            currentValue: this.state.currentValue + 100
        })
    }
    minus100Click = () => {
        if (this.state.currentValue <= 100) {
            return this.setState({
                currentValue: 0
            })
        }
        this.setState({
            currentValue: this.state.currentValue - 100
        })
    }

     inputOnChange =(event) => {

            this.setState({
                inputValue: event.target.value
            })
    }

    addFromInput = () => {
        this.setState({
            currentValue: this.state.currentValue + Number(this.state.inputValue),


        })


    }

    render() {

        // console.log(this.state.inputValue)
        return (
            <div className="App">
                <div className={`result`}>
                    {this.state.currentValue}
                </div>
                <div className={`buttons`}>
                    <div className={`counter`}>
                        <button onClick={this.addOneClick}>+1</button>
                        <button onClick={this.minusOneCkick}>-1</button>
                        <button onClick={this.plus100Click}>+100</button>
                        <button onClick={this.minus100Click}>-100</button>
                    </div>
                    <div className={`input`}>
                        <input type="text" onChange={this.inputOnChange}/>
                        <button onClick={this.addFromInput}>add</button>
                    </div>

                </div>
            </div>
        );
    }


}


