import React, { Component } from 'react'
import Spin from './Spin.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={Spin} alt="spin" />
            </div>
        )
    }
}
