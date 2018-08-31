/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import loginService from "../services/loginService";

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "title test",
        };
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleSubmit( event ) {
        event.preventDefault();
        loginService.loginService( this.username.value, this.password.value );
        // this.props.history.push( "/dashboard" );
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit } className="form">
                <label>Username
                    <input type="text" name="username" ref={node => (this.username = node)} />
                </label>
                <label control="">Password
                    <input type="password" password="password" ref={node => (this.password = node)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

LoginForm.PropTypes = {
    history: PropTypes.object.isRequired, // eslint-disable-line
};

export default LoginForm;
