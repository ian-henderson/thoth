class BaseItem {
  constructor(doc) {
    this.id = doc.id;
    this.deleted = doc.deleted;
    this.type = doc.type;
    this.by = doc.by;
    this.time = doc.time;
    this.text = doc.text;
    this.dead = doc.dead;
    this.parent = doc.parent;
    this.poll = doc.poll;
    this.kids = doc.kids;
    this.url = doc.url;
    this.score = doc.score;
    this.title = doc.title;
    this.parts = doc.parts;
    this.descendants = doc.descendants;
  }
}

export default BaseItem;
