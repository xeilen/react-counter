import React, {Component} from "react";


export class Buttons extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {addOneClick, minusOneClick, add100Click, minus100Click, onInputChange, addFromInputClick, resetClick, value} = this.props

        return (
            <div className={`buttons`}>
                <div className={`counter`}>
                    <button onClick={addOneClick}>+1</button>
                    <button onClick={minusOneClick}>-1</button>
                    <button onClick={add100Click}>+100</button>
                    <button onClick={minus100Click}>-100</button>
                </div>
                <div className={`input`}>
                    <input type="number" onChange={onInputChange} value={value}/>
                    <button onClick={addFromInputClick}>add</button>
                    <button onClick={resetClick}>reset</button>
                </div>

            </div>
        )
    }
}