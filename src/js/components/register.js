import React, { Component } from "react";
import PropTypes from "prop-types";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            title: "Register",
        };
        this.sendData = this.sendData.bind( this );
    }

    sendData( event ) {
        const { history } = this.props;
        event.preventDefault();
        console.log( this.username.value, this.password.value );
        console.log( this.charClass.value );

        history.push( "/dashboard" );
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <form>
                    <input
                        placeholder="Username"
                        ref={ element => {
                            this.username = element;
                        } }
                    />{" "}
                    Username <br />
                    <input
                        placeholder="Password"
                        ref={ element => {
                            this.password = element;
                        } }
                    />{" "}
                    Password <br />
                    <select
                        ref={ element => {
                            this.charClass = element;
                        } }
                    >
                        <option>Knight</option>
                        <option>Soldier</option>
                        <option>Wizzard</option>
                        <option>Priest</option>
                        <option>Archer</option>
                    </select>
                    <button type="submit" onClick={ this.sendData }>
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    history: PropTypes.object.isRequired, // eslint-disable-line
};

export default Register;
