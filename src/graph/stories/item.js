import BaseItem from '../BaseItem';
import { makeCursorFromFields } from '../../utils/Pagination';

class StoryItem extends BaseItem {
  static LIMIT = 10;

  static getTopStories = async (
    { first = StoryItem.LIMIT, after },
    { dataSources },
  ) => {
    const { limit, topStories } = await dataSources.hackerNewsAPI
      .getTopStories(first, after);

    const edges = topStories.map(doc => ({
      cursor: makeCursorFromFields([doc.time, doc.id]),
      node: new StoryItem(doc),
    }));

    const count = edges.length;
    const hasNextPage = edges.length === limit; // TODO: fix the logic here
    const endCursor = hasNextPage ? edges[count - 1].cursor : null;

    return {
      count,
      edges,
      pageInfo: {
        hasNextPage,
        endCursor,
      },
    };
  }
}

export default StoryItem;
