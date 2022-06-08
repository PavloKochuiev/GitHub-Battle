import React from "react";
import Example from "./Example"

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            country: "Ukraine"
        }
    }

    changeNameHandler = () => {
        if (this.state.country === "Ukraine") {
            this.setState({ country: "Ukraine is the best country" })
        } else {
            this.setState({ country: "Ukraine" })
        }
    }

    render() {
        return (
            <div className="section">
                <div className="title">
                <Example message={this.state.country} />
                <button onClick={this.changeNameHandler} className="button">Upgrade</button>
                </div>
            </div>
        )   
    }
}

export default App;
