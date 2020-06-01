import React, {Component} from "react";
import './styleResult.css'

export class Result extends Component{
constructor(props) {
    super(props);
}

    render() {
    const {val} = this.props
        return (
            <div className={`result`}>
                <div>{val}</div>
            </div>
        )
    }
}