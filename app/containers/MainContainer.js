import React, { Component } from 'react';
import { remote } from 'electron';

import Stories from '../components/Stories';

import {fetchTopStories, fetchStory} from '../HNHelpers.js';

class MainContainer extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      stories: []
    }
  }

  closeApp() {
    remote.getCurrentWindow().close();
  }

  fetch() {
    this.setState({
      isLoading: true,
    });

    fetchTopStories()
      .then(data => {
        this.setState({
          isLoading: false,
          stories: data
        })
      });
  }

  componentDidMount() {
    fetchTopStories()
      .then(data => {
        this.setState({
          isLoading: false,
          stories: data
        })
      });
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="header mdl-layout__header-row">
            <span className="mdl-layout-title">Hacker News</span>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-button mdl-js-button mdl-button--icon" onClick={this.fetch.bind(this)}>
              <i className="material-icons">refresh</i>
            </div>
            <div className="mdl-button mdl-js-button mdl-button--icon" onClick={this.closeApp}>
              <i className="material-icons">close</i>
            </div>
          </div>
        </header>
        <main className="mdl-layout__content">
          <div className="page-content">
            <Stories
              isLoading={this.state.isLoading}
              stories={this.state.stories}/>
          </div>
        </main>
      </div>
    );
  }
}

export default MainContainer;
