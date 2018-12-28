export class BookModel implements IBook {
  id: number;
  author: string;
  title: string;
  publish_year: number;

  constructor(id: number, author: string, title: string, publish_year: number) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.publish_year = publish_year;
  }
}

interface IBook {
  id: number;
  author: string;
  title: string;
  publish_year: number;
}
