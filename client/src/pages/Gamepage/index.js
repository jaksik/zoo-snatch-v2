import React, { Component } from 'react';
import Story from '../../characters.json';
import API from '../../utils/API';

//Import core game play components
import CharacterSelect from '../../Components/CharacterSelect';
import Message from '../../Components/Message';
import Bandersnatch from '../../Components/Bandersnatch';
import Canvas from '../../Components/Canvas';

class Gameplay extends Component {
    state = {
        currentUser: "",
        unlockedCharacters: 0,
        activeCharacter: 0,
        currentScene: 3,
        currentPage: 1,
        points: 0
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = () => {
        API.getUserData()
            .then(userData => {
                console.log(userData);
                let username = userData.data[0].username;
                let unlocked = userData.data[0].unlocked;
                console.log("let unlocked: ", unlocked);
                let savedPoints = userData.data[0].score;
                this.setState({ 
                    currentUser: username,
                    unlockedCharacters: unlocked,
                    points: savedPoints,
                    currentPage: 0
                })
                console.log("username: ", this.state.currentUser);
                console.log("user unlocked characters: ", this.state.unlockedCharacters);
                console.log("user points: ", this.state.points);
            })
            .catch(err => console.log(err));
    }

    handleCharacterSelect = (selectedCharacter) => {
        if (selectedCharacter > this.state.unlockedCharacters) {
            alert("You must select an unlocked character and play the game to unlock this character");
        } else {
            this.setState({
                activeCharacter: selectedCharacter,
                currentPage: this.state.currentPage + 1
            });
        }
    }

    handleMessagePageClicks = (res) => {
        if (this.state.currentScene === 3) {
            this.setState({ currentPage: this.state.unlockedCharacters + 1 });
            this.gameOver();
        } else {
            this.setState({
                currentPage: this.state.currentPage + 1,
                points: this.state.points + 100
            });
            console.log("Points: ", this.state.points)
        }
    }

    handleSnatchChoice = (res) => {
        let correctAnswer = Story[this.state.activeCharacter].scene[this.state.currentScene].correct;
        if (res === correctAnswer) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        } else {
            console.log("you loose")
        }
    }

    handleCanvasUpdate = (res) => {
        this.setState({
            currentPage: 1,
            currentScene: this.state.currentScene += 1
        })
        console.log("current page: ", this.state.currentPage)
    }

    gameOver() {
        API.updateUserData({
            username: this.state.currentUser,
            points: this.state.points,
            unlocked: this.state.unlockedCharacters + 1
          }).then(() => {
              console.log("points update sucessful");
              window.location.href = "/leaderboard";            
        })
    }

    render() {
        return (
            <div>
                {/*=== character select screen ===*/}
                {this.state.currentPage === 0 && <CharacterSelect
                    unlockedCharacters={this.state.unlockedCharacters}
                    handleCharacterSelect={this.handleCharacterSelect.bind(this)}
                />}
                {/*=== character select screen ===*/}
                {this.state.currentPage === 1 && <Message
                    activeCharacter={this.state.activeCharacter}
                    currentScene={this.state.currentScene}
                    handleClick={this.handleMessagePageClicks.bind(this)}
                />}
                {/*=== character select screen ===*/}
                {this.state.currentPage === 2 && <Bandersnatch
                    activeCharacter={this.state.activeCharacter}
                    currentScene={this.state.currentScene}
                    handleClick={this.handleSnatchChoice.bind(this)}
                />}

                {/*=== character select screen ===*/}
                {this.state.currentPage === 3 && <Canvas
                    handleCanvasUpdate={this.handleCanvasUpdate.bind(this)}
                />}
            </div>
        );
    }
}

export default Gameplay;
