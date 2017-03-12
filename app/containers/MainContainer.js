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
      <div>
        <h1>Hacker News</h1>
        <Stories
          isLoading={this.state.isLoading}
          stories={this.state.stories}/>
      </div>
    );
  }
}

export default MainContainer;
