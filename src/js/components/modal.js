/* eslint-disable */
import React, { Component } from "react";

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            title: "title test",
        };
    }

    render() {
       console.log( this.props )
        return (
            <div className="myModal">
            <div className="icon" onClick={this.props.onClose}>x</div>
            <div className="message">{this.props.message}</div>
            </div>
        );
    }
}

export default Modal;
