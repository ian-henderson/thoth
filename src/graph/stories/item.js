import BaseItem from '../BaseItem';
import { makeCursorFromFields } from '../../utils/Pagination';

class StoryItem extends BaseItem {
  static getTopStories = async ({ dataSources }) => {
    const { topStories } = await dataSources.hackerNewsAPI.getTopStories();

    const edges = topStories.map(doc => ({
      cursor: makeCursorFromFields([doc.time, doc.id]),
      node: new StoryItem(doc),
    }));

    const count = edges.length;
    const hasNextPage = false;
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
