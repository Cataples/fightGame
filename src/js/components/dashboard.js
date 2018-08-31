/* eslint-disable */
import React, { Component } from "react";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            title: "play-board",
            users: [
                {
                    username: "Unlimited Warlord",
                    level: 12,
                    experience: 30,
                    life: 200,
                    attack: 50,
                    defence: 20,
                },
                {
                    username: "Infinit Uzurpator",
                    level: 10,
                    experience: 36,
                    life: 180,
                    attack: 57,
                    defence: 10,
                },
                {
                    username: "Cola DIstrugatoruul",
                    level: 122,
                    experience: 40,
                    life: 20,
                    attack: 19,
                    defence: 20,
                },
            ],
        };
    }

    attack() {
        alert("attacked!!!");
    }

    render() {
        const { title, users } = this.state;

        return (
            <div className="Container">
                <h1>{title}</h1>
                <div className="Header">Header</div>
                <div className="Content">
                    {users.map((user, index) => (
                        <span key={index} onClick={this.attack}>
                            <p>username: {user.username}</p>
                            <p>level: {user.level}</p>
                            <p>exp: {user.experience}</p>
                            <p>HP: {user.life}</p>
                            <p>DMG: {user.attack}</p>
                            <p>DEF: {user.defence}</p>
                        </span>
                    ))}{" "}
                </div>
            </div>
        );
    }
}

export default Layout;
