import React, { Component } from "react";
import Imagecard from './Imagecard';

//Image Imports
import G1One from '../../images/snatch_images/escape_snatch.png';
import G1Two from '../../images/snatch_images/stay_snatch.png';
import G2One from '../../images/snatch_images/subway_snatch.png';
import G2Two from '../../images/snatch_images/forest_snatch.png';
import G3One from '../../images/snatch_images/scary_snatch.png';
import G3Two from '../../images/snatch_images/YBR_snatch.png';
import G4One from '../../images/snatch_images/freebear_snatch.png';
import G4Two from '../../images/snatch_images/water_snatch.png';
import B1One from '../../images/snatch_images/scary_snatch.png';
import B1Two from '../../images/snatch_images/zookeeper_snatch.png';
import B2One from '../../images/snatch_images/forest_snatch.png';
import B2Two from '../../images/snatch_images/cottage_snatch.png';
import B3One from '../../images/snatch_images/honey_snatch.png';
import B3Two from '../../images/snatch_images/mountain_snatch.png';
import B4One from '../../images/snatch_images/join_snatch.png';
import B4Two from '../../images/snatch_images/roar_snatch.png';



class CharacterSelect extends Component {
    constructor(props) {
        super();
        this.activeCharacter = props.activeCharacter;
        this.currentScene = props.currentScene;
        this.state = {
            choiceOneImg: G1One,
            choiceTwoImg: G1Two
        }
        console.log(props);
        console.log("active: ", this.activeCharacter);
        console.log("current: ", this.currentScene);
    }

    componentDidMount() {
        switch (this.activeCharacter) {
            case 0:
                switch (this.currentScene) {
                    case 0:
                        console.log("character 0 scene 0")
                        this.setState({
                            choiceOneImg: G1One,
                            choiceTwoImg: G1Two
                        });
                        break;
                    case 1:
                        this.setState({
                            choiceOneImg: G2One,
                            choiceTwoImg: G2Two
                        });
                        break;
                    case 2:
                        this.setState({
                            choiceOneImg: G3One,
                            choiceTwoImg: G3Two
                        });
                        break;
                    case 3:
                        this.setState({
                            choiceOneImg: G4One,
                            choiceTwoImg: G4Two
                        });
                        break;
                }
                break;
            case 1:
                switch (this.currentScene) {
                    case 0:
                        console.log("character 0 scene 0")
                        this.setState({
                            choiceOneImg: B1One,
                            choiceTwoImg: B1Two
                        });
                        break;
                    case 1:
                        this.setState({
                            choiceOneImg: B2One,
                            choiceTwoImg: B2Two
                        });
                        break;
                    case 2:
                        this.setState({
                            choiceOneImg: B3One,
                            choiceTwoImg: B3Two
                        });
                        break;
                    case 3:
                        this.setState({
                            choiceOneImg: B4One,
                            choiceTwoImg: B4Two
                        });
                        break;
                }
                break;
            case 3:
                switch (this.currentScene) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                }
                break;

        }
        console.log(this.state.choiceOneImg);
    }

    render() {
        return (
            <div>
                <span onClick={() => this.props.handleClick(0)}>
                    <Imagecard imgsrc={this.state.choiceOneImg} />
                </span>
                <span onClick={() => this.props.handleClick(1)}>
                    <Imagecard imgsrc={this.state.choiceTwoImg} />
                </span>
            </div>
        )
    }
}

export default CharacterSelect;