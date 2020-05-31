import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Result} from "./resultComponent/Result";


class App  extends Component{
    state = {
        currentValue : 1
    }



    render() {
        return (
            <div className={`App`}>
                <Result val={this.state.currentValue}/>
            </div>
        )
    }
}
export default App;
