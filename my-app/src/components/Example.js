import React from "react";

class Example extends React.Component {
    constructor() {
        super();
        this.state = {
            country: "Ukraine"
        }
    }

    changeNameHandler = () => {
        if (this.state.country === "Ukraine") { 
            this.setState({country: "Ukraine is the best country"}) 
        } else {
            this.setState({country: "Ukraine"})
        }
        
    }

    render() {
        return (
            <div>
                <p>{this.state.country}</p>
                <button onClick={this.changeNameHandler} className="button">Upgrade</button>
            </div>
        )
    }
}

export default Example;