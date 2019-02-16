import React, { Component } from "react";
import Story from '../../characters.json';



class Message extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.activeCharacter = props.activeCharacter;
        this.currentScene = props.currentScene;
        this.message = Story[this.activeCharacter].scene[this.currentScene].question;
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <h3>{this.message}</h3>
                <button onClick={() => this.props.handleClick(1)}>Click to Make a Decision</button>
            </div>
        )
    }
}

export default Message;