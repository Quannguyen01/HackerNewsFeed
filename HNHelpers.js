const HNHelpers = {};

const base_url = 'https://hacker-news.firebaseio.com/v0'

HNHelpers.fetchTopStories = function(){
  return fetch(`${base_url}/topstories.json`)
  .then(response => response.json())
  .then(json => json.slice(0,29))
  .catch(response => {
    console.log(response);
    return [];
  });
}

HNHelpers.fetchStory = function(id){
  return fetch(`${base_url}/item/${id}.json`)
  .then(response => response.json())
  .then(json => json)
  .catch(response => {
    console.error(`${id}: ${response}`);
    return null;
  });
}

module.exports = HNHelpers;
