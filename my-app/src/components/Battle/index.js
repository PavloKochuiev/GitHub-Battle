import React from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";

export default class Battle extends React.Component {
    constructor() {
        super();
        this.state = {
            playerOneName: "",
            playerTwoName: "",
            playerOneImage: null,
            playerTwoImage: null,
        };
    }

    handleSubmit = (id, username) => {
        this.setState({
            [id + "Name"]: "username",
            [id + "Image"]: "https://github.com/" + username + ".png?size200",
        });
    };

    handleReset = (id) => {
        this.setState({
            [id + "Name"]: "",
            [id + "Image"]: null,
        });
    };

    render() {
        const { playerOneImage, playerOneName, playerTwoImage, playerTwoName } = this.state;

        return (
            <>
                <div>
                    <div className="row">
                        {!playerOneName ? (
                            <PlayerInput id="playerOne" onSubmit={this.handleSubmit} label="Player 1" />
                        ) : (
                            <PlayerPreview avatar={playerOneImage} username={playerOneName} />
                        )}
                        {!playerTwoName ? (
                            <PlayerInput id="playerTwo" onSubmit={this.handleSubmit} label="Player 2" />
                        ) : (
                            <PlayerPreview avatar={playerTwoImage} username={playerTwoName} />
                        )}
                    </div>
                </div>
                {playerOneName && playerTwoName && (
                    <Link
                        className="button"
                        to={{
                            pathname: this.props.match.url + "/results",
                            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
                        }}
                    >
                        Battle
                    </Link>
                )}
            </>
        );
    }
}
