import {shell} from 'electron';
import {fetchTopStories, fetchStory} from './HNHelpers.js';

const wrapper = document.querySelector(".wrapper");
const board = wrapper.querySelector("#board");

function display(stories) {

  let list = '';
  stories.forEach(story => {
    const content = `
      <div class="story">
        <a href="${story.url}">${story.title}</a> by ${story.by}
      </div>
    `;
    // const content = `
    //   <some-custom-element ${story.url} ${story.title} ${story.by}>
    // `;
    list = list + content;
  });

  board.innerHTML = list;

  const storiesDOM = document.querySelectorAll(".story");
  storiesDOM.forEach(story => story.addEventListener('click', openLink));
}

function openLink(e){
  e.preventDefault();
  shell.openExternal(this.querySelector('a').href);
}

function showStories() {

  board.innerHTML = "Loading...";

  fetchTopStories()
  .then(data => {
    if (data.length > 0){
        display(data);
    }
  });
}

window.onload = showStories;
