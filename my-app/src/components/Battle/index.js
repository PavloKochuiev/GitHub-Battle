import React, { useState } from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";

const Battle = (props) => {
    const [playerOneName, setPlayerOneName] = useState("");
    const [playerTwoName, setPlayerTwoName] = useState("");
    const [playerOneImage, setPlayerOneImage] = useState(null);
    const [playerTwoImage, setPlayerTwoImage] = useState(null);

    const handleSubmitOne = (username) => {
        setPlayerOneName(username);
        setPlayerOneImage("https://github.com/" + username + ".png?size200");
    };

    const handleSubmitTwo = (username) => {
        setPlayerTwoName(username);
        setPlayerTwoImage("https://github.com/" + username + ".png?size200");
    };

    return (
        <>
            <div>
                <div className="row">
                    {!playerOneName ? (
                        <PlayerInput id="playerOne" onSubmit={handleSubmitOne} label="Player 1" />
                    ) : (
                        <PlayerPreview avatar={playerOneImage} username={playerOneName} />
                    )}
                    {!playerTwoName ? (
                        <PlayerInput id="playerTwo" onSubmit={handleSubmitTwo} label="Player 2" />
                    ) : (
                        <PlayerPreview avatar={playerTwoImage} username={playerTwoName} />
                    )}
                </div>
            </div>
            {playerOneName && playerTwoName && (
                <Link
                    className="button"
                    to={{
                        pathname: props.match.url + "/results",
                        search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
                    }}
                >
                    Battle
                </Link>
            )}
        </>
    );
};

export default Battle;
