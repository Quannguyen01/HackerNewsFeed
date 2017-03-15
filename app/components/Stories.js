import React, { Component, PropTypes } from 'react';

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
            <li className="mdl-list__item" key={story.id}>
                <div className="mdl-list__item-primary-content">
                    <div className="story">
                        <div className="title"><a href="#" onClick={this.openLink.bind(this, story)}>{story.title}</a></div>
                        <div className="info mdl-color-text--grey-600">
                            {story.score} points by {story.by} | {story.descendants} comments
                        </div>
                    </div>
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

Stories.propTypes = {
    stories: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Stories;
