import React from "react";
import { fetchPopularRepos } from "../../utils/api";
import { SelectedLanguage } from "./SelectedLanguage";
import { Repos } from "./Repos";

export default class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: "All",
            repos: null,
        };
    }

    componentDidMount() {
        this.fetchPopularReposHandler(this.state.selectedLanguage);
    }

    fetchPopularReposHandler = (language) => {
        fetchPopularRepos(language).then((data) =>
            this.setState({ repos: data }).catch((error) => console.log(error))
        );
    };

    selectLanguage = (language) => {
        this.setState({ selectedLanguage: language, repos: null });
        this.fetchPopularReposHandler(language);
    };

    render() {
        return (
            <div>
                <SelectedLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    selectLanguageHandler={this.selectLanguage}
                />
                {this.state.repos ? (
                    <Repos data={this.state.repos} />
                ) : (
                    <p style={{textAlign: "center"}}></p>
                )}
            </div>
        );
    }
}
