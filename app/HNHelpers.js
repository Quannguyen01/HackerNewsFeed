const base_url = 'https://hacker-news.firebaseio.com/v0';

export function fetchTopStories(page=0) {
    return fetch(`${base_url}/topstories.json`)
        .then(response => response.json())
        .then(json => json.slice(30*page, 30*(page+1)))
        .then(storyIds => {
            return Promise.all(storyIds.map(storyId => fetchStory(storyId)));
        })
        .catch(() => {
            return [];
        });
}

export function fetchStory(id) {
    return fetch(`${base_url}/item/${id}.json`)
        .then(response => response.json())
        .then(json => json)
        .catch(() => {
            return null;
        });
}
