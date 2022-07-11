import { useEffect } from "react";
import { useState } from "react";

const PlayerInput = (props) => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        console.log("trigger");
    }, [username]);

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(props.id, username);
    };


    return (
        <form className="column" onSubmit={handleSubmit}>
            <label className="header" htmlFor="username">
                {props.label}
            </label>
            <input
                id="username"
                type="text"
                placeholder="GitHub Username"
                autoComplete="off"
                value={username}
                onChange={handleChange}
            ></input>
            <button className="button" type="submit" disabled={!username}>
                Submit
            </button>
        </form>
    );
};

export default PlayerInput;



// same but with class components:

// import React from "react";

// class PlayerInput extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "",
//         };
//     }

// handleChange = (event) => {
//     this.setState({ username: event.target.value });
// };

// handleSubmit = (event) => {
//     event.preventDefault();
// };

//     render() {
//         return (
// <form className="column" onSubmit={this.handleSubmit}>
//     <label className="header" htmlFor="username">
//         {this.props.label}
//     </label>
//     <input
//         id="username"
//         type="text"
//         placeholder="GitHub Username"
//         autoComplete="off"
//         value={this.state.username}
//         onChange={this.handleChange}
//     ></input>
//     <button className="button" type="submit" disabled={!this.state.username }>
//         Submit
//     </button>
// </form>
//         );
//     }
// }

// export default PlayerInput;
