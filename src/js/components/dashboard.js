/* eslint-disable */
import React, { Component } from "react";

import Logout from "./logout";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    username: "Unlimited Warlord",
                    level: 12,
                    experience: 30,
                    life: 200,
                    attack: 50,
                    defence: 20,
                    image: "https://wallpaperbrowse.com/media/images/750795.jpg",
                },
                {
                    username: "Infinit Uzurpator",
                    level: 10,
                    experience: 36,
                    life: 180,
                    attack: 57,
                    defence: 10,
                    image: "https://wallpaperbrowse.com/media/images/750795.jpg",
                },
                {
                    username: "Cola DIstrugatoruul",
                    level: 122,
                    experience: 40,
                    life: 20,
                    attack: 19,
                    defence: 20,
                    image: "https://wallpaperbrowse.com/media/images/750795.jpg",
                },
            ],
        };
    }

    attack() {
        alert("attacked!!!");
    }

    render() {
        const { users } = this.state;

        return (
            <div className="container">
                <div className="content">
                    {users.map((user, index) => (
                        <div className="playerListContainer" key={index}>
                            <div><img src={user.image} className="profilePic" /></div>
                            <div className="username"> {user.username}</div>
                            <div className="stats">level: {user.level}</div>
                            <div className="stats">exp: {user.experience}</div>
                            <div className="stats">HP: {user.life}</div>
                            <div className="stats">DMG: {user.attack}</div>
                            <div className="stats">DEF: {user.defence}</div>
                            <button onClick={this.attack}>Attack</button>
                        </div>
                    ))}{" "}
                </div>
            </div>
        );
    }
}

export default Layout;
