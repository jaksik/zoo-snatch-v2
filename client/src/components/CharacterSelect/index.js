import React, { Component } from "react";
import Imagecard from './Imagecard';

//image imports
import GiraffeStatic from '../../images/characters/static/static_giraffe.png';
import BearStatic from '../../images/characters/static/static_bear.png';
import MonkeyStatic from '../../images/characters/static/static_monkey.png';
import BearCaged from '../../images/characters/caged/caged_bear.png';
import MonkeyCaged from '../../images/characters/caged/caged_monkey.png';

class CharacterSelect extends Component {
    constructor(props) {
        super();
        this.unlockedCharacters = props.unlockedCharacters;
        this.state = {
            giraffeImg: GiraffeStatic,
            bearImg: BearCaged,
            monkeyImg: MonkeyCaged
        }
    }

    componentDidMount() {
        console.log("CHARACTER SELECT unlocked characters: ", this.unlockedCharacters);
        if (this.unlockedCharacters === 1) {
            this.setState({bearImg: BearStatic})
        }
        if (this.unlockedCharacters === 2) {
            this.setState({
                bearImg: BearStatic,
                monkeyImg: MonkeyStatic
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Select A Character to Play Game</h2>
                <span onClick={() => this.props.handleCharacterSelect (0)}>
                    <Imagecard imgsrc={this.state.giraffeImg} />
                </span>
                <span onClick={() => this.props.handleCharacterSelect (1)}>
                    <Imagecard imgsrc={this.state.bearImg} />
                </span>
                <span onClick={() => this.props.handleCharacterSelect (2)}>
                    <Imagecard imgsrc={this.state.monkeyImg} />
                </span>
            </div>
        )
    }

}

export default CharacterSelect;