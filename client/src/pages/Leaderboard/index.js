import React from "react";
import { Col, Row, Container } from "reactstrap";
import API from "../../utils/API";

//#ONE add score to user model
//#TWO api call to data base
//#THREE render top 5 scores on componentDidMount


class Leaderboard extends React.Component {
    state = {
        scoreData: [],
        lastScore: {}
    }

    componentDidMount() {
        this.getUserScore();
        // console.log(data);
    }

    getUserScore = () => {
        API.getScores()
            .then(scoreData => {
                console.log(scoreData.data[scoreData.data.length - 1]);
                let lastScore = scoreData.data[scoreData.data.length - 1]
                this.setState({
                    scoreData: scoreData.data,
                    lastScore: lastScore
                })
                console.log(this.state.scoreData);
            })
            .catch(err => console.log(err));
        // console.log(scoreData);
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">ZooSnatch</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <h2 id="scoreBanner" className="leaderboard">Your Score:</h2>
                        <h3><span id="individualScore">
                            <p> {this.state.lastScore.score}</p>
                        </span></h3>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <h2 className="leaderboard">Leaderboard</h2>
                        {this.state.scoreData.map(score => (
                            <h3 key={score._id}>{score.username}: {score.score}</h3>
                        ))}
                    </Col>
                </Row>
                <footer className="fixed-bottom text-center">
                    <div className="container">
                        <a href="/game"> <button>Play Game</button></a>
                        <a href="/contact"><button>Contact</button></a>
                    </div>
                </footer>
            </Container>
        );
    };
}

export default Leaderboard;


