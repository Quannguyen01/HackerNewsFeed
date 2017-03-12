import React, { Component } from 'react';

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
        <header className="header mdl-layout__header">
          <span className="mdl-layout-title">Hacker News</span>
        </header>
        <Stories
          isLoading={this.state.isLoading}
          stories={this.state.stories}/>
      </div>
    );
  }
}

export default MainContainer;
