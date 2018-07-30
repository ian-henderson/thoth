class BaseItem {
  constructor(data) {
    this.id = data.id;
    this.deleted = data.deleted;
    this.type = data.type;
    this.by = data.by;
    this.time = data.time;
    this.text = data.text;
    this.dead = data.dead;
    this.parent = data.parent;
    this.poll = data.poll;
    this.kids = data.kids;
    this.url = data.url;
    this.score = data.score;
    this.title = data.title;
    this.parts = data.parts;
    this.descendants = data.descendants;
  }
}

export default BaseItem;
