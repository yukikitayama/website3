import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {
  postSelected = new EventEmitter<Post>();

  // private posts: Post[] = [
  //   new Post('Title 10', 'Google Cloud', '2021-06-01', 'Description 1'),
  //   new Post('Title 2', 'Google Cloud', '2021-06-15', 'Description 2'),
  //   new Post('Title 3', 'AWS', '2021-07-01', 'Description 3'),
  //   new Post('Title 4', 'AWS', '2021-07-15', 'Description 4'),
  // ];
  private posts: Post[] = [];

  constructor(private http: HttpClient) {}

  setPosts(posts: Post[]) {
    this.posts = posts;
  }

  getPosts() {
    return this.posts.slice();
  }

  getPost(index: number) {
    return this.posts[index];
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>('https://yukikitayama-com-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        tap(posts => {
          this.setPosts(posts);
        }));
  }

  fetchGcpPosts() {
    return this.http
      .get<{ [key: string]: Post }>('https://yukikitayama-com-default-rtdb.firebaseio.com/gcp.json')
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        tap(posts => {
          this.setPosts(posts);
        }));
  }
}