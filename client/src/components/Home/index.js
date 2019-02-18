import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super();
        console.log(props.currentUser)
        this.username = props.currentUser;
        this.score = props.passState.points;
        this.unlockedCharacters = props.passState.unlockedCharacters;
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <h2>Welcome {this.username}</h2>
                <h3>Your Highest Score: {this.score}</h3>
                <h3>Your Unlocked Characters: {this.unlockedCharacters}</h3>
                <span onClick={() => this.props.handleHomePage ()}>
                <button>Click to Play Game</button>
                </span>
            </div>
        )
    }

}

export default Home;