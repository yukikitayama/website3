import { EventEmitter } from "@angular/core";
import { Post } from "./post.model";

export class PostService {
  postSelected = new EventEmitter<Post>();

  private posts: Post[] = [
    new Post('Title 1', 'Google Cloud', '2021-06-01', 'Description 1'),
    new Post('Title 2', 'Google Cloud', '2021-06-15', 'Description 2'),
    new Post('Title 3', 'AWS', '2021-07-01', 'Description 3'),
    new Post('Title 4', 'AWS', '2021-07-15', 'Description 4'),
  ];

  setPosts(posts: Post[]) {
    this.posts = posts;
  }

  getPosts() {
    return this.posts.slice();
  }

  getPost(index: number) {
    return this.posts[index];
  }
}