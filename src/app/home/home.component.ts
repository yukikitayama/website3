import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  selectedPost: Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.postSelected.subscribe(
      (post: Post) => {
        this.selectedPost = post;
      }
    )
  }

}
