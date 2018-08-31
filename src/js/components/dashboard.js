/* eslint-disable */
import React, { Component } from "react";
import attackService from "../services/attackService"
import Logout from "./logout";
import Modal from "./modal"

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false,
            message:undefined,
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
        this.hideModal = this.hideModal.bind(this)
    }

    hideModal() {
        console.log("in hide modal")
        this.setState({isModalVisible:false})
    }

    attack(myUser, attackedId) {
        attackService(myUser,attackedId).then(res=>{
            console.log(res)
            this.setState( { isModalVisible: true } );
            this.setState({message:res.story.you})
            this.setState({enemyMessage:res.story.enemy})
        });
    }

    render() {
        console.log(this.state.isModalVisible,"modal visible")
        const { users } = this.state;
        const myUser = localStorage.getItem("userId")
        return (
            <div className="container">
            { this.state.isModalVisible && <Modal message={this.state.message} enemyMessage={this.state.enemyMessage} onClose={this.hideModal}/>}
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
                            <button onClick={() => this.attack(myUser, user._id)}>Attack</button>
                        </div>
                    ))}{" "}
                </div>
            </div>
        );
    }
}

export default Layout;
