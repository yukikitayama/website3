import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostService } from "./post.service";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class DataStorageService implements OnInit {
  constructor(
    private http: HttpClient, 
    // private postService: PostService
  ) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>('https://yukikitayama-com-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        console.log(posts);
        // this.postService.setPosts(posts);
      });
  }
}