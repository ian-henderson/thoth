import { RESTDataSource } from 'apollo-datasource-rest';

class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://hacker-news.firebaseio.com/v0/';
  }

  async getTopStories() {
    const topStoryIds = await this.get('topstories.json');
    const storyRequests = topStoryIds.map(id => this.get(`item/${id}.json`));

    const topStories = await Promise.all(storyRequests);

    return { topStories };
  }
}

export default HackerNewsAPI;
