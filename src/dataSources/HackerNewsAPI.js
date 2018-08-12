import { RESTDataSource } from 'apollo-datasource-rest';

class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://hacker-news.firebaseio.com/v0/';
  }

  async getTopStories() {
    const topStoryIds = await this.get('topstories.json');
    return Promise.all(
      topStoryIds.map(id => this.get(`item/${id}.json`)),
    );
  }
}

export default HackerNewsAPI;
