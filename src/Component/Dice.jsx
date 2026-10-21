import { Component } from "react";

import face1 from "../img/1.png";
import face2 from "../img/2.png";
import face3 from "../img/3.png";
import face4 from "../img/4.png";
import face5 from "../img/5.png";
import face6 from "../img/6.png";

const faces = {
    1: face1,
    2: face2,
    3: face3,
    4: face4,
    5: face5,
    6: face6
};

class Dice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            face: null,
            cpt: 0,
            end: false
        };
    }

    onRoll = () => {
        if (this.state.end) return;

        const faceValue = Math.floor(Math.random() * 6) + 1;

        this.setState((prevState) => ({
            face: faceValue,
            cpt: prevState.cpt + 1,
            end: prevState.end || faceValue === this.props.cache
        }));
    };

    render() {
        return (
            <div>

                <h2>Dice Roll</h2>

                {this.state.face !== null && (
                    <img
                        src={faces[this.state.face]}
                        alt={`Face ${this.state.face}`}
                        width="150"
                    />
                )}

                <p>Face: {this.state.face}</p>

                <p>Tentative: {this.state.cpt}</p>
                {
                    this.state.end ? (
                    <p>Congratulations! You rolled a {this.props.cache}!</p>
                ) :
                <button onClick={this.onRoll}>
                    Roll Dice
                </button>
                }
            </div>
        );
    }
}

export default Dice;