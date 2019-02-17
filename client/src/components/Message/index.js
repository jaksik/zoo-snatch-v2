import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Story from '../../characters.json';



class Message extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.activeCharacter = props.activeCharacter;
        this.currentScene = props.currentScene;
        this.decisionMade = props.decisionMade;
        this.correctDecision = props.correctDecision;
        this.state = {
            message: Story[this.activeCharacter].scene[this.currentScene].question
        }
    }

    componentDidMount() {
        if (this.decisionMade && !this.correctDecision) {
            this.setState({message: Story[this.activeCharacter].scene[this.currentScene].answerFalse})
        } else if (this.decisionMade && this.correctDecision) {
            this.setState({message: Story[this.activeCharacter].scene[this.currentScene].answerTrue})
        } else {
            this.setState({message: Story[this.activeCharacter].scene[this.currentScene].question})
        }
        
    }

    render() {
        return (
            <Container>
                <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}> <p>{this.state.message}</p></Col>

                </Row>
                <button onClick={() => this.props.handleClick(1)}>{this.decisionMade ? "Click to Continue" : "Click to Make Decision"}</button>
            </Container>
        )
    }
}

export default Message;