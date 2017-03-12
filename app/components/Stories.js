import React, { Component } from 'react';

import { shell } from 'electron';

class Stories extends Component {

  openLink(item, e){
    e.preventDefault();
    shell.openExternal(item.url);
  }

  render() {
    const storyList = this.props.stories.map(story =>
      <div className="story" key={story.id}>
        <a href={story.url} onClick={this.openLink.bind(this, story)}>{story.title}</a> by {story.by}
      </div>
    );

    return (
      this.props.isLoading === true
      ? <div>Loading...</div>
      : <div>
        {storyList}
      </div>
    );
  }
}

export default Stories;
