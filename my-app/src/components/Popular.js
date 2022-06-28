import React from "react";
import { fetchPopularRepos } from "../utils/api";

export default class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: "All",
            repos: null,
        };
    }

    componentDidMount() {
        this.fetchPopularReposHandler();
    }

    fetchPopularReposHandler = (language) => {
        fetchPopularRepos(language).then((data) =>
            this.setState({ repos: data }).catch((error) => console.log(error))
        );
    };

    selectLanguage = (language) => {
        this.setState({ selectedLanguage: language });
        this.fetchPopularReposHandler(this.state.selectedLanguage);
    };

    render() {
        const languages = [
            "All",
            "JavaScript",
            "Ruby",
            "Java",
            "CSS",
            "Python",
        ];
        return (
            <div>
                <ul className="languages">
                    {languages.map((language, index) => (
                        <li
                            key={index}
                            style={
                                this.state.selectedLanguage === language
                                    ? { color: "#d0021b" }
                                    : null
                            }
                            onClick={() => this.selectLanguage(language)}
                        >
                            {language}
                        </li>
                    ))}
                </ul>
                <ul className="popular-list">
                    {this.state.repos ? (
                        this.state.repos.map((repo, index) => (
                            <li key={repo.id} className="popular-item">
                                <div className="popular-rank">#{index + 1}</div>
                                <ul className="space-list-items">
                                    <li>
                                        <img
                                            className="avatar"
                                            src={repo.owner.avatar_url}
                                            alt="avatar"
                                        />
                                    </li>
                                    <li>
                                        <a href={repo.html_url}>{repo.name}</a>
                                    </li>
                                    <li>@{repo.owner.login}</li>
                                    <li>{repo.stargazers_count}</li>
                                </ul>
                            </li>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </ul>
            </div>
        );
    }
}
