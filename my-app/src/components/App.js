import React from "react";
import axios from "axios";

const fetchElementsForList = () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data);
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetchElementsForList()
            .then((data) => this.setState({ posts: data }))
            .catch((error) => console.error(error));
    }

    removeItem(posts) {
        const newPosts = this.state.posts.filter((newPost) => {
            return newPost !== posts;
        });

        this.setState({
            posts: [...newPosts],
        });
    }

    render() {
        return (
            <div className="col-md-8 offset-md-2">
                <ul className="list-group">
                    {this.state.posts.map((posts) => (
                        <li className="list-group-item" key={posts.id}>
                            <div className="list-group-item">{posts.body}</div>
                            <button
                                className="btn btn-primary"
                                onClick={() => this.removeItem(posts)}
                                type="button"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
