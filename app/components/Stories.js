import React, { Component } from 'react';

import { shell } from 'electron';

class Stories extends Component {

  openLink(item, e){
    e.preventDefault();
    shell.openExternal(item.url);
  }

  render() {
    const storyList = this.props.stories.length === 0
      ? <div>Failed to fetch</div>
      : this.props.stories.map(story =>
            <li className="story mdl-list__item" key={story.id}>
              <div className="mdl-list__item primary-content" onClick={this.openLink.bind(this, story)}>
                <a>{story.title}</a> - {story.by}
              </div>
            </li>
        );

    return (
      this.props.isLoading === true
      ? <div className="progress-bar mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
      : <ul className="mdl-list">
          {storyList}
        </ul>
    );
  }
}

export default Stories;
