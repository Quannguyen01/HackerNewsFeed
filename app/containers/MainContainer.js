import React, { Component } from 'react';
import { remote } from 'electron';

import Stories from '../components/Stories';
import NavigationFooter from '../components/NavigationFooter';

import { fetchTopStories } from '../HNHelpers.js';

class MainContainer extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            stories: [],
            page: 0,
        };
    }

    closeApp() {
        remote.getCurrentWindow().close();
    }

    fetch(page, event) {
        event.preventDefault();

        this.setState({
            isLoading: true,
        });

        fetchTopStories(page)
        .then(data => {
            this.setState({
                isLoading: false,
                stories: data,
                page: page,
            });
        });
    }

    componentDidMount() {
        fetchTopStories()
        .then(data => {
            this.setState({
                isLoading: false,
                stories: data,
                page: 0,
            });
        });
    }

    render() {
        return (
            <div className="mdl-layout__container">
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <header className="mdl-layout__header">
                        <div className="header mdl-layout__header-row">
                            <span className="mdl-layout-title">Hacker News</span>
                            <div className="mdl-layout-spacer"></div>
                            <div className="icons mdl-button mdl-js-button mdl-button--icon" onClick={this.fetch.bind(this, this.state.page)}>
                                <i className="material-icons">refresh</i>
                            </div>
                            <div className="icons mdl-button mdl-js-button mdl-button--icon" onClick={this.closeApp}>
                                <i className="material-icons">close</i>
                            </div>
                        </div>
                    </header>
                    <main className="mdl-layout__content">
                        <div className="page-content">
                            <Stories
                                isLoading={this.state.isLoading}
                                stories={this.state.stories}/>
                            <NavigationFooter
                                isLoading={this.state.isLoading}
                                page={this.state.page}
                                loadPage={this.fetch.bind(this)}/>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default MainContainer;
