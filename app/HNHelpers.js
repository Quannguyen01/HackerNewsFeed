const base_url = 'https://hacker-news.firebaseio.com/v0'

export function fetchTopStories() {
  return fetch(`${base_url}/topstories.json`)
  .then(response => response.json())
  .then(json => json.slice(0,29))
  .then(storyIds => {
    return Promise.all(storyIds.map(storyId => fetchStory(id)));
  })
  .catch(response => {
    console.log(response);
    return [];
  });
}

export function fetchStory(id) {
  return fetch(`${base_url}/item/${id}.json`)
  .then(response => response.json())
  .then(json => json)
  .catch(response => {
    console.error(`${id}: ${response}`);
    return null;
  });
}
