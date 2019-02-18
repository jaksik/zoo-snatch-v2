import React, { Component } from 'react';
import Story from '../../characters.json';
import API from '../../utils/API';

//Import core game play components
import Home from '../../components/Home';
import CharacterSelect from '../../Components/CharacterSelect';
import Message from '../../Components/Message';
import Bandersnatch from '../../Components/Bandersnatch';
import Canvas from '../../Components/Canvas';


class Gameplay extends Component {
    state = {
        currentUser: "",
        unlockedCharacters: 0,
        activeCharacter: 0,

        currentScene: 0,
        currentPage: 2,

        decisionMade: false,
        correctDecision: false,

        points: 0
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = () => {
        API.getUserData()
            .then(userData => {
                let username = userData.data[0].username;
                console.log("username: ", username)
                let unlocked = userData.data[0].unlocked;
                let savedPoints = userData.data[0].score;
                this.setState({ 
                    currentUser: username,
                    unlockedCharacters: unlocked,
                    points: savedPoints,
                    currentPage: -1
                })
                console.log("this.currentuser: ", this.state.currentUser)
            })
            .catch(err => console.log(err));
    }

    handleHomePage = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }

    handleCharacterSelect = (selectedCharacter) => {
        if (selectedCharacter > this.state.unlockedCharacters) {
            alert("You must select an unlocked character");
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
        } else if (this.state.decisionMade === true) {
            this.setState({
                currentPage: this.state.currentPage + 2,
            });
        } else {
            this.setState({
                currentPage: this.state.currentPage + 1,
                points: this.state.points + 100
            });
        }
    }

    handleSnatchChoice = (res) => {
        let correctAnswer = Story[this.state.activeCharacter].scene[this.state.currentScene].correct;
        this.setState({decisionMade: true});
        if (res === correctAnswer) {
            this.setState({
                currentPage: this.state.currentPage - 1,
                correctDecision: true
            })
        } else {
            this.setState({correctDecision: false});
        }
    }

    handleCanvasUpdate = (res) => {
        this.setState({
            currentPage: 1,
            currentScene: this.state.currentScene += 1,
            decisionMade: false
        })
    }

    gameOver() {
        API.updateUserData({
            username: this.state.currentUser,
            points: this.state.points,
            unlocked: this.state.unlockedCharacters + 1
          }).then(() => {
              window.location.href = "/leaderboard";            
        })
    }

    render() {
        return (
            <div>
                {/*=== home screen ===*/}
                {this.state.currentPage === -1 && <Home
                    currentUser={this.state.currentUser}
                    passState={this.state}
                    handleHomePage={this.handleHomePage.bind(this)}
                />}
                {/*=== character select screen ===*/}
                {this.state.currentPage === 0 && <CharacterSelect
                    unlockedCharacters={this.state.unlockedCharacters}
                    handleCharacterSelect={this.handleCharacterSelect.bind(this)}
                />}
                {/*=== message screen ===*/}
                {this.state.currentPage === 1 && <Message
                    activeCharacter={this.state.activeCharacter}
                    currentScene={this.state.currentScene}
                    decisionMade={this.state.decisionMade}
                    correctDecision={this.state.correctDecision}
                    handleClick={this.handleMessagePageClicks.bind(this)}
                />}
                {/*=== bandersnatch screen ===*/}
                {this.state.currentPage === 2 && <Bandersnatch
                    activeCharacter={this.state.activeCharacter}
                    currentScene={this.state.currentScene}
                    passState={this.state}
                    handleClick={this.handleSnatchChoice.bind(this)}
                />}
                {/*=== canvas screen ===*/}
                {this.state.currentPage === 3 && <Canvas
                    currentScene={this.state.currentScene}
                    handleCanvasUpdate={this.handleCanvasUpdate.bind(this)}
                />}
            </div>
        );
    }
}

export default Gameplay;
