import { RESTDataSource } from 'apollo-datasource-rest';

class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://hacker-news.firebaseio.com/v0/';
  }

  async getTopStories(first, after = 0) {
    const topStoryIds = await this.get('topstories.json');

    const stories = topStoryIds
      .slice(after, after + first)
      .map(id => this.get(`item/${id}.json`));

    const limit = topStoryIds.length;
    const topStories = await Promise.all(stories);

    return {
      limit,
      topStories,
    };
  }
}

export default HackerNewsAPI;
