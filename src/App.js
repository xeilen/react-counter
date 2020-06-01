import React, {Component} from 'react';
import './App.css';
import {Result} from "./resultComponent/Result";
import {Buttons} from "./buttonsComponent/Buttons";


class App extends Component {
    state = {
        currentValue: 0,
        inputValue: 0
    }

    addOneClick = () => this.setState({currentValue: this.state.currentValue + 1})

    add100Click = () => this.setState({currentValue: this.state.currentValue + 100})

    minusOneClick = () => this.state.currentValue <= 0 ? null : this.setState({currentValue: this.state.currentValue - 1})

    minus100Click = () => this.state.currentValue <= 100 ?
        this.setState({currentValue: 0}) :
        this.setState({currentValue: this.state.currentValue - 100})

    onInputChange = (event) => this.setState({inputValue: event.target.value})

    addFromInputClick = async () => {
        await this.setState({currentValue: this.state.currentValue + Number(this.state.inputValue)})
        this.state.currentValue < 0 ? this.resetClick() : this.setState({currentValue: this.state.currentValue})

    }

    resetClick = () => this.setState({currentValue: 0, inputValue: 0})


    render() {
        console.log('inputVal ' + Number(this.state.inputValue))
        console.log('curVal ' + Number(this.state.currentValue))
        return (
            <div className={`App`}>
                <Result val={this.state.currentValue} reset={this.resetClick}/>
                <Buttons addOneClick={this.addOneClick}
                         minusOneClick={this.minusOneClick}
                         add100Click={this.add100Click}
                         minus100Click={this.minus100Click}
                         onInputChange={this.onInputChange}
                         addFromInputClick={this.addFromInputClick}
                         resetClick={this.resetClick}
                         value={this.state.inputValue}/>

                <footer>
                    counter 2.0 by Nazar Kovalenko :D
                </footer>
            </div>
        )
    }
}

export default App;
