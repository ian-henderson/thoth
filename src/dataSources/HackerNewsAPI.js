import { RESTDataSource } from 'apollo-datasource-rest';

class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://hacker-news.firebaseio.com/v0/';
  }

  async getTopStories() {
    return this.get('topstories.json');
  }
}

export default HackerNewsAPI;
