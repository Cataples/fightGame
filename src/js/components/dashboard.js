import React, { Component } from "react";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            title: "play-board",
            users: [ "user1", "user2", "user3" ],
        };
    }

    render() {
        const { title, users } = this.state;

        return (
            <div className="Container">
                <h1>{title}</h1>
                <div className="Header">Header</div>
                <div className="Content">
                    {users.map( ( user, index ) => <p key={ index }>{user}</p> )}{" "}
                </div>
            </div>
        );
    }
}

export default Layout;
