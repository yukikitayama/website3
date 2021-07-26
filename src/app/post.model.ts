export class Post {
  public title: string;
  public category: string;
  public date: string;
  public description: string;
  public id?: string;

  constructor(title: string, category: string, date: string, description: string, id?: string) {
    this.title = title;
    this.category = category;
    this.date = date;
    this.description = description;
    this.id = id;
  }
}